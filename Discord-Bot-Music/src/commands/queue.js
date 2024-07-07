const queue = {
  songs: [],
  playing: false,
  volume: 50,
  loop: false,
  shuffle: false,
  
  addSong: function(song) {
    this.songs.push(song);
  },
  
  playSong: function() {
    if (this.songs.length === 0) {
      console.log("Queue is empty. Add songs to the queue.");
      return;
    }
    
    const currentSong = this.songs[0];
    console.log(`Now playing: ${currentSong}`);
    
    // Logic to play the current song
    this.playing = true;
  },
  
  pauseSong: function() {
    if (!this.playing) {
      console.log("No song is currently playing.");
      return;
    }
    
    // Logic to pause the current song
    this.playing = false;
    console.log("Song paused.");
  },
  
  skipSong: function() {
    if (this.songs.length === 0) {
      console.log("Queue is empty. Add songs to the queue.");
      return;
    }
    
    // Logic to skip the current song
    console.log("Song skipped.");
  },
  
  stopSong: function() {
    if (!this.playing) {
      console.log("No song is currently playing.");
      return;
    }
    
    // Logic to stop the current song
    this.playing = false;
    this.songs = [];
    console.log("Playback stopped.");
  },
  
  setVolume: function(newVolume) {
    this.volume = newVolume;
    console.log(`Volume set to: ${newVolume}`);
  },
  
  toggleLoop: function() {
    this.loop = !this.loop;
    console.log(`Looping ${this.loop ? 'enabled' : 'disabled'}.`);
  },
  
  toggleShuffle: function() {
    this.shuffle = !this.shuffle;
    console.log(`Shuffle ${this.shuffle ? 'enabled' : 'disabled'}.`);
  },
  
  displayNowPlaying: function() {
    if (this.songs.length === 0) {
      console.log("No song is currently playing.");
      return;
    }
    
    console.log(`Now playing: ${this.songs[0]}`);
  },
  
  disconnect: function() {
    if (!this.playing) {
      console.log("No song is currently playing.");
      return;
    }
    
    // Logic to disconnect the bot from the voice channel
    this.playing = false;
    this.songs = [];
    console.log("Bot disconnected.");
  }
};

module.exports = queue;