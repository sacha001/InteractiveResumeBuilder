
export function loadLevel(data) {
    this.platforms = this.game.add.group();
    this.coins = this.game.add.group();
    this.bgDecoration = this.game.add.group();
    this.worldBounds = this.game.add.group();

    data.platforms.forEach(this._spawnPlatform, this);
    data.coins.forEach(this._spawnCoin, this);

    this._spawnCharacter({hero: data.hero});

    let bounds = [this.game.add.sprite(this.world.width - 1, 525, null),
                  this.game.add.sprite(0, 525, null)];
    bounds.forEach((bound) => {
        this.game.physics.enable(bound);
        bound.body.allowGravity = false;
        bound.body.setSize(1, 500);
        this.worldBounds.add(bound);
    });

    const GRAVITY = 1200;
    this.game.physics.arcade.gravity.y = GRAVITY;

    this._spawnDoor(data.door.x, data.door.y);
};