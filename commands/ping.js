const config = require("../config.json")
exports.run = (client, message, args) => {
  let onoff = config.commandswitch.ping
  if(onoff === "on") {
    message.channel.send('Requesting Pong.exe....')
    .then(msg => {
      msg.edit(`Pong.exe took ${msg.createdTimestamp - message.createdTimestamp}ms to respond`);
    });
  }
  else {
    message.reply("Error running protocol: disabled")
  }
}
