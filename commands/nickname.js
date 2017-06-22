const config = require("../config.json")
exports.run = function(client, message, args) {
  let onoff = config.commandswitch.ping
  if (onoff === "on") {
    let nickchange = args.slice(1).join(' ');
    let user = message.mentions.users.first();
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
    if(nickchange.length < 1 || nickchange.length > 32) message.reply("Nickname.exe has stopped working: The length of the nickname is invalid")
    if (message.mentions.users.size < 1) return message.reply('Nickname.exe has stopped working: no user found').catch(console.error);
    message.guild.member(user).setNickname(args)
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setDescription(`**Protocol:** Nickname.exe\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}`);
      message.channel.send({embed})
      .then(m => {
        m.delete(10000)
      })

  }
};
