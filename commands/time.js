const Discord = require('discord.js');
const moment = require('moment-timezone');

module.exports = {
    name: "time",
    description: "shows the date and time",


    async run(client, message, args) {
        var timezone = moment.tz.guess();
        if(timezone === 'Europe/Berlin') moment.locale('de');
        const dateEmbed = new Discord.MessageEmbed()
            .setTitle('Time')
            .setDescription(`**\`\`\`${moment().format('LTS')}\`\`\`**\nDate: **${moment().format('L')}**\nTimezone: **${timezone}**`)
            .setColor(0x808080)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        message.channel.send(dateEmbed);
    }
}