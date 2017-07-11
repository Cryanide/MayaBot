exports.run = (client, message, args) => {
  let owner = "171015121135468545"
  if (message.author.id === owner) {
    message.author.send("Initiating shutdown squence")
    message.channel.send("Done for the night, I hope")
    .then(dc => {
      client.destroy()
      process.exit()
    })
  }
  else {
    message.channel.send("Sorry, you do not have permission")
  }
}
