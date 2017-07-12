exports.run = (client, message, args) => {
  const config = require("../config.json")
  const Discord = require('discord.js');
  let bot = message.guild.member(client.user.id).displayName
  let victim = message.mentions.users.first();
  let orderer = message.guild.member(message.author.id).displayName
  hax = config.hackgif[Math.floor(Math.random() * config.hackgif.length)]
  hex = '0x'+ Math.floor(Math.random()*16777215).toString(16);
  if(message.mentions.users.size < 1) return message.channel.send("I can't hack no one, mention someone please")
  let hackie = message.guild.member(victim).displayName
  if(orderer === hackie) return message.reply("Do you really want me to hack yourself, you're actually a moron")
  if(hackie === bot) return message.reply("Do you take me for a fool or something? I'm not hacking myself")
  message.channel.send(`<@${message.author.id}> has hacked ${victim}`)
  setTimeout(() => {
    const hacker = new Discord.RichEmbed()
    .setImage(hax)
    .setColor(hex)
    .setFooter(`${orderer} has ordered me to hack ${hackie}`)
    .setTimestamp()
    message.channel.send("Order recived and accepted")
    .then(msg => {
      msg.delete(700)
      setTimeout(() => {
        message.channel.send({ embed: hacker });
      },700)
    })
  },100)
  //message.channel.send({ files: [`./${hax}`] });
  //console.log(hax)
}
