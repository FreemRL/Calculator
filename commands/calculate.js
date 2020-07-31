const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calc",
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Please provide an input.');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** input.')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Input', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Output', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed).then(messageReaction => {
            if(resp === 420) messageReaction.react('🍁');
        });
    }
}