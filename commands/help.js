const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){


        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation/Administration')
        .addField('`;invite`', "get the invite link for Calculator.", true)
        .addField('`;setprefix`', "change your servers prefix.", true)
        .addField('`prefix?`', "displays your servers current prefix.", true)
        .addField('`;count (in development)`', "creates a member count channel for your server.", true)
        .addField(`Support ${client.user.username}`, `[Invite ${client.user.username}](${new URL(`https://discord.com/oauth2/authorize?client_id=718595731870449724&permissions=322640&scope=bot`)}) • [Join Support Server](${new URL(`https://discord.gg/HDfKEnK`)}) • [Vote for ${client.user.username}](${new URL(`https://top.gg/bot/718595731870449724/vote`)})`)
        .setColor(0x808080)
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`;calc`', "calculates your input.", true)
        .addField('`;ascii`', 'converts a text into an ascii looking style.', true)
        .addField('`;ping`', "get your ping.", true)
        .addField('`;rand`', "generates a random number between your provided numbers", true)
        .addField('`;time`', "get the current time and date.", true)
        .addField('`;passwd`', "generates a random password.", true)
        .addField('`;stats`', "get bot stats.", true)
        .addField('`;botinfo`', "get bot information.", true)
        .addField('`;serverinfo`', "get server information", true)
        .addField(`Support ${client.user.username}`, `[Invite ${client.user.username}](${new URL(`https://discord.com/oauth2/authorize?client_id=718595731870449724&permissions=322640&scope=bot`)}) • [Join Support Server](${new URL(`https://discord.gg/HDfKEnK`)}) • [Vote for ${client.user.username}](${new URL(`https://top.gg/bot/718595731870449724/vote`)})`)
        .setColor(0x808080)
        .setTimestamp()

        const pages = [
                moderation,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

       // const timeout = '120000';

        pagination(message, pages, emojiList)
    }
}