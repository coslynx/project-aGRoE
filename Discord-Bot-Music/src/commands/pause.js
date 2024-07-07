const { Command } = require('discord.js-commando');

module.exports = class PauseCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'Pause the currently playing music.',
            guildOnly: true,
        });
    }

    run(message) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.say('You need to be in a voice channel to pause the music!');
        }

        const musicQueue = this.queue.get(message.guild.id);

        if (!musicQueue || !musicQueue.songs.length) {
            return message.say('There is no music playing to pause!');
        }

        if (musicQueue.dispatcher.paused) {
            return message.say('The music is already paused!');
        }

        musicQueue.dispatcher.pause();
        return message.say('Music paused!');
    }
};