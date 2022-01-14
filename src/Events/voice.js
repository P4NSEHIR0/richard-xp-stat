module.exports = async () => {
    let guild = client.guilds.cache.get(conf.server);
      setInterval( async () => {
   let channels = guild.channels.cache.filter(channel => channel.type == "voice" && channel.members.size > 0);
   channels.forEach(channel => {
       let members = channel.members.filter(member => !member.user.bot);
       members.forEach(member => {

    if(voicedb.get(`${member.id}.point`) >= voicedb.get(`${member.id}.pointlimit`)) {
        voicedb.s.add(member.id+".level", +1);
        voicedb.set(member.id+".point", 0);
        voicedb.s.add(member.id+".pointlimit", +1000);
    }
    if(totaldb.get(`${member.id}.point`) >= totaldb.get(`${member.id}.pointlimit`)) {
        totaldb.s.add(member.id+".level", +1);
        totaldb.set(member.id+".point", 0);
        totaldb.s.add(member.id+".pointlimit", +1000);
    }
    voicedb.s.add(`${member.id}.channel.${channel.id}`, +1)
    badgedb.s.add(`${member.id}.voice.point`, +1)
    achidb.s.add(`${member.id}.voice.point`, +1)
    voicedb.s.add(`${member.id}.point`, +1)
    totaldb.s.add(`${member.id}.point`, +1)

    let badgePoint = badgedb.get(`${member.id}.voice.point`);
    if(badgePoint >= badge.voice_badges.badge1.point) badgedb.set(member.id+".voice.normal", true);
    if(badgePoint >= badge.voice_badges.badge2.point) badgedb.set(member.id+".voice.gold", true);
    if(badgePoint >= badge.voice_badges.badge3.point) badgedb.set(member.id+".voice.diamond", true);
    if(badgePoint >= badge.voice_badges.badge4.point) badgedb.set(member.id+".voice.emerald", true);
    if(badgePoint < badge.voice_badges.badge1.point) badgedb.set(member.id+".voice.normal", false);
    if(badgePoint < badge.voice_badges.badge2.point) badgedb.set(member.id+".voice.gold", false);
    if(badgePoint < badge.voice_badges.badge3.point) badgedb.set(member.id+".voice.diamond", false);
    if(badgePoint < badge.voice_badges.badge4.point) badgedb.set(member.id+".voice.emerald", false);

    let achiPoint = achidb.get(`${member.id}.voice.point`);
    if(achiPoint >= achi.voice_achis.achi1.point) achidb.set(member.id+".voice.achi1", true);
    if(achiPoint >= achi.voice_achis.achi2.point) achidb.set(member.id+".voice.achi2", true);
    if(achiPoint >= achi.voice_achis.achi3.point) achidb.set(member.id+".voice.achi3", true);
    if(achiPoint >= achi.voice_achis.achi4.point) achidb.set(member.id+".voice.achi4", true);
    if(achiPoint >= achi.voice_achis.achi5.point) achidb.set(member.id+".voice.achi5", true);
    if(achiPoint >= achi.voice_achis.achi6.point) achidb.set(member.id+".voice.achi6", true);
    if(achiPoint >= achi.voice_achis.achi7.point) achidb.set(member.id+".voice.achi7", true);
    if(achiPoint >= achi.voice_achis.achi8.point) achidb.set(member.id+".voice.achi8", true);
    if(achiPoint >= achi.voice_achis.achi9.point) achidb.set(member.id+".voice.achi9", true);
    if(achiPoint >= achi.voice_achis.achi10.point) achidb.set(member.id+".voice.achi10", true);
    if(achiPoint >= achi.voice_achis.achi11.point) achidb.set(member.id+".voice.achi11", true);
    if(achiPoint >= achi.voice_achis.achi12.point) achidb.set(member.id+".voice.achi12", true);
    if(achiPoint < achi.voice_achis.achi1.point) achidb.set(member.id+".voice.achi1", false);
    if(achiPoint < achi.voice_achis.achi2.point) achidb.set(member.id+".voice.achi2", false);
    if(achiPoint < achi.voice_achis.achi3.point) achidb.set(member.id+".voice.achi3", false);
    if(achiPoint < achi.voice_achis.achi4.point) achidb.set(member.id+".voice.achi4", false);
    if(achiPoint < achi.voice_achis.achi5.point) achidb.set(member.id+".voice.achi5", false);
    if(achiPoint < achi.voice_achis.achi6.point) achidb.set(member.id+".voice.achi6", false);
    if(achiPoint < achi.voice_achis.achi7.point) achidb.set(member.id+".voice.achi7", false);
    if(achiPoint < achi.voice_achis.achi8.point) achidb.set(member.id+".voice.achi8", false);
    if(achiPoint < achi.voice_achis.achi9.point) achidb.set(member.id+".voice.achi9", false);
    if(achiPoint < achi.voice_achis.achi10.point) achidb.set(member.id+".voice.achi10", false);
    if(achiPoint < achi.voice_achis.achi11.point) achidb.set(member.id+".voice.achi11", false);
    if(achiPoint < achi.voice_achis.achi12.point) achidb.set(member.id+".voice.achi12", false);
    });
   });
   }, 60000);
 }
 
 module.exports.config = {
     name: "ready"
 }
