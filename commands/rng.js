const Discord = require('discord.js');

module.exports = {
    name: "rand",
    description: "Generates a random number between your provided numbers",


    async run (client, message, args){
        var num1 = args[0];
        var num2 = args[1];
        let min = Math.min(num1, num2);
        let max = Math.max(num1, num2);
        var res = Math.floor(Math.random() * (max - min + 1)) + min;

        if(!num1 || !num2) return message.channel.send(`You have to provide **2** numbers, to generate a random number.`);

        const randEmbed = new Discord.MessageEmbed()
        .setTitle(`Random Number Generator`)
        .setColor(0x808080)
        .addField("Number 1:", `${min}`, true)
        .addField("Number 2:", `${max}`, true)
        .addField("Random Number:", `${res}`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())

        message.channel.send(randEmbed);
    }
}