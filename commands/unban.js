const config = require("../config.json")
exports.run = (client, message, args) => {
  let onoff = config.commandswitch.ping
  if (onoff === "on") {
    let reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    let user = args[0];
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) {
      message.reply('I cannot find a mod-log channel');
      if(message.guild.members.get('326735138769862656').hasPermission('MANAGE_CHANNELS')) {
        message.channel.send("Running `createChannel.exe`...")
        message.guild.createChannel('mod-log', 'text')
        .then(chan => {
          message.channel.send(`${chan} has been created, please run the command again`)
        })
      }
      else message.channel.send("`createChannel.exe has stopped working`: Unable to create a new channel, create one please")
    }
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);
  }
  else {
    message.reply("Error running protocol: disabled")
  }
};
