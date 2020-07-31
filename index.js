const Discord = require('discord.js');
const client = new Discord.Client();
const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxODU5NTczMTg3MDQ0OTcyNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkyNzQ3MzcwfQ.DHqmRam5VBbD3J_KlpBE8ibtkVIM8PMsGC-Oe6kMjxI', client)
const { readdirSync } = require('fs');
const fs = require('fs');
const { join } = require('path');
const serverStats = require('./servers.json');
client.commands= new Discord.Collection();
const prefix = ";";


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('guildCreate', guild => {
    console.log(`Joined server ${guild.name} created by ${guild.owner.user.username}.\nServers: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}`);
    
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(!serverStats[message.guild.id]) {
        serverStats[message.guild.id] = {
            prefix: ";"
        }
    }

    fs.writeFile("./servers.json", JSON.stringify(serverStats), err =>{
        if(err) console.log(err);
    })

    let prefix = serverStats[message.guild.id].prefix;

    if(message.content === "prefix?") {
        message.channel.send(`Your Server's prefix is: **${serverStats[message.guild.id].prefix}**`);
    }

    if(message.content.startsWith(`${prefix}setprefix`)) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Sorry, you do not have permissions to change the prefix. You need "ADMINISTRATOR" permissions.`);

        let newPrefix = message.content.split(" ").slice(1).join("");
        if(!newPrefix) return message.channel.send("Please provide a new prefix for your server.");

        serverStats[message.guild.id].prefix = newPrefix;
        message.channel.send(`Your server's new prefix is: **${newPrefix}**`);

        fs.writeFile("./servers.json", JSON.stringify(serverStats), err =>{
            if(err) console.log(err);
        })
    }

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('ready', () => {
    console.log(`Ready!\n**Servers**: ${client.guilds.cache.size}\n**Users**: ${client.users.cache.size}`);
    client.user.setPresence({activity: {name: `${prefix}help`, type: "LISTENING"}, status: "dnd"});
});

client.login(process.env.token);