# MayaBot
Just a simple modular discord bot, written in discord.js
prefix is ;

//I'm putting all the commands here because writting in code takes to long
//I suggest clicking "Raw" or going to this link https://raw.githubusercontent.com/Cryanide/MayaBot/master/README.md for a better format

Moderation commands:
  Kick
    Kicks the mentioned person
      requirement(s): Kick members permission (user and Maya)
      format: ;kick @<member> <reason>
      notes: 
        >For moderation purposes <reason> is requried
        
  Ban
    Bans the mentioned person indefinitely
      requirement(s): Ban members permission (user and Maya)
      format: ;ban @<member> <reason>
      notes:
        >Autobans indefinitely because I'm lazy
        >For moderation purposes <reason> is requried
        
  Mute
    Mutes the mentioned person, to unmute just run the command on the muted person
      requirement(s): mute members permission (user and Maya)
      format: ;mute @<member> <reason>
      notes:
        >if the muted role has not been created via Maya, she'll create one as long as she has the Manage roles permission
        >Maya will NOT set the permissions for the channel, that has to be manually set as I do not know what channels you what then to              talk in or not, this is the same thing for voice channels
        
  Warn
    Warns the mentioned person
      requirement(s): Kick or Ban members permission (user)
      formant: ;warn @<member> <reason>
      notes:
        >This doesn't do anything (yet), it's more to log warnings on people, in the future this will use a 5 strike system, 3 being a             auto kick, 5 being a auto ban
        
  Nickname
    Changes the nickname of someone
      requirement(s): Manage nickname (user and Maya)
      format: ;nickname @<member> <new nickname>
      notes:
        >Mainly used if someone has an inapproiate name and used for a quick change
        >Will check if the new nickname is over 32 letter (max name length)
        
  Purge
    Purges X amount of messsages
      requirement(s): Manage messages (user and Maya)
      format: ;purge <number>
      notes:
        >Will delete 50 if a number is not givin
  
Other commands:
  Ping
    Pong!
  tag
    A tag system
      accepted arguments
        addtag - adds a tag
        show - returns a named tag
        delete - deletes a tag
        <more to come>
        What is a tag?:
          >A tag is besically a command that is user made, most tag systems only support messages and is used for memes, mainly memes                only the discord server would understand
          >You can see all the tags by going here <link>
  github
    Simply links to the github
  help
    Links to this file
    

If it wasnt mentioned here, that means only I can use it
