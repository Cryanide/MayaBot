const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message, args) {
  let onoff = config.commandswitch.ping
  let permissionCheck = message.author.id
  if (onoff === "on") {
    if (message.guild.member(permissionCheck).hasPermission("BAN_MEMBERS")) {
      let nickchange = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      let modlog = message.guild.channels.find('name', 'mod-log');
      if (!modlog) {
        message.reply('I cannot find a mod-log channel');
        if(message.guild.members.get('326735138769862656').hasPermission('MANAGE_CHANNELS')) {
          message.channel.send("Running `createChannel.exe`...")
          message.guild.createChannel('mod-log', 'text')
          .then(chan => {
            message.channel.send(`${chan} has been created for future use`)
          })
        }
        else message.channel.send("`createChannel.exe has stopped working`: Unable to create a new channel, create one please")
      }
      if(nickchange.length < 1 || nickchange.length > 32) message.reply("Nickname.exe has stopped working: The length of the nickname is invalid")
      if (message.mentions.users.size < 1) return message.reply('Nickname.exe has stopped working: no user found').catch(console.error);
      message.guild.member(user).setNickname(nickchange)
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setDescription(`**Protocol:** Nickname.exe\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}`);
        return client.channels.get(modlog.id).send({embed});
    }
    else {
      message.channel.send("`forceNicknameChange.exe has stopped working`: Missing permissions")
    }
  }
};
