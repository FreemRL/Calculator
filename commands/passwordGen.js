const Discord = require('discord.js');

module.exports = {
    name: "passwd",
    description: "Generates a random password with your chosen length",


    async run (client, message, args){
        var validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!§$%&/()=?*#-€@<>_:;";
        var inp = args[0];
        if(!inp) return message.channel.send(`You have to provide a password length! **(;passwd [number])**`);
        if(inp < 8 || inp > 20) return message.channel.send(`Please choose a length between **8** and **20**!`);
        var passwd = "";

        for(var i = 0; i < inp; i++) {
            var randNumber = Math.floor(Math.random() * validChars.length);
            passwd += validChars.substring(randNumber, randNumber+1);
        }

        const passwordEmbed = new Discord.MessageEmbed()
        .setTitle(`Random Password Generator`)
        .setDescription(`**\`\`\`${passwd}\`\`\`**`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setColor(0x808080)
        .setTimestamp()

        message.channel.send(passwordEmbed);
    }
}