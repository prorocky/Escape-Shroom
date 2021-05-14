let config = {
    type: Phaser.CANVAS,
    width: 1080,
    height: 1080,
    scene: [Play],
}
// game variable
let game = new Phaser.Game(config);

// game config variables
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;