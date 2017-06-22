exports.run = function(client, message, args) {
  let permissionCheck = message.author.id
  if (message.guild.member(permissionCheck).hasPermission("MANAGE_MESSAGES") && message.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) {
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => {
      message.channel.bulkDelete(messages)
      message.channel.send(`Deleted ${messagecount} messages.`)
      .then(delmsg => {
        delmsg.delete(10000)
      })
    });
  }
  else {
    message.channel.send("`purge.exe has stopped working`: Missing permissions")
  }
};
