const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "Get the invite link for Calculator",


    async run (client, message, args){

        const invEmbed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle(`Invite ${client.user.username}!`)
        .setURL(`https://discord.com/oauth2/authorize?client_id=718595731870449724&permissions=322640&scope=bot`)
        .setImage(`https://forums.armory3d.org/uploads/default/original/2X/9/99f30c2adec921f21e6fa359ef808e331a2a46a2.png`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(invEmbed);

    }
}