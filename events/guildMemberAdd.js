exports.run = (client, member) => {
  let guild = member.guild;
  guild.defaultChannel.send(`Welcome ${member.user} to this server.`)
  .then(msg => {
    msg.delete(5000)
  })
  .catch(console.error);
}
