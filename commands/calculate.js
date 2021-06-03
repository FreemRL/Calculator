const Discord = require('discord.js');
const { create, all } = require('mathjs');

const math = create(all)
const limEval = math.evaluate

math.import({
    'import': function () { throw new Error('Function import is disabled') },
    'createUnit': function () { throw new Error('Function createUnit is disabled') },
    'evaluate': function () { throw new Error('Function evaluate is disabled') },
    'parse': function () { throw new Error('Function parse is disabled') },
    'simplify': function () { throw new Error('Function simplify is disabled') },
    'derivative': function () { throw new Error('Function derivative is disabled') }
}, { override: true })

module.exports = {
    name: "calc",
    description: "Get the answer to a math problem",

    async run(client, message, args) {

        if (!args[0]) return message.channel.send('Please provide an input.');

        let resp;

        try {
            resp = limEval(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** input.')
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0x808080)
            .setTitle('Calculator')
            .addField('Input', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Output', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed).then(messageReaction => {
            if (resp === 420) messageReaction.react('🍁');
        });
    }
}