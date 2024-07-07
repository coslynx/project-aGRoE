const { Command } = require('discord.js-commando');

module.exports = class VolumeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'volume',
			group: 'music',
			memberName: 'volume',
			description: 'Adjust the volume of the music playback.',
			args: [
				{
					key: 'volumeLevel',
					prompt: 'Please provide a valid volume level (1-100).',
					type: 'integer',
					validate: volumeLevel => volumeLevel >= 1 && volumeLevel <= 100
				}
			]
		});
	}

	run(message, { volumeLevel }) {
		const queue = this.queue.get(message.guild.id);
		if (!queue) return message.say('There is no music playing.');

		queue.volume = volumeLevel;
		queue.connection.dispatcher.setVolumeLogarithmic(volumeLevel / 100);

		return message.say(`Volume set to ${volumeLevel}%`);
	}
};