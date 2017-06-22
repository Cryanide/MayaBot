exports.run = (client, message, args) => {
  message.channel.send("adios")
  .then(dc => {
    process.exit()
  })
}
