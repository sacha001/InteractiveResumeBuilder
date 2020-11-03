const LEVEL_COUNT = 2;

export function init(data) {
    this.keys = this.game.input.keyboard.addKeys({
        left: Phaser.KeyCode.LEFT,
        right: Phaser.KeyCode.RIGHT,
        up: Phaser.KeyCode.UP
    });
    this.game.renderer.renderSession.roundPixels = true;
    this.level = (data.level || 0) % LEVEL_COUNT;
};