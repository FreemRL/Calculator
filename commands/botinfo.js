const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "botinfo",
    description: "shows bot information",

    async run(client, message, args) {
        let inline = true;
        let bicon = client.user.displayAvatarURL();
        let usersize = client.users.cache.size;
        let chansize = client.channels.cache.size;
        let servsize = client.guilds.cache.size;
        let botembed = new Discord.MessageEmbed()
            .setTitle(`Information for ${client.user.username}`)
            .setColor(0x808080)
            .setThumbnail(bicon)
            .addField("Bot Name:", `${client.user.username}`, inline)
            .addField("Bot Developer:", "<@283929434854129664>", inline)
            .addField("Servers:", `${servsize}`, inline)
            .addField("Channels:", `${chansize}`, inline)
            .addField("Users:", `${usersize}`, inline)
            .addField("Bot Library:", "Discord.js", inline)
            .addField("Created On:", `${moment(client.user.createdAt).format('L')} (**${moment(client.user.createdAt).fromNow()}**)`)
            .setDescription(`[Invite ${client.user.username}](https://discord.com/oauth2/authorize?client_id=718595731870449724&permissions=322640&scope=bot) • [Vote for ${client.user.username}](https://top.gg/bot/718595731870449724/vote)`)
            .setFooter(client.user.username, bicon)
            .setTimestamp()

        message.channel.send(botembed);


    }
}