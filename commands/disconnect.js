exports.run = (client, message, args) => {
  let owner = "171015121135468545"
  if (message.author.id === owner) {
    message.channel.send("adios")
    .then(dc => {
      client.destroy()
      process.exit()
    })
  }
  else {
    message.channel.send("Sorry, you do not have permission")
  }
}
