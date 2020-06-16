const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle(`${message.author.username}`)
        .addField("Ping:", `🏓\`${Date.now() - message.createdTimestamp}\`ms`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()


        message.channel.send(ping);
    }
}