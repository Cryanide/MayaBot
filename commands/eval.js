exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  const fs = require('fs');
  const config = require("../config.json")
  function writefile() {
  	fs.writeFileSync('./config.json', JSON.stringify(config, null, 2), 'utf-8');
  }
  //function {
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
} //}

const evalthis = message.content.split(' ').slice(1);

if (message.content.startsWith(config.prefix + 'eval')) {
  if(message.author.id !== "171015121135468545") return;
  try {
    const code = evalthis.join(' ');
    let evaled = eval(code);

    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);

      message.channel.fetchMessages({limit: 1}).then(msg => {
        const msgs = msg.array().map(r => {
          config.msgtodelete = r.id
          config.msgtodeletecontent = r.content
          writefile()
            })
          })

    config.lastmsg = code
    writefile()

    setTimeout(() => {
      message.channel.send('`Evaluating code via Eval.exe`')
        .then(d => {

          setTimeout(() => {
            message.channel.fetchMessage(config.msgtodelete)
            .then(fe => {
              if(fe.author.id === '171015121135468545') console.log(`Evaled ${config.msgtodeletecontent}`)
              else return;
            })
          },20)

          //message.channel.send(clean(evaled), {code:'xl'})
          const code = new Discord.RichEmbed()
          .setAuthor(`Eval.exe took ${d.createdTimestamp - message.createdTimestamp}ms`, message.author.avatarURL)
          .addField('INPUT :inbox_tray:', config.lastmsg)
          .addField('OUTPUT :outbox_tray:', clean(evaled))
          .setFooter("Eval.exe has successfully evaluated the code with no problems")
          .setColor(0x1ccc0c)
          d.edit({embed: code})
          d.delete(30000)


        })
    },150)

  } catch (err) {
    const code = args.join(' ');
    message.channel.fetchMessages({limit: 1}).then(msg => {
        const msgs = msg.array().map(r => {
          config.msgtodelete = r.id
          config.msgtodeletecontent = r.content
          writefile()
            })
          })

    config.lastmsg = code
    writefile()

    setTimeout(() => {
      message.channel.send('`Evaluating code via Eval.exe`')
        .then(d => {

          setTimeout(() => {
            message.channel.fetchMessage(config.msgtodelete)
            .then(fe => {
              if(fe.author.id === '171015121135468545') console.log(`Evaled ${config.msgtodeletecontent}`)
              else return;
            })
          },20)
        const fomd = new Discord.RichEmbed()
        .setDescription("Eval.exe has encountered a problem, troubleshooted")
        .addField('INPUT :inbox_tray:', config.lastmsg)
        .addField('OUTPUT :outbox_tray:', `\`ERROR:\`\n${clean(err)}\n`)
        .setFooter(`Eval.exe took ${d.createdTimestamp - message.createdTimestamp}ms to error`)
        .setColor(0xd10000)
        d.edit({embed: fomd})
        d.delete(15000)
    //message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    })
  },150)
 }
}
}
