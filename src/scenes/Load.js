class Load extends Phaser.Scene {
   constructor() {
      super("loadScene");
   }

   preload() {
      // UI assets
      this.load.image("select", "./assets/images/select.png");
      this.load.image("play", "./assets/images/play.png");
      this.load.image("playHover", "./assets/images/playHover.png");
      this.load.image("settings", "./assets/images/settings.png");
      this.load.image("settingsHover", "./assets/images/settingsHover.png");
      this.load.image("credits", "./assets/images/credits.png");
      this.load.image("creditsHover", "./assets/images/creditsHover.png");
      this.load.image("item0", "./assets/images/npc0.png");
      this.load.image("indicator", "./assets/images/dialogueArrowTHICK.png");
      this.load.image("background", "./assets/images/skyGradient.png");
      this.load.image("clouds1", "./assets/images/clouds1.png");
      this.load.image("clouds2", "./assets/images/clouds2.png");
      this.load.image("title", "./assets/images/title.png");      
      this.load.image("vol1", "./assets/images/vol1.png");
      this.load.image("vol2", "./assets/images/vol2.png");
      this.load.image("vol1Hover", "./assets/images/vol1Hover.png");
      this.load.image("vol2Hover", "./assets/images/vol2Hover.png");
      this.load.image("creditsBG", "./assets/images/creditsBG.png");

      // object assets
      this.load.atlas("player", "./assets/images/player.png", "./assets/images/player.json");
      this.load.image("floor", "./assets/images/floor.png");
      this.load.image("teddy", "./assets/images/teddy.PNG");  // TODO: change to texture atlas
      this.load.image("tomato", "./assets/images/tomato.PNG");      // TODO: change to texture atlas 
      this.load.image("walter", "./assets/images/walter.PNG");      // TODO: change to texture atlas
      this.load.image("watermelon", "./assets/images/watermelon.PNG");      // TODO: change to texture atlas
      this.load.image("corinne", "./assets/images/corrine.PNG");      // TODO: change to texture atlas
      this.load.image("carrot", "./assets/images/carrot.PNG");      // TODO: change to texture atlas
      this.load.image("sun", "./assets/images/sun.png");

      // text assets
      this.load.json("data", "./assets/data.json");

      // audio assets
      this.load.audio('backgroundmusic', 'assets/sounds/MissingMeTheme3.mp3');
      this.load.audio('back', 'assets/sounds/back.mp3');
      this.load.audio('play', 'assets/sounds/clickPlay.mp3');
      this.load.audio('confirm', 'assets/sounds/confirm.mp3');
      this.load.audio('hover', 'assets/sounds/hover.mp3');
      this.load.audio('obtainItem', 'assets/sounds/obtainItem.mp3');
      this.load.audio('questCompleted', 'assets/sounds/questCompleted.mp3');
      this.load.audio('startQuest', 'assets/sounds/startQuest.mp3');
      this.load.audio('teddy1', 'assets/sounds/teddy1.mp3');
      this.load.audio('teddy2', 'assets/sounds/teddy2.mp3');
      this.load.audio('walter1', 'assets/sounds/walter1.mp3');
      this.load.audio('walter2', 'assets/sounds/walter2.mp3');
      this.load.audio('corinne1', 'assets/sounds/corinne1.mp3');
      this.load.audio('corinne2', 'assets/sounds/corinne2.mp3');      
      this.load.audio('step1', 'assets/sounds/step1.mp3');
      this.load.audio('step2', 'assets/sounds/step2.mp3');
   }

   create() {
      console.log("Load scene loaded");

      // animations
      this.anims.create({
         key: "run",
         frames: this.anims.generateFrameNames("player", { prefix: 'run', suffix: '.png', end: 7 }),
         frameRate: 10,
         repeat: -1
      });

      this.scene.start("menuScene");
   }
}
