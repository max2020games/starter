import Phaser from '../lib/phaser.js';

export default class GameScene extends Phaser.Scene {
    // define class properties

    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    platforms

    /** @type {Phaser.Physics.Arcade.Group} */
    carrots

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors

    /** @type {Phaser.GameObjects.Text} */
    carrotsCollectedText

    carrotsCollected = 0

    // define a unique key
    constructor() {
        super('Game')
    }

    // set class properties
    init() {
        this.carrotsCollected = 0
    }

    // is called once all the assets for the Scene have been 
    // loaded. Trying to use an asset that has not been loaded 
    // will result in an error
    create() {
        this.add.image(400, 300, 'broomstick').setScale(0.5);
    }

    update(t, dt) {

    }
}