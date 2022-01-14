const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports.config = {
  name: "rank",
  aliases: ["xp", "rank", "rc", "level", "seviye"],
};

module.exports.execute = async (client,message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let member = message.guild.members.cache.get ( user.id );
    let genel = new MessageButton()
    .setStyle("red") 
    .setLabel('Genel İstatistikleri')
    .setID('genel'); 
  
  let mesaj = new MessageButton()
    .setStyle("blurple")
    .setLabel('Mesaj İstatistikleri')
    .setID('mesaj');

  let sesli = new MessageButton()
    .setStyle("green")
    .setLabel('Sesli İstatistikleri')
    .setID('sesli');

    let messagelevel = messagedb.get(`${user.id}.level`) || 0;
    let messagepoint = messagedb.get(`${user.id}.point`) || 0;
    let messagepointlimit = messagedb.get(`${user.id}.pointlimit`) || 0;
    let voicelevel = voicedb.get(`${user.id}.level`) || 0;
    let voicepoint = voicedb.get(`${user.id}.point`) || 0;
    let voicepointlimit = voicedb.get(`${user.id}.pointlimit`) || 0;
    let level = totaldb.get(`${user.id}.level`) || 0;
    let point = totaldb.get(`${user.id}.point`) || 0;
    let pointlimit = totaldb.get(`${user.id}.pointlimit`) || 0;

      let infoembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(conf.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }));

      const row1 = new MessageActionRow().addComponents(mesaj, genel, sesli)

      const InformationMessage = await message.channel.send({embed: infoembed.setDescription(`${user} **[\`${user.user.tag}\`]** kullanıcısının istatistikleri aşağıda listelenmiştir;

**\`❯\` Genel Durumu**
Genel olarak **${level}**. seviyedesin, **${point}XP**'in bulunuyor ve yeni seviyeye atlamak için **${pointlimit-point}XP** kazanman lazım.`)
.addField("\`❯\` Mesaj Seviye Durumu",`Mesaj olarak **${messagelevel}.** seviyedesin.
➼ En Çok Mesaj Attığın Kanal
${message.guild.channels.cache.filter(channel => messagedb.get(`${user.id}.channel.${channel.id}`)).array().sort((a, b) => Number(messagedb.get(`${user.id}.channel.${b.id}`))-Number(messagedb.get(`${user.id}.channel.${a.id}`))).slice(0, 1).map((value, index) => value).join('\n') || `Bulunmuyor`}
➼ En Az Mesaj Attığın Kanal
${message.guild.channels.cache.filter(channel => messagedb.get(`${user.id}.channel.${channel.id}`)).array().sort((a, b) => Number(messagedb.get(`${user.id}.channel.${b.id}`))-Number(messagedb.get(`${user.id}.channel.${a.id}`))).reverse().slice(0, 1).map((value, index) => value).join('\n')|| `Bulunmuyor`}
`, true)
.addField("\`❯\` Sesli Seviye Durumu",`Sesli olarak **${voicelevel}.** seviyedesin.
➼ En Çok Puan Kazandığın Kanal
${message.guild.channels.cache.filter(channel => voicedb.get(`${user.id}.channel.${channel.id}`)).array().sort((a, b) => Number(voicedb.get(`${user.id}.channel.${b.id}`))-Number(voicedb.get(`${user.id}.channel.${a.id}`))).slice(0, 1).map((value, index) => value).join('\n')|| `Bulunmuyor`}
➼ En Az Puan Kazandığın Kanal
${message.guild.channels.cache.filter(channel => voicedb.get(`${user.id}.channel.${channel.id}`)).array().sort((a, b) => Number(voicedb.get(`${user.id}.channel.${b.id}`))-Number(voicedb.get(`${user.id}.channel.${a.id}`))).reverse().slice(0, 1).map((value, index) => value).join('\n')|| `Bulunmuyor`}
`, true), components: [row1]})
 
    const filter2 = (button) => button.clicker.user.id === message.author.id;
    const InfoCollector = InformationMessage.createButtonCollector(filter2, {
      time: 300000,
    });
    InfoCollector.on("collect", async (button) => {
      button.reply.defer();
      
      if (button.id === "genel") {
        InformationMessage.edit({embed: infoembed.setDescription(`${user} **[\`${user.user.tag}\`]** kullanıcısının istatistikleri aşağıda listelenmiştir;

**\`❯\` Genel Durumu**
Genel olarak **${level}**. seviyedesin, **${point}XP**'in bulunuyor ve yeni seviyeye atlamak için **${pointlimit-point}XP** kazanman lazım.`), components: [row1]})

}
      if (button.id === "mesaj") {

let messageembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(conf.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }));

      let badgesInfo;
      let newBadge;
      let badgeinfo;

      if(!badgedb.get(user.id+".message.normal") === true) { badgeinfo = `Profilinde gösterebileceğim bir rozet bulunmuyor.`; newBadge = `İlk rozetini almak için **${badge.chat_badges.badge1.point-badgedb.get(user.id+".message.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".message.normal") === true) { badgesInfo = `${badge.chat_badges.badge1.name}`; newBadge = `Bir üst rozet olan Altın rozetini almak için **${badge.chat_badges.badge2.point-badgedb.get(user.id+".message.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".message.gold") === true) { badgesInfo = `${badge.chat_badges.badge1.name},${badge.chat_badges.badge2.name}`; newBadge = `Bir üst rozet olan Elmas rozetini almak için **${badge.chat_badges.badge3.point-badgedb.get(user.id+".message.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".message.diamond") === true) { badgesInfo = `${badge.chat_badges.badge1.name},${badge.chat_badges.badge2.name},${badge.chat_badges.badge3.name}`; newBadge = `Bir üst rozet olan Emerald rozetini almak için **${badge.chat_badges.badge4.point-badgedb.get(user.id+".message.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".message.emerald") === true) { badgesInfo = `${badge.chat_badges.badge1.name},${badge.chat_badges.badge2.name},${badge.chat_badges.badge3.name},${badge.chat_badges.badge4.name}`; newBadge = ``; }
      if(badgedb.get(user.id+".message.normal") === true) { badgeinfo = `Profilinde birbirinden güzel gözüken rozetlerden sadece **${badgesInfo}** rozeti(leri) sende bulunuyor.`; }

InformationMessage.edit({embed: messageembed.setDescription(`${user} **[\`${user.user.tag}\`]** kullanıcısının istatistikleri aşağıda listelenmiştir;

**\`❯\` Mesaj Durumu**
Mesaj olarak **${messagelevel}**. seviyedesin, **${messagepoint}XP**'in bulunuyor ve yeni seviyeye atlamak için **${messagepointlimit-messagepoint}XP** kazanman lazım.

**\`❯\` Rozet Durumu**
${badgeinfo} ${newBadge}`)
.addField("\`❯\` En Çok Mesaj Attığı Kanallar",`${message.guild.channels.cache.filter(channel => messagedb.get(`${user.id}.channel.${channel.id}`)).array().sort((a, b) => Number(messagedb.get(`${user.id}.channel.${b.id}`))-Number(messagedb.get(`${user.id}.channel.${a.id}`))).slice(0, 11).map((value, index) => `➼ ${value} - \`${messagedb.get(`${user.id}.channel.${value.id}`)} Mesaj\``).join('\n') || `Yeterli Veri Bulunamadı.`}`, true)
.addField("\`❯\` Başarım Durumu",`➼ **${achi.chat_achis.achi1.name}**: ${achidb.get(user.id+".message.achi1") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi2.name}**: ${achidb.get(user.id+".message.achi2") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi3.name}**: ${achidb.get(user.id+".message.achi3") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi4.name}**: ${achidb.get(user.id+".message.achi4") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi5.name}**: ${achidb.get(user.id+".message.achi5") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi6.name}**: ${achidb.get(user.id+".message.achi6") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi7.name}**: ${achidb.get(user.id+".message.achi7") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi8.name}**: ${achidb.get(user.id+".message.achi8") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi9.name}**: ${achidb.get(user.id+".message.achi9") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi10.name}**: ${achidb.get(user.id+".message.achi10") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi11.name}**: ${achidb.get(user.id+".message.achi11") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.chat_achis.achi12.name}**: ${achidb.get(user.id+".message.achi12") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}`, true), components: [row1]})
}
      if (button.id === "sesli") {
let voiceembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(conf.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }));
      let badgesInfo;
      let newBadge;
      let badgeinfo;

      if(!badgedb.get(user.id+".voice.normal") === true) { badgeinfo = `Profilinde gösterebileceğim bir rozet bulunmuyor.`; newBadge = `İlk rozetini almak için **${badge.voice_badges.badge1.point-badgedb.get(user.id+".voice.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".voice.normal") === true) { badgesInfo = `${badge.voice_badges.badge1.name}`; newBadge = `Bir üst rozet olan Altın rozetini almak için **${badge.voice_badges.badge2.point-badgedb.get(user.id+".voice.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".voice.gold") === true) { badgesInfo = `${badge.voice_badges.badge1.name},${badge.voice_badges.badge2.name}`; newBadge = `Bir üst rozet olan Elmas rozetini almak için **${badge.voice_badges.badge3.point-badgedb.get(user.id+".voice.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".voice.diamond") === true) { badgesInfo = `${badge.voice_badges.badge1.name},${badge.voice_badges.badge2.name},${badge.voice_badges.badge3.name}`; newBadge = `Bir üst rozet olan Emerald rozetini almak için **${badge.voice_badges.badge4.point-badgedb.get(user.id+".voice.point")}XP** kazanman lazım.`; }
      if(badgedb.get(user.id+".voice.emerald") === true) { badgesInfo = `${badge.voice_badges.badge1.name},${badge.voice_badges.badge2.name},${badge.voice_badges.badge3.name},${badge.voice_badges.badge4.name}`; newBadge = ``; }
      if(badgedb.get(user.id+".voice.normal") === true) { badgeinfo = `Profilinde birbirinden güzel gözüken rozetlerden sadece **${badgesInfo}** rozeti(leri) sende bulunuyor.`; }

InformationMessage.edit({embed: voiceembed.setDescription(`${user} **[\`${user.user.tag}\`]** kullanıcısının istatistikleri aşağıda listelenmiştir;

**\`❯\` Sesli Durumu**
Sesli olarak **${voicelevel}**. seviyedesin, **${voicepoint}XP**'in bulunuyor ve yeni seviyeye atlamak için **${voicepointlimit-voicepoint}XP** kazanman lazım.

**\`❯\` Rozet Durumu**
${badgeinfo} ${newBadge}`)
.addField("\`❯\` En Çok Puan Kazandığı Kanallar",`${message.guild.channels.cache.filter(channel => voicedb.get(`${user.id}.channel.${channel.id}`)).array().sort((a, b) => Number(voicedb.get(`${user.id}.channel.${b.id}`))-Number(voicedb.get(`${user.id}.channel.${a.id}`))).slice(0, 11).map((value, index) => `➼ ${value} - \`${voicedb.get(`${user.id}.channel.${value.id}`)} Puan\``).join('\n') || `Yeterli Veri Bulunamadı.`}`, true)
.addField("\`❯\` Başarım Durumu",`➼ **${achi.voice_achis.achi1.name}**: ${achidb.get(user.id+".voice.achi1") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi2.name}**: ${achidb.get(user.id+".voice.achi2") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi3.name}**: ${achidb.get(user.id+".voice.achi3") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi4.name}**: ${achidb.get(user.id+".voice.achi4") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi5.name}**: ${achidb.get(user.id+".voice.achi5") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi6.name}**: ${achidb.get(user.id+".voice.achi6") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi7.name}**: ${achidb.get(user.id+".voice.achi7") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi8.name}**: ${achidb.get(user.id+".voice.achi8") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi9.name}**: ${achidb.get(user.id+".voice.achi9") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi10.name}**: ${achidb.get(user.id+".voice.achi10") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi11.name}**: ${achidb.get(user.id+".voice.achi11") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}
➼ **${achi.voice_achis.achi12.name}**: ${achidb.get(user.id+".voice.achi12") ? "(:white_check_mark:) Alındı.": "(:x:) Alınmadı!"}`, true), components: [row1]})
}


})
};
