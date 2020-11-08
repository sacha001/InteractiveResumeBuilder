export function preload() {
    this.game.load.json('level:0', 'game/data/level00.json');
    this.game.load.json('level:1', 'game/data/level01.json');

    // IMAGES
    this.game.load.image('background-level-0', 'images/custom/background-level-0.png');
    this.game.load.image('background-level-1', 'images/custom/background-level-1.png');
    this.game.load.image('ground', 'images/blue_ground.png');
    this.game.load.image('grass:8x1', 'images/blue_grass_8x1.png');
    this.game.load.image('grass:6x1', 'images/blue_grass_6x1.png');
    this.game.load.image('grass:4x1', 'images/blue_grass_4x1.png');
    this.game.load.image('grass:2x1', 'images/blue_grass_2x1.png');
    this.game.load.image('grass:1x1', 'images/blue_grass_1x1.png');
    this.game.load.image('step1', 'images/step1.png');
    this.game.load.image('step2', 'images/step2.png');
    this.game.load.image('step3', 'images/step3.png');

    this.game.load.image('hero', 'images/hero_stopped.png');
    this.game.load.spritesheet('coin', 'images/coin_animated.png', 22, 22);
    this.game.load.spritesheet('door', 'images/door.png', 69, 133);

    // AUDIO
    this.game.load.audio('sfx:jump', 'audio/jump.wav');
    this.game.load.audio('sfx:coin', 'audio/coin.wav');
};
