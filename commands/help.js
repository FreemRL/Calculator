const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`;ascii`', 'converts a text into an ascii looking style.')
        .setColor(0x808080)
        .setTimestamp()


        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`;invite`', "get the invite link for Calculator.")
        .setColor(0x808080)
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`;calc`', "calculates your input.")
        .addField('`;ping`', "get your ping.")
        .setColor(0x808080)
        .setTimestamp()

        const pages = [
                fun,
                moderation,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}