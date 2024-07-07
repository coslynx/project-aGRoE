const { Command } = require('discord.js-commando');

module.exports = class LoopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'loop',
            aliases: ['repeat'],
            group: 'music',
            memberName: 'loop',
            description: 'Toggle looping for the current song or the entire queue.',
            guildOnly: true,
        });
    }

    async run(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send('There is no song playing.');

        serverQueue.loop = !serverQueue.loop;

        if (serverQueue.loop) {
            message.channel.send('Looping is now enabled.');
        } else {
            message.channel.send('Looping is now disabled.');
        }
    }
};