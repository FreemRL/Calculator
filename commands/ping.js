const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {

        var d = new Date();

        const ping = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle(`${message.author.username}`)
        .addField("Ping:", `🏓\`${d.getTime() - message.createdTimestamp}\`ms`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()


        message.channel.send(ping);
    }
}