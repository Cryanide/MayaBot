const Discord = require('discord.js');
const config = require("../config.json")
exports.run = (client, message, args) => {
  let onoff = config.commandswitch.ping
  let permissionCheck = message.author.id
  if (onoff === "on") {
    if (message.guild.member(permissionCheck).hasPermission("MUTE_MEMBERS")) {
      let reason = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      let modlog = message.guild.channels.find('name', 'mod-log');
      let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
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
      if (!muteRole) {
            e.guild.createRole({
            name: 'muted',
            color: 'black',
            permissions: 1049600
          })
          .then(role => {
            message.channel.send("Mute.exe has stopped working, ran `createRole` Protocol for `muted`\nSuccess, please run command again")
          })
        }
      if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setDescription(`**Protocol:** Un/mute.exe\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

      if (!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.reply('I do not have the correct permissions.').catch(console.error);

      if (message.guild.member(user).roles.has(muteRole.id)) {
        message.guild.member(user).removeRole(muteRole).then(() => {
          client.channels.get(modlog.id).send({embed}).catch(console.error);
        });
      } else {
        message.guild.member(user).addRole(muteRole).then(() => {
          client.channels.get(modlog.id).send({embed}).catch(console.error);
        });
      }
    }
    else {
      message.channel.send("`Mute.exe has stopped working`: Missing permissions")
    }

  }
  else message.reply("Error running protocol: disabled")


};
