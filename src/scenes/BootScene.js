import Phaser from '../lib/phaser.js';

/*
* This scene will be the first scene that is loaded by our game, 
* and we will use it to load any assets that will be displayed 
* in the Preloader Scene
*/
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // load the logo
    this.load.image('logo', 'assets/logo_mirrus_huerta.png');
  }

  create() {
    // transition to the Preloader scene
    this.scene.start('Preloader');
  }
};