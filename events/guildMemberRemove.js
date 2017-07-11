exports.run = (client, member) => {
  let guild = member.guild;
  guild.defaultChannel.send(`\`Error:\` Could not find ${member.user}.exe, maybe it was been removed?`)
  .then(msg => {
    msg.delete(60000)
  })
  .catch(console.error);
}
