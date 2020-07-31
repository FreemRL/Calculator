const Discord = require('discord.js')

module.exports = {
    name: "bug",
    description: "report a bug",

    async run (client, message, args) {
        var bug = args.slice(0).join(' ');
        if(!bug) return message.channel.send(`You have to provide a bug, if you want to report it.`);

        const bugEmbed = new Discord.MessageEmbed()
        .setTitle('Your Bug Report')
        .addField(`Bug:`, `${bug}`, true)
        .setDescription(`Hey ${message.author}, thank you very much for reporting the bug you found!\n<@283929434854129664> will fix it very soon. Have fun using ${client.user}!`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setColor(0x808080)

        message.author.send(bugEmbed);
        message.channel.send(`Thank you for reporting the bug you found! It will be fixed soon.\nWatch your DM's for more information.`);

        console.log(`New bug! ${message.author.username} reported: ${bug}`);
    }
}