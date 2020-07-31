const Discord = require('discord.js');

module.exports = {
    name: "count",
    description: "creates a member count channel.",

    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Sorry, you do not have permissions to perform that command.`);
        let name = `Member: ${message.guild.memberCount}`;

        var createdChannel = message.guild.channels.cache.find(channel => channel.name === name);
        if(createdChannel) return message.channel.send(`You already have a member count channel.`);
        else {
            message.guild.channels.create(name, { type: 'voice' });
            message.channel.send(`Your member count channel has been created successfully`);
        }
    }
}