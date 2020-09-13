const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

if (!message.author.hasPermission("KULLANA BILECEK YETKI İSMİ")) return message.channel.send("⚠ Bu Komutu Kullana Bilmek için `KULLANA BILECEK YETKI İSMİ` Yetkisine Sahip Olmalısın!")

const embed = new Discord.RichEmbed()

.setColor("RANDOM") //RANDOM yazarsanız rastgele renk atar
.setTitle("MESAJ BAŞLIĞINIZ")
.setTimestamp() //Bu Ek Saati'de Yollamaya Yarar
.setDescription("MESAJINIZ | ACIKLAMANIZ")
.setFooter("ALT SATIR BASLIGINIZ")
.setImage("Fotoğraf yada Gifiniz Büyük Gözüksün İstiyorsanız Buraya Linkini Koyun")
.setThumbnail("Fotoğraf yada Gifiniz Sağ Üstte Küçük Gözüksün İstiyorsanız Buraya Linkini Koyun")

message.channel.send(embed)

}

exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'Komutunuzun Kullanım Anahtarı İsmi',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}

//boş komuttur sadece olsun diye ekledik :D