import Phaser from './lib/phaser.js';
import config from './config/config.js';
import Model from './Model.js';

// import game scenes
import BootScene from './scenes/BootScene.js';
import CreditsScene from './scenes/CreditsScene.js';
import GameScene from './scenes/GameScene.js';
import OptionsScene from './scenes/OptionsScene.js';
import PreloaderScene from './scenes/PreloaderScene.js';
import TitleScene from './scenes/TitleScene.js';

class Game extends Phaser.Game {
  constructor() {
    super(config);

    // make global variables available for all game scenes
    const model = new Model();
    this.globals = { model, bgMusic: null };

    // add game scenes
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();