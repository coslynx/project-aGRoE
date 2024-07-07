const { Command } = require('discord.js-commando');

module.exports = class StopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Stops the music playback and clears the queue.',
            guildOnly: true,
        });
    }

    async run(message) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('You need to be in a voice channel to stop the music!');
        }

        const queue = this.queue.get(message.guild.id);

        if (!queue) {
            return message.reply('There is no music playing to stop!');
        }

        queue.songs = [];
        queue.connection.dispatcher.end();
        this.queue.delete(message.guild.id);

        return message.say('Music playback stopped and queue cleared!');
    }
};