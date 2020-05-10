import Phaser from '../lib/phaser.js'
import Button from '../objects/Button.js';
import config from '../config/config.js';

/*
* create a simple UI that will display three different buttons. 
* These buttons will allow the player to start the game, change the 
* options, or view the credits
*/

export default class TitleScene extends Phaser.Scene {

  constructor() {
    super('Title');
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.addBgMusic();
  }

  addBgMusic() {
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      // store a reference to our background music Game Object
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
};