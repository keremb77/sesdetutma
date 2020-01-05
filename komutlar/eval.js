const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  //if (message.author.id !== '466594948565827594') return message.channel.send('Yetkin **yetersiz !!!**');

  let token = 'BeRK sanırsam kendinde olmayabilir! Tokenimi istemek gibi saçma şeyler falan filan!' 
  
  let code = args.join(" ")
  if (!code) return message.reply('<:hayir:621695091257376769> Ne unuttun **sence?**')
  
  function clean(text) {
		if (typeof text !== 'string')
			text = require('util').inspect(text, { depth: 0 })
		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
		return text;
	};
  
	try {
		var evaled = clean(await eval(code));
		if(evaled.startsWith('NTA2N')) evaled = token
	
		message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
	}
	catch (err) {
		let evalEmbed = new Discord.RichEmbed().addField('Hata Var', `\`\`\`js\n${err}\n\`\`\``).setColor("#FFB900")
		message.channel.send(evalEmbed);
	}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: '[sahip]',
  usage: 'eval'
};
