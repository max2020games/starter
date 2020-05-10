import Phaser from '../lib/phaser.js';
import Button from '../objects/Button.js';

/*
* For our Options scene, we are going to create a few UI checkbox buttons 
* that can be used for enabling and disabling the music and sound in our game
*/

export default class OptionsScene extends Phaser.Scene {

  
  constructor() {
    super('Options');
  }

  preload() {
  }

  create() {
    
    this.screenSetup();

    this.createBtns();

    this.addEventListeners();

    this.updateAudio();
  }

  screenSetup()
  {
    this.model = this.sys.game.globals.model;

    // create a new text Game Object and set its text value to Options
    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
  }

  createBtns() {
    // create image and text for enabling/disabling music 
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    // create image and text for enabling/disabling sound
    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    // create the menu button
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');

    // make buttons interactive
    this.musicButton.setInteractive();
    this.soundButton.setInteractive();
  }

  addEventListeners() {
    // add listeners for the pointerdown event. When the player clicks on 
    // the checkboxes, set the value of that state variable to the opposite 
    // of what it is currently set to, and then call updateAudio
    this.musicButton.on('pointerdown', function () {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }.bind(this));

    this.soundButton.on('pointerdown', function () {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    }.bind(this));
  }

  // check the state of the musicOn and soundOn variables, and if they are 
  // set to false, update the texture of our checkbox to be an empty box, 
  // and if they are set to true we update the texture to use the checkedBox image.
  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
     
    if (this.model.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
};