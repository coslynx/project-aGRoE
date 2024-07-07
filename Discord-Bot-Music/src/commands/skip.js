const { canModifyQueue } = require('../utils/helper');

module.exports = {
  name: 'skip',
  description: 'Skip the currently playing song',
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send('There is no song that I could skip.');

    if (!canModifyQueue(message.member)) return message.channel.send('You need to join a voice channel first!');

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ skipped the song`).catch(console.error);
  },
};