let config = {
   type: Phaser.AUTO,
   width: 912,
   height: 608,
   pixelArt: true,
   fps: {
      target: 60,
      forceSetTimeOut: true
   },
   physics: {
      default: 'arcade',
      arcade: {
         gravity: { y: 200 },
         debug: true
      }
   },
   scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
   },
   scene: [Load, Menu, Play, Settings, Credits],
}

// Phaser game object
let game = new Phaser.Game(config);

// controls
let keyA, keyD, keyW, keyS, keyF, keySpace;

// background music var
let music;

// set volume
let musicVol = 0.5;
let sfxVol = 0.5;