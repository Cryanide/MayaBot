exports.run = (client, message, args) => {
  let owner = "171015121135468545"
  if (message.author.id === owner) {
    if(!args || args.size < 2) return message.channel.reply("Must provide a command/file name to reload.");
      delete require.cache[require.resolve(`./${args[0]}.js`)];
      message.reply(`The command \`${args[0]}\` has been reloaded`);
    }
  else {
    message.channel.send("Sorry, you do not have permission")
  }
};
