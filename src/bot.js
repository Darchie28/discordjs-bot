require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
});

client.on('message', (message) => {
    // handle message from bot
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = messge.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN);