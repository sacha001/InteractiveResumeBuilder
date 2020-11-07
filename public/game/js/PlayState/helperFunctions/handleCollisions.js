export function handleCollisions() {
    this.game.physics.arcade.collide(this.hero, this.platforms);
    this.game.physics.arcade.overlap(this.hero, this.worldBounds, this._onHeroVsBound, null, this);
    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin, null, this);
    this.game.physics.arcade.overlap(this.hero, this.door, this._onHeroVsDoor, null, this);
};