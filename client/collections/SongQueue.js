// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    // get first song in the queue and play it
    this.at(0).play();
  }

});
