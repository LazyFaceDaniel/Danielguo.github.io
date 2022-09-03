(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(250, 335, 0.8 , 0.1);
    createPlatform(60, 460, 0.9, 0.1);
    createPlatform(100, 600, 0.6, 0.01);
    createPlatform(750, 0, 0.02, 15);
    createPlatform(450, 535, 0.6, 0.1);
    createPlatform(600, 600, 0.39, 0.1);
    createPlatform(530, 460, 0.02);
    createPlatform(650, 350, 0.02);
    createPlatform(560, 400, 0.02);
    createPlatform(40, 230, 0.8);
    createPlatform(60, 365, 0.18, 0.101);
    createPlatform(60, 250, 0.02, 7);
    createPlatform(130, 250, 0.02, 5);
    createPlatform(170, 250, 0.02, 7);
    createPlatform(190, 250, 0.02, 5);
    createPlatform(795, 550, 0.4, 0.1);
    createPlatform(800, 450, 0.4, 0.1);
    createPlatform(800, 350, 0.4, 0.1);
    createPlatform(800, 230, 0.4, 0.5);
    createPlatform(800, 150, 0.4, 0.1);
    createPlatform(800, 50, 0.4, 0.1);
    createPlatform(480, 380, 0.02);
    createPlatform(510, 233, 0.7, 0.001);
    createPlatform(350, 180, 0.6 , 0.1);
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init
})(window);
