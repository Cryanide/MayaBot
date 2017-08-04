const tags = require("../tags.json")
const fs = require("fs");
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  hex = '0x'+ Math.floor(Math.random()*16777215).toString(16);
  //let alltags = tags.alltags
  let tagname = args.slice(1).join(' ')
  let content = args.slice(1).join(' ')
  //shorthend functions
  let guild_Id = message.member.guild.id
  let author = message.author.tag
  function writefile() {
    fs.writeFileSync('./tags.json', JSON.stringify(tags, null, 2), 'utf-8');
  }
  if(args[0] === "addtag") {
    if(!tagname) return message.reply("Where's the name?")
    message.reply("Please write a description, and please hurry I don't have all day, I'm giving you 30 seconds")
    /*alltags[guild_Id] = {
      actual_tag: content
    }*/
    const filter = m => m.author.id === message.author.id
    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
     .then(collected => {
       if (!tags.alltags[guild_Id]) {
         tags.alltags[guild_Id] = {}
         message.channel.send(`Hmmmm...it seems that there's no tag for ${message.guild.name}, \`running tagsetup.exe for ${message.guild.name}\`, **run the command one more time plase**, sorry for inconvenience`)
         return
       }
       tags.alltags[guild_Id][tagname] = {
         'tag_maker': author,
         'tag_maker_id': message.author.id,
         'tag_desc': collected.first().content
       }
       //console.log(collected)
       message.reply("Done, description has been set")
       writefile()
       message.reply("Okay, time for the fun part, the *actual*, please type it out here, you have 15 seconds")
       message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
       .then(c => {
         tags.alltags[guild_Id][tagname] = {
           'tag_maker': author,
           'tag_maker_id': message.author.id,
           'tag_desc': collected.first().content,
           'actual_tag': c.first().content,
           'guild_name': message.guild.name
         }
         message.reply(`Done! enjoy your tag`)
         writefile()
       })
       .catch(c => {
         console.error();
         console.log(c)
         message.reply("Tag.exe has timed out, please start the process over")
       })
     })
     .catch(collected => {
       //console.log(collected);
       message.reply("Tag.exe has timed out, please start the process over")
     });
    //writefile()
  } //END OF addtag

  else if(args[0] === "show") {
    if (!tags.alltags[guild_Id]) {
      tags.alltags[guild_Id] = {}
      message.channel.send(`Hmmmm...it seems that there's no tag for ${message.guild.name}, \`running tagsetup.exe for ${message.guild.name}\`, **run the command one more time plase**, sorry for inconvenience`)
      return
    }
    message.channel.send(tags.alltags[guild_Id][tagname].actual_tag)
  }
  else if (args[0] === "info") {

    //////
    let tag_select = tags.alltags[guild_Id][tagname]
    let tag_maker_profilepicture = message.guild.members.get(tag_select.tag_maker_id).user.avatarURL
    let tag_maker_usertag = message.guild.members.get(tag_select.tag_maker_id).user.tag
    let tag_maker_username = message.guild.members.get(tag_select.tag_maker_id).user.username
    //////

    const embed = new Discord.RichEmbed()
    .setAuthor(tag_maker_username, tag_maker_profilepicture)
    .setDescription(`information on the tag "${tagname}"`)
    .addField('Info', `Creator: ${tag_maker_usertag}\nDescription: ${tag_select.tag_desc}\nTag: ${tag_select.actual_tag}`)
    .setColor(hex)
    message.channel.send({ embed })
    //message.channel.send(tags.alltags[guild_Id][tagname])
  }
  else if (args[0] === "delete") {
    if(typeof tags.alltags[guild_Id][tagname][0] == 'undefined') return message.reply("you can't delete a tag that doesn't exist")
    //console.log(tags.alltags[guild_Id][tagname].length)
    message.reply("Are you sure? Respond with `yes` or `no`. Tag_delete.exe will exit in 10 seconds")
    const filter = m => m.author.id === message.author.id
    message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
    .then(msg => {
      if(msg.first().content === "yes") {
        tags.alltags[guild_Id][tagname] = {}
        writefile()
        message.reply(`The tag ${tagname} has been deleted`)
      }
      else if(msg.first().content === "no") {
        message.reply(`Tag_delete.exe has been canceled`)
      }
    })
    //tags.alltags[guild_Id][tagName] = {}
  }
}
