const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}`);
    client.user.setActivity("Watching Servers", {type: "STREAMING"});
});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message => {
       
      if (message.conent === 'testing') {
       
          message.reply({embed: {color: 3447003, description: "testing stuff for upcoming build"}});
       
       

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
