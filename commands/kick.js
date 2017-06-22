const Discord = require('discord.js');
const config = require("../config.json")
exports.run = (client, message, args) => {
  let onoff = config.commandswitch.ping
  let permissionCheck = message.author.id
  if (onoff === "on") {
    if(message.guild.member(permissionCheck).hasPermission("KICK_MEMBERS")) {
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
      if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

      if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
      message.guild.member(user).kick();

      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setDescription(`**Protocol:** Kick.exe\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
      return client.channels.get(modlog.id).send({embed});
    }
    else {
      message.channel.send("`Kick.exe has stopped working`: Missing permissions")
    }
  }
  else message.reply("Error running protocol: disabled")
};
