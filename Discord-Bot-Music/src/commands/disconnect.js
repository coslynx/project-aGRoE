const { VoiceState } = require('discord.js');

module.exports = {
  name: 'disconnect',
  description: 'Disconnect the bot from the voice channel',
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.channel.send('You need to be in a voice channel to disconnect the bot.');
    }

    const connection = await voiceChannel.join();
    connection.disconnect();
  },
};