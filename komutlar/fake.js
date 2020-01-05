const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
         

module.exports.run = async (client,message,args) => {
	           let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

	    // if ( message.author.id != ayarlar.sahip )return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<a:dikkat:559246306305114129> Bu Komutu Kullanmak İçin **`Reisim`** Olman Lazım!').setColor("RANDOM"));
  if (!args[0]) return message.channel.send(`<:hayir:621695091257376769> Lütfen **katıl** ya da **ayrıl** yaz ! `)
  
  
  if (args[0] == 'katıl' || args[0] == 'gir') {
client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author)); 
    return message.channel.send('<:evet:621695069082353664> Başarıyla sunucuya sahte **giriş yaptın**!')
}

if (args[0] == 'ayrıl' || args[0] == 'çık') {
    
  client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));

      return message.channel.send('<:evet:621695069082353664> Başarıyla sunucuya sahte **çıkış yaptın**!')
   
  }
 
  


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahte'],
  permLevel: 0
};

module.exports.help = {
  name: 'fake',
  description: 'Rastgele tavşan resmi gönderir.',
  usage: 'dnd'
};
