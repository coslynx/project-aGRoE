const { VoiceChannel, VoiceConnection } = require('discord.js');

module.exports = {
	name: 'play',
	description: 'Play music in the voice channel',
	async execute(message, args) {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.channel.send('You need to be in a voice channel to play music!');
		}

		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send('I need the permissions to join and speak in your voice channel!');
		}

		const connection = await voiceChannel.join();
		const dispatcher = connection.play('path/to/music.mp3');

		dispatcher.on('start', () => {
			message.channel.send('Now playing: music.mp3');
		});

		dispatcher.on('finish', () => {
			voiceChannel.leave();
		});

		dispatcher.on('error', (error) => {
			console.error(error);
		});
	},
};