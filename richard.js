const {Discord,Client,MessageEmbed,Collection} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
require('discord-buttons')(client);

///////////////// GLOBALS /////////////////
const achi = global.achi = require("./src/Configs/Achievements.js");
const badge = global.badge = require("./src/Configs/Badges.js");
const conf = global.conf = require("./src/Configs/Config.json");
client.login(conf.token).catch(err => err.console.log("token hatalı knk"));
const Veritabani = require("fresh.db");
let achidb = global.achidb = new Veritabani({name:"achidb", prettySave: true, folderPath:__dirname + "/src/Models"});
let badgedb = global.badgedb = new Veritabani({name:"badgedb", prettySave: true, folderPath:__dirname + "/src/Models"});
let messagedb = global.messagedb = new Veritabani({name:"messagedb", prettySave: true, folderPath:__dirname + "/src/Models"});
let voicedb = global.voicedb = new Veritabani({name:"voicedb", prettySave: true, folderPath:__dirname + "/src/Models"});
let totaldb = global.totaldb = new Veritabani({name:"totaldb", prettySave: true, folderPath:__dirname + "/src/Models"});

//////////////// GLOBALS /////////////////
//// COMMAND HANDLER ////
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
//// COMMAND HANDLER ////

client.on("message", (message) => {
  if (message.author.bot || !message.channel || message.channel.type == "dm") return;
  if(!messagedb.get(message.author.id)) messagedb.set(message.author.id, { "level": 1, "point": 0, "pointlimit": 1000 });
  if(!voicedb.get(message.author.id)) voicedb.set(message.author.id, { "level": 1, "point": 0, "pointlimit": 1000 });
  if(!totaldb.get(message.author.id)) totaldb.set(message.author.id, { "level": 1, "point": 0, "pointlimit": 1000 });
  if(!badgedb.get(message.author.id+".message")) badgedb.set(message.author.id+".message", { "point": 0, "normalmessage": false, "goldmessage": false, "diamondmessage": false, "emeraldmessage": false });
  if(!badgedb.get(message.author.id+".voice")) badgedb.set(message.author.id+".voice", { "point": 0, "normalvoice": false, "goldvoice": false, "diamondvoice": false, "emeraldvoice": false });
  if(!achidb.get(message.author.id+".message")) achidb.set(message.author.id+".message", { "point": 0, "achi1": false, "achi2": false, "achi3": false, "achi4": false, "achi5": false, "achi6": false, "achi7": false, "achi8": false, "achi9": false, "achi10": false, "achi11": false, "achi12": false });
  if(!achidb.get(message.author.id+".voice")) achidb.set(message.author.id+".voice", { "point": 0, "achi1": false, "achi2": false, "achi3": false, "achi4": false, "achi5": false, "achi6": false, "achi7": false, "achi8": false, "achi9": false, "achi10": false, "achi11": false, "achi12": false });
    if (!message.content.startsWith(conf.prefix)) return;
    let args = message.content
        .substring(conf.prefix.length)
        .split(" ");
    let command = args[0];
    let bot = message.client;
    args = args.splice(1);
    let calistirici;
    if (commands.has(command)) {
      calistirici = commands.get(command);
      calistirici.execute(bot, message, args);
    } else if (aliases.has(command)) {
      calistirici = aliases.get(command);
      calistirici.execute(bot, message, args);
    }
  })
      /////////////////// HANDLER ///////////////////
  fs.readdir("./src/Commands", (err, files) => {
    if(err) return console.error(err);
      files = files.filter(file => file.endsWith(".js"));
      console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
      files.forEach(file => {
  let prop = require(`./src/Commands/${file}`);
    if(!prop.config) return;
    if(typeof prop.onLoad === "function") prop.onLoad(client);
      commands.set(prop.config.name, prop);
    if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
  });
      ///////////////////
  fs.readdir("./src/Events", (err, files) => {
    if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
      files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/Events/${file}`);
    if(!prop.config) return;
        client.on(prop.config.name, prop);
        });
      });
  /////////////////// HANDLER ///////////////////