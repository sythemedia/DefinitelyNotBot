const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!eval') {
    	message.reply('TypeError: Cannot read property '' of null');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTI5ODQ5NDk5NjQwNzkxMDQw.Dw28PQ.2XfZq7LnTKnj4kkCt31vYOL9Oi0);
