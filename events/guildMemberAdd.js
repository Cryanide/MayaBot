exports.run = (client, member) => {
  let guild = member.guild;
  guild.defaultChannel.send(`Creating ${member.user}.exe...\nWelcome to the server!`)
  .then(msg => {
    msg.delete(60000)
  })
  .catch(console.error);
}
