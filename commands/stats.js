const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const ms = require('ms');

module.exports = {
    name: "stats",
    description: "displays the bot stats",


    async run(client, message, args) {
        let { version } = require("discord.js");

        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }

           /* let secs = Math.floor(client.uptime % 60);
            let days = Math.floor((client.uptime % 31536000) / 86400);
            let hours = client.uptime / 3600 % 24;
            let mins = (client.uptime / 60 % 60; */

            //let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            let embedStats = new Discord.MessageEmbed()
                .setTitle("** Stats **")
                .setColor(0x808080)
                .addField("Memory Usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField("Uptime:", `${ms(client.uptime)}`, true) //`${duration}`, true)
                .addField("Users:", `${client.users.cache.size}`, true)
                .addField("Servers:", `${client.guilds.cache.size}`, true)
                .addField("Channels:", `${client.channels.cache.size}`, true)
                .addField("Discord.js:", `v${version}`, true)
                // .addField("• Node", `${process.version}`, true)
                .addField("CPU:", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("CPU usage:", `\`${percent.toFixed(2)}%\``, true)
                .addField("Arch:", `\`${os.arch()}\``, true)
                .addField("Platform:", `\`\`${os.platform()}\`\``, true)
                .setFooter(`${client.user.username} stats`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()

            message.channel.send(embedStats)
        })

    }
}