import Phaser from '../lib/phaser.js';

// By extending the Phaser Container class, this allows us to 
// position the Container in our game, and then we can position 
// our child Game Objects inside that container.

export default class Button extends Phaser.GameObjects.Container {

    /**
     * @param {Phaser.Scene} scene the scene this Container should be added to
     * @param {number} x x position of our Container
     * @param {number} y y position of our Container
     * @param {string} key1 key for the main image
     * @param {string} key2 key for the hover image
     * @param {string} text the text that will be displayed on our button
     * @param {Phaser.Scene} targetScene the scene that will be started when a player clicks our button
     */
    constructor(scene, x, y, key1, key2, text, targetScene) {
        super(scene);
        this.scene = scene;
        this.x = x;
        this.y = y;

        // create our Game Objects 
        this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
        this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
        Phaser.Display.Align.In.Center(this.text, this.button);

        // add objects to the Container 
        this.add(this.button);
        this.add(this.text);

        // add event listeners
        this.button.on('pointerdown', function () {
            this.scene.scene.start(targetScene);
        }.bind(this));

        this.button.on('pointerover', function () {
            this.button.setTexture(key2);
        }.bind(this));

        this.button.on('pointerout', function () {
            this.button.setTexture(key1);
        }.bind(this));

        // add our new Container to the Phaser Scene

        this.scene.add.existing(this);
    }
}