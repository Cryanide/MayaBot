const config = require("../config.json")
exports.run = (client, message, args) => {
    message.channel.send('Requesting Pong.exe....')
    .then(msg => {
      msg.edit(`Pong.exe took ${msg.createdTimestamp - message.createdTimestamp}ms to respond`);
    });
  });
