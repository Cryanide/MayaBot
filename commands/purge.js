exports.run = function(client, message, args) {
  let permissionCheck = message.author.id
  if (message.guild.member(permissionCheck).hasPermission("MANAGE_MESSAGES") && message.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) {
    let messagecount = parseInt(args.join(' '));
    let deletedmsgs = messagecount + 1
    if(deletedmsgs > 100) deletedmsgs = 100
    message.channel.fetchMessages({
      limit: deletedmsgs
    }).then(messages => {
      if(messages > 100) messages = 100
      message.channel.bulkDelete(messages)
      if(isNaN(messagecount)) {
        message.channel.send(`You never told me a number so I deleted 50 messages on default`)
        .then(m => {
          m.delete(15000)
          })
          return;
        }
      message.channel.send(`Deleted ${messagecount} messages.`)
      .then(delmsg => {
        delmsg.delete(15000)
      })
    });
  }
  else {
    message.channel.send("`purge.exe has stopped working`: Missing permissions")
  }
};
