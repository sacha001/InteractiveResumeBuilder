export function handleCollisions() {
    this.game.physics.arcade.collide(this.hero, this.platforms, () => {
        if (this.hero.position.x === this._rightWorldBound)
            console.log('switch level');
            // TODO switch level
    });
    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin, null, this);
};