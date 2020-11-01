export function preload() {
    this.game.load.json('level:1', 'game/data/level01.json');

    // IMAGES
    this.game.load.image('background', 'images/custom-background.png');
    this.game.load.image('ground', 'images/blue_ground.png');
    this.game.load.image('grass:8x1', 'images/blue_grass_8x1.png');
    this.game.load.image('grass:6x1', 'images/blue_grass_6x1.png');
    this.game.load.image('grass:4x1', 'images/blue_grass_4x1.png');
    this.game.load.image('grass:2x1', 'images/blue_grass_2x1.png');
    this.game.load.image('grass:1x1', 'images/blue_grass_1x1.png');
    this.game.load.image('hero', 'images/hero_stopped.png');
    this.game.load.spritesheet('coin', 'images/coin_animated.png', 22, 22);

    // AUDIO
    this.game.load.audio('sfx:jump', 'audio/jump.wav');
    this.game.load.audio('sfx:coin', 'audio/coin.wav');
};
