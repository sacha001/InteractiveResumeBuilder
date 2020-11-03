export function handleCollisions() {
    this.game.physics.arcade.collide(this.hero, this.platforms, () => {
        if (this.hero.position.x === this._rightWorldBound) {
            this.camera.fade('#000000', 250);
            this.camera.onFadeComplete.addOnce(function () {
                // change to next level
                this.game.state.restart(true, false, {
                    level: this.level + 1
                });
            }, this);

        }
            // TODO switch level
    });
    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin, null, this);
};