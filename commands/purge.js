exports.run = function(client, message, args) {
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
};
