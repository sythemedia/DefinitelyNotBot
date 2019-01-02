const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
if (message.content == "!help") {
        var embedhelpmember = new Discord.RichEmbed()
            .setTitle("**💬 Command List.**\n")
            .addField(" - checkpoint", "Checkpoint Settings.")
            .addField(" - ping", "PING PONG.")
            .setColor(0x00FFEE)

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
