const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setDescription('[Commands & easy link to Github](https://github.com/Cryanide/MayaBot/blob/master/Help%20txt)\n[just the commands](https://raw.githubusercontent.com/Cryanide/MayaBot/master/Help%20txt)')
  message.channel.send({ embed })
}
