(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

  /**
   * init: Initialize all cannons.
   *
   * GOAL: Add at least 3 cannons to make your level challenging.
   *
   * Use the createCannon Function to create cannons for the level.
   *
   * createCannon() takes these arguments:
   *
   *      createCannon(type, position, delay);
   *
   *      type: "top", "bottom", "left", or "right"
   *      position: The position of the cannon along whichever side the cannon is placed on
   *          - the x coordinate for "top" and "bottom" cannons
   *          - the y coordinate for "left" and "right" cannons
   *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
   */
  function init(game) {
    let createCannon = cannon.create;
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCannon("top", 450);
    createCannon("bottom", 455);
    createCannon("top", 600);
    createCannon("top", 300, 1000);
    createCannon("top", 50);
    createCannon("left", 245);
    createCannon("top", 810, 6000);
    createCannon("top", 810, 5000);
    createCannon("top", 810, 4000);
    createCannon("top", 810, 3000);
    createCannon("top", 810, 2000);
    createCannon("top", 810, 1000);
    createCannon("top", 820, 6000);
    createCannon("top", 820, 5000);
    createCannon("top", 820, 4000);
    createCannon("top", 820, 3000);
    createCannon("top", 820, 2000);
    createCannon("top", 820, 1000);
    createCannon("bottom", 810, 9000);
    createCannon("bottom", 810, 6000);
    createCannon("right", 100, 2000);
    createCannon("bottom", 100, 2000);


    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  cannon.init = init;
})(window);
