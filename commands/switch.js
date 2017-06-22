const config = require("../config.json")
const fs = require("fs");
exports.run = (client, message, args) => {
  let configfile = "../config.json"
  function writefile() {
  	fs.writeFileSync(configfile, JSON.stringify(config, null, 2), 'utf-8');
  }
  let selectcommand = args[0]
  let onoff = args[1]
  if(selectcommand === "ping") {
    if(onoff === "off") {
      config.commandswitch.ping = "off"
      writefile()
      message.channel.send("The command `ping` has been disabled")
    }
    else if (onoff === "on") {
      config.commandswitch.ping = "on"
      writefile()
      message.channel.send("The command `ping` has been enabled")
    }
  }
  /////
  else if (selectcommand === "ban") {
    if(onoff === "off") {
      config.commandswitch.ban = "off"
      writefile()
      message.channel.send("The command `ban` has been disabled")
    }
    else if (onoff === "on") {
      config.commandswitch.ban = "on"
      writefile()
      message.channel.send("The command `ban` has been enabled")
    }
  }
  /////
  else if (selectcommand === "reload" || selectcommand === "disconnect") {
    message.channel.send("This command can't be turned off")
  }
}
