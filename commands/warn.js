const Discord = require('discord.js');
const config = require("../config.json")
exports.run = (client, message, args) => {
  let permissionCheck = message.author.id
    if (message.guild.member(permissionCheck).hasPermission("KICK_MEMBERS") || message.guild.member(permissionCheck).hasPermission("BAN_MEMBERS")) {
      let reason = args.slice(1).join(' ');
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
      if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
      const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setDescription(`**Protocol:** Warning.exe\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
      return client.channels.get(modlog.id).send({embed});
    }
    else {
      message.channel.send("`warn.exe has stopped working`: Missing permissions")
    }
};
