const Discord = require("discord.js");

module.exports = async (message) => {
    if(message.author.bot) return;

    messagedb.s.add(`${message.author.id}.channel.${message.channel.id}`, +1)
    messagedb.s.add(`${message.author.id}.limit`, +1)
    badgedb.s.add(`${message.author.id}.message.point`, +1)
    achidb.s.add(`${message.author.id}.message.point`, +1)
    if(messagedb.get(`${message.author.id}.point`) >= messagedb.get(`${message.author.id}.pointlimit`)) {
        messagedb.s.add(message.author.id+".level", +1);
        messagedb.set(message.author.id+".point", 0);
        messagedb.s.add(message.author.id+".pointlimit", +1000);
    }
    if(totaldb.get(`${message.author.id}.point`) >= totaldb.get(`${message.author.id}.pointlimit`)) {
        totaldb.s.add(message.author.id+".level", +1);
        totaldb.set(message.author.id+".point", 0);
        totaldb.s.add(message.author.id+".pointlimit", +1000);
    }
    if(messagedb.get(`${message.author.id}.limit`) >= 9) {
        messagedb.del(`${message.author.id}.limit`)
        messagedb.s.add(`${message.author.id}.point`, +5)
        totaldb.s.add(`${message.author.id}.point`, +5)
    }
    let badgePoint = badgedb.get(`${message.author.id}.message.point`);
    if(badgedb.get(message.author.id+".message.normal") === false) {
    if(badgePoint >= badge.chat_badges.badge1.point) { badgedb.set(message.author.id+".message.normal", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Normal Yazılı Rozetini (${badge.chat_badges.badge1.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgedb.get(message.author.id+".message.gold") === false) {
    if(badgePoint >= badge.chat_badges.badge2.point) { badgedb.set(message.author.id+".message.gold", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Altın Yazılı Rozetini (${badge.chat_badges.badge2.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgedb.get(message.author.id+".message.diamond") === false) {
    if(badgePoint >= badge.chat_badges.badge3.point) { badgedb.set(message.author.id+".message.diamond", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Elmas Yazılı Rozetini (${badge.chat_badges.badge3.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgedb.get(message.author.id+".message.emerald") === false) {
    if(badgePoint >= badge.chat_badges.badge4.point) { badgedb.set(message.author.id+".message.emerald", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Zümrüt Yazılı Rozetini (${badge.chat_badges.badge4.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgePoint < badge.chat_badges.badge1.point) badgedb.set(message.author.id+".message.normal", false);
    if(badgePoint < badge.chat_badges.badge2.point) badgedb.set(message.author.id+".message.gold", false);
    if(badgePoint < badge.chat_badges.badge3.point) badgedb.set(message.author.id+".message.diamond", false);
    if(badgePoint < badge.chat_badges.badge4.point) badgedb.set(message.author.id+".message.emerald", false);

    let achiPoint = achidb.get(`${message.author.id}.message.point`);
    if(achidb.get(message.author.id+".message.achi1") === false) {
    if(achiPoint >= achi.chat_achis.achi1.point){ achidb.set(message.author.id+".message.achi1", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi1.name}** başarımını kazandı.`) 
    }
    }  
    if(achidb.get(message.author.id+".message.achi2") === false) {
    if(achiPoint >= achi.chat_achis.achi2.point){ achidb.set(message.author.id+".message.achi2", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi2.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi3") === false) {
    if(achiPoint >= achi.chat_achis.achi3.point){ achidb.set(message.author.id+".message.achi3", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi3.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi4") === false) {
    if(achiPoint >= achi.chat_achis.achi4.point){ achidb.set(message.author.id+".message.achi4", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi4.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi5") === false) {
    if(achiPoint >= achi.chat_achis.achi5.point){ achidb.set(message.author.id+".message.achi5", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi5.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi6") === false) {
    if(achiPoint >= achi.chat_achis.achi6.point){ achidb.set(message.author.id+".message.achi6", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi6.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi7") === false) {
    if(achiPoint >= achi.chat_achis.achi7.point){ achidb.set(message.author.id+".message.achi7", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi7.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi8") === false) {
    if(achiPoint >= achi.chat_achis.achi8.point){ achidb.set(message.author.id+".message.achi8", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi8.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi9") === false) {
    if(achiPoint >= achi.chat_achis.achi9.point){ achidb.set(message.author.id+".message.achi9", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi9.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi10") === false) {
    if(achiPoint >= achi.chat_achis.achi10.point){ achidb.set(message.author.id+".message.achi10", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi10.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi11") === false) {
    if(achiPoint >= achi.chat_achis.achi11.point){ achidb.set(message.author.id+".message.achi11", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi11.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".message.achi12") === false) {
    if(achiPoint >= achi.chat_achis.achi12.point){ achidb.set(message.author.id+".message.achi12", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.chat_achis.achi12.name}** başarımını kazandı.`) 
    }  
    }  
    if(achiPoint < achi.chat_achis.achi1.point) achidb.set(message.author.id+".message.achi1", false);
    if(achiPoint < achi.chat_achis.achi2.point) achidb.set(message.author.id+".message.achi2", false);
    if(achiPoint < achi.chat_achis.achi3.point) achidb.set(message.author.id+".message.achi3", false);
    if(achiPoint < achi.chat_achis.achi4.point) achidb.set(message.author.id+".message.achi4", false);
    if(achiPoint < achi.chat_achis.achi5.point) achidb.set(message.author.id+".message.achi5", false);
    if(achiPoint < achi.chat_achis.achi6.point) achidb.set(message.author.id+".message.achi6", false);
    if(achiPoint < achi.chat_achis.achi7.point) achidb.set(message.author.id+".message.achi7", false);
    if(achiPoint < achi.chat_achis.achi8.point) achidb.set(message.author.id+".message.achi8", false);
    if(achiPoint < achi.chat_achis.achi9.point) achidb.set(message.author.id+".message.achi9", false);
    if(achiPoint < achi.chat_achis.achi10.point) achidb.set(message.author.id+".message.achi10", false);
    if(achiPoint < achi.chat_achis.achi11.point) achidb.set(message.author.id+".message.achi11", false);
    if(achiPoint < achi.chat_achis.achi12.point) achidb.set(message.author.id+".message.achi12", false);

    if(voicedb.get(`${message.author.id}.point`) >= voicedb.get(`${message.author.id}.pointlimit`)) {
        voicedb.s.add(message.author.id+".level", +1);
        voicedb.set(message.author.id+".point", 0);
        voicedb.s.add(message.author.id+".pointlimit", +1000);
    }
    
    let vbadgePoint = badgedb.get(`${message.author.id}.voice.point`);
    if(badgedb.get(message.author.id+".voice.normal") === false) {
    if(vbadgePoint >= badge.voice_badges.badge1.point) { badgedb.set(message.author.id+".voice.normal", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Normal Sesli Rozetini (${badge.voice_badges.badge1.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgedb.get(message.author.id+".voice.gold") === false) {
    if(vbadgePoint >= badge.voice_badges.badge2.point) { badgedb.set(message.author.id+".voice.gold", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Altın Sesli Rozetini (${badge.voice_badges.badge2.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgedb.get(message.author.id+".voice.diamond") === false) {
    if(vbadgePoint >= badge.voice_badges.badge3.point) { badgedb.set(message.author.id+".voice.diamond", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Elmas Sesli Rozetini (${badge.voice_badges.badge3.name}) başarıyla kazandı.`)
    }  
    }  
    if(badgedb.get(message.author.id+".voice.emerald") === false) {
    if(vbadgePoint >= badge.voice_badges.badge4.point) { badgedb.set(message.author.id+".voice.emerald", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı Zümrüt Sesli Rozetini (${badge.voice_badges.badge4.name}) başarıyla kazandı.`)
    }  
    }  
    if(vbadgePoint < badge.voice_badges.badge1.point) badgedb.set(message.author.id+".voice.normal", false);
    if(vbadgePoint < badge.voice_badges.badge2.point) badgedb.set(message.author.id+".voice.gold", false);
    if(vbadgePoint < badge.voice_badges.badge3.point) badgedb.set(message.author.id+".voice.diamond", false);
    if(vbadgePoint < badge.voice_badges.badge4.point) badgedb.set(message.author.id+".voice.emerald", false);

    let vachiPoint = achidb.get(`${message.author.id}.voice.point`);
    if(achidb.get(message.author.id+".voice.achi1") === false) {
    if(vachiPoint >= achi.voice_achis.achi1.point){ achidb.set(message.author.id+".voice.achi1", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi1.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi2") === false) {
    if(vachiPoint >= achi.voice_achis.achi2.point){ achidb.set(message.author.id+".voice.achi2", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi2.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi3") === false) {
    if(vachiPoint >= achi.voice_achis.achi3.point){ achidb.set(message.author.id+".voice.achi3", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi3.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi4") === false) {
    if(vachiPoint >= achi.voice_achis.achi4.point){ achidb.set(message.author.id+".voice.achi4", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi4.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi5") === false) {
    if(vachiPoint >= achi.voice_achis.achi5.point){ achidb.set(message.author.id+".voice.achi5", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi5.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi6") === false) {
    if(vachiPoint >= achi.voice_achis.achi6.point){ achidb.set(message.author.id+".voice.achi6", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi6.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi7") === false) {
    if(vachiPoint >= achi.voice_achis.achi7.point){ achidb.set(message.author.id+".voice.achi7", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi7.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi8") === false) {
    if(vachiPoint >= achi.voice_achis.achi8.point){ achidb.set(message.author.id+".voice.achi8", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi8.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi9") === false) {
    if(vachiPoint >= achi.voice_achis.achi9.point){ achidb.set(message.author.id+".voice.achi9", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi9.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi10") === false) {
    if(vachiPoint >= achi.voice_achis.achi10.point){ achidb.set(message.author.id+".voice.achi10", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi10.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi11") === false) {
    if(vachiPoint >= achi.voice_achis.achi11.point){ achidb.set(message.author.id+".voice.achi11", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi11.name}** başarımını kazandı.`) 
    }  
    }  
    if(achidb.get(message.author.id+".voice.achi12") === false) {
    if(vachiPoint >= achi.voice_achis.achi12.point){ achidb.set(message.author.id+".voice.achi12", true);
    message.channel.send(`<@${message.member.id}>`+` kullanıcısı **${achi.voice_achis.achi12.name}** başarımını kazandı.`) 
    }  
    }  
    if(vachiPoint < achi.voice_achis.achi1.point) achidb.set(message.author.id+".voice.achi1", false);
    if(vachiPoint < achi.voice_achis.achi2.point) achidb.set(message.author.id+".voice.achi2", false);
    if(vachiPoint < achi.voice_achis.achi3.point) achidb.set(message.author.id+".voice.achi3", false);
    if(vachiPoint < achi.voice_achis.achi4.point) achidb.set(message.author.id+".voice.achi4", false);
    if(vachiPoint < achi.voice_achis.achi5.point) achidb.set(message.author.id+".voice.achi5", false);
    if(vachiPoint < achi.voice_achis.achi6.point) achidb.set(message.author.id+".voice.achi6", false);
    if(vachiPoint < achi.voice_achis.achi7.point) achidb.set(message.author.id+".voice.achi7", false);
    if(vachiPoint < achi.voice_achis.achi8.point) achidb.set(message.author.id+".voice.achi8", false);
    if(vachiPoint < achi.voice_achis.achi9.point) achidb.set(message.author.id+".voice.achi9", false);
    if(vachiPoint < achi.voice_achis.achi10.point) achidb.set(message.author.id+".voice.achi10", false);
    if(vachiPoint < achi.voice_achis.achi11.point) achidb.set(message.author.id+".voice.achi11", false);
    if(vachiPoint < achi.voice_achis.achi12.point) achidb.set(message.author.id+".voice.achi12", false);
}; 

   module.exports.config = {
       name: "message"
     }