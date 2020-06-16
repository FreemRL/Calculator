const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "Get the invite link for Calculator",


    async run (client, message, args){

        message.channel.send(`Invite ${client.user} to your Discord Servers: https://discord.com/oauth2/authorize?client_id=718595731870449724&scope=bot&permissions=157760`);

    }
}