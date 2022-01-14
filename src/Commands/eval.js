const { Discord, MessageEmbed } = require("discord.js");

module.exports.config = {
    name: "eval",
    aliases: ["eval"]
};
module.exports.execute = async(client , message, args) => {

                    if (message.author.id === conf.owner) {

                              try {
                                        let code = args.join(' ')
                                        let evaled = eval(code)

                                        evaled = require('util').inspect(evaled)

                                        if (!code) return message.channel.send("komutum nerde knk")

                                        if (evaled.match(new RegExp(`${client.token}`, 'g'))) return message.channel.send("bak bak hoppa")

                                        message.channel.send(`\`\`\`js\n${evaled.length > 1000 ? `${evaled.slice(0, 1000)}...` : `${clean(evaled)}`}\`\`\``)
                              } catch (err) {
                                        message.channel.send(`\`\`\`js\n${clean(err).length > 1000 ? `${clean(err).slice(0, 1000)}...` : `${clean(err)}`}\n\`\`\``)
                              }
                    }

          }

function clean(text) {
          if (typeof (text) == 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
          else return text
};