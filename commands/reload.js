exports.run = (client, message, args) => {
  let owner = "171015121135468545"
  if (message.author.id === owner) {
    if(!args || args.size < 2) return message.channel.reply("Must provide a command/file name to reload.");
    if(args[0] === "command") {
      // the path is relative to the *current folder*, so just ./filename.js
      delete require.cache[require.resolve(`./${args[1]}.js`)];
      message.reply(`The command \`${args[1]}\` has been reloaded`);
    }
    else if (args[0] === "file") {
      delete require.cache[require.resolve(`../${args[1]}`)];
      message.reply(`The file \`${args[1]}\` has been reloaded`);
    }
  }
  else {
    message.channel.send("Sorry, you do not have permission")
  }
};
