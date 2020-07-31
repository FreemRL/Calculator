const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "serverinfo",
    description: "shows server information",

    async run(client, message, args) {

        let inline = true;
        let sicon = message.guild.iconURL();
        let serverembed = new Discord.MessageEmbed()
            .setColor(0x808080)
            .setThumbnail(sicon)
            .setTitle("Discord Server Information")
            .addField("Name:", message.guild.name, inline)
            .addField("ID:", message.guild.id, inline)
            .addField("Owner:", message.guild.owner, inline)
            .addField("Region:", message.guild.region, inline)
            .addField("Members:", `${message.guild.memberCount}`, inline)
            .addField("Roles:", message.guild.roles.cache.size, inline)
            .addField("Channels:", message.guild.channels.cache.size, inline)
            .addField("You Joined:", `${moment(message.member.joinedAt).format('L')} (**${moment(message.member.joinedAt).fromNow()}**)`, inline)
            .addField('Created:', `${moment(message.guild.createdAt).format('L')} (${moment(message.guild.createdAt).fromNow()})`, inline)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        message.channel.send(serverembed);
    }
}