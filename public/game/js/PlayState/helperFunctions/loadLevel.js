
export function loadLevel(data) {
    this.platforms = this.game.add.group();
    this.coins = this.game.add.group();

    data.platforms.forEach(this._spawnPlatform, this);
    data.coins.forEach(this._spawnCoin, this);

    this._spawnCharacter({hero: data.hero});

    const GRAVITY = 1200;
    this.game.physics.arcade.gravity.y = GRAVITY;
};