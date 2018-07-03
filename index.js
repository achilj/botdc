const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("server leden", { type: "LISTENING" })

})


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if( command === `${prefix}help`){

        return message.channel.send("`!hi` voor een hallo bericht, `!ip` voor ip of..., `!yt` voor mijn youtube linkje, `!bramtube` voor het youtube linkje van bram, `!nieuw` voor de laatste nieuwe vidéo.");

    }

    if( command === `${prefix}hi`){

        return message.channel.send("Hallo");

    }

    if( command === `${prefix}ip`){

        return message.channel.send("De server is weg!");

    }

    if( command === `${prefix}yt`){

        return message.channel.send("Het youtube kanaal van Achilj is: http://bit.ly/achilyt");

    }

    if( command === `${prefix}nieuw`){

        return message.channel.send("De nieuwe vidéo is nog niet beschikbaar");

    }

    if( command === `${prefix}bramtube`){

        return message.channel.send("Het youtube kanaal van BramTube is: http://bit.ly/bramtubeyt");

    }

    if( command === `${prefix}minecraft`){

        return message.channel.send("saai");
  
        }
    
    
    if( command === `${prefix}fortnite`){

        return message.channel.send("pfff");

    }

});


bot.login(botConfig.token);