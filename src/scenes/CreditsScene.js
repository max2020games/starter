import Phaser from '../lib/phaser.js';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  preload() {
  }

  create() {
    // create two text game objects
    this.creditsText = this.add.text(0, 0, 'Creado por:', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'MAX 2020', { fontSize: '26px', fill: '#fff' });
    
    // create a new zone game object
    this.zone = this.add.zone(this.scale.width / 2, this.scale.height / 2, this.scale.width, this.scale.height);

    // center both of the text game objects inside the zone game object
    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    // move the madeByText game object off the screen, that way we can have 
    // that text scroll onto the screen once the creditsText game object 
    // disappears off the screen
    this.madeByText.setY(1000);

    // add a few tweens to have our text scroll off the screen
    // create a new tween, creditsTween that is targeting our creditsText game object. 
    // For our tween, we specify the following options:
    //
    //      y – the y position of our game object that we want it to end up at.
    //      ease – the ease function that this tween will use.
    //      duration – how long we would like the tween to last.
    //      delay – how long we want the tween to wait before it starts running.
    //      oncomplete – a callback function that will be called once the tween is complete. In this callback function, we destroy the tween.
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 1000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });
    
    // create another tween called madeByTween. This tween is very similar to the 
    // creditsTween. The main difference is when the onComplete callback function is called, 
    // we start our Title scene.
    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 4000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};