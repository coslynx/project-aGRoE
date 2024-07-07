const nowPlaying = (message) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    
    if (!serverQueue) {
        return message.channel.send('There is no music currently playing.');
    }
    
    const song = serverQueue.songs[0];
    
    let response = `🎶 Now playing: **${song.title}** | Requested by: **${song.requestedBy}**`;
    
    return message.channel.send(response);
};

module.exports = nowPlaying;