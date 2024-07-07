const { MessageEmbed } = require('discord.js');

const lyrics = {
  name: 'lyrics',
  description: 'Display the lyrics of the currently playing song',
  execute(message, args, queue) {
    const serverQueue = queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send('There is no song currently playing.');
    }

    const embed = new MessageEmbed()
      .setTitle('Lyrics')
      .setDescription(serverQueue.songs[0].title + ' - ' + serverQueue.songs[0].artist)
      .setColor('#7289DA')
      .addField('Lyrics', 'Insert lyrics here');

    message.channel.send(embed);
  },
};

module.exports = lyrics;