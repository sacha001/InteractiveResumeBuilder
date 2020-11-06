
export function loadLevel(data) {
    this.platforms = this.game.add.group();
    this.coins = this.game.add.group();
    this.bgDecoration = this.game.add.group();

    data.platforms.forEach(this._spawnPlatform, this);
    data.coins.forEach(this._spawnCoin, this);

    this._spawnCharacter({hero: data.hero});
    this._rightWorldBound = this.world.width - this.hero._frame.width/2;

    const GRAVITY = 1200;
    this.game.physics.arcade.gravity.y = GRAVITY;

    this._spawnDoor(data.door.x, data.door.y);
};