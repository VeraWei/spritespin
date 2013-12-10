(function ($) {
  "use strict";

  // reference to SpriteSpin implementation
  var SpriteSpin = window.SpriteSpin;

  SpriteSpin.extendApi({
    // Gets a value indicating whether the animation is currently running.
    isPlaying: function(){
      return this.data.animation !== null;
    },

    // Gets a value indicating whether the animation looping is enabled.
    isLooping: function(){
      return this.data.loop;
    },

    // Starts/Stops the animation playback
    toggleAnimation: function(){
      this.data.animate = !this.data.animate;
      SpriteSpin.setAnimation(this.data);
    },

    // Stops animation playback
    stopAnimation: function(){
      this.data.animate = false;
      SpriteSpin.setAnimation(this.data);
    },

    // Starts animation playback
    startAnimation: function(){
      this.data.animate = true;
      SpriteSpin.setAnimation(this.data);
    },

    // Sets a value indicating whether the animation should be looped or not.
    // Starts the animation if the 'animate' data attribute is set to true
    loop: function(value){
      this.data.loop = value;
      SpriteSpin.setAnimation(this.data);
      return this;
    },

    // Gets the current frame number
    currentFrame: function(){
      return this.data.frame;
    },

    // Updates SpriteSpin to the specified frame.
    updateFrame: function(frame){
      SpriteSpin.updateFrame(this.data, frame);
      return this;
    },

    // Skips the given number of frames
    skipFrames: function(step){
      var data = this.data;
      SpriteSpin.updateFrame(data, data.frame + (data.reverse ? - step : + step));
      return this;
    },

    // Updates SpriteSpin so that the next frame is shown
    nextFrame: function(){
      return this.skipFrames(1);
    },

    // Updates SpriteSpin so that the previous frame is shown
    prevFrame: function(){
      return this.skipFrames(-1);
    },

    // Starts the animations that will play until the given frame number is reached
    playTo: function(frame){
      this.data.animate = true;
      this.data.loop = false;
      this.data.stopFrame = frame;
      SpriteSpin.setAnimation(this.data);
      return this;
    }
  });
}(window.jQuery || window.Zepto || window.$));