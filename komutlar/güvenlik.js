const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message,args) => {
  
   // if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if (!logkanal) return message.channel.send(`<:hayir:621695091257376769> Ayarlanmayan şeyi **sıfırlayamam**!`)
    
    
   db.delete(`guvenlik_${message.guild.id}`)
   message.channel.send(`<:evet:621695069082353664> Güvenlik başarıyla **sıfırlandı**!`);
  
    return
  }
  
if (!logk) return message.channel.send('<:hayir:621695091257376769> Güvenlik kanalını **bulamadım**! Kullanım `n!güvenlik #kanal`');
 

   db.set(`güvenlik_${message.guild.id}`, logk.id)

message.channel.send(`<:evet:621695069082353664> Güvenlik başarıyla ${logk} olarak **ayarlandı**!`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 4
};

module.exports.help = {
  name: 'güvenlik',
  description: 'Bratva STARK',
  usage: 'STARKtan hediye :)'
};