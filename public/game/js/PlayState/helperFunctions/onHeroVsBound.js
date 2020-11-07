export function onHeroVsBound(hero, bound) {
    if (bound.position.x === 0 && this.level === 0)
        return;
    this.camera.fade('#000000', 250);
    this.camera.onFadeComplete.addOnce(function () {
        let newLevel;
        if (bound.position.x === 0) {
            this._heroXPos = this.world.width - hero._frame.width;
            newLevel = this.level - 1;
        } else {
            this._heroXPos = hero._frame.width;
            newLevel = this.level + 1;
        }

        this.game.state.restart(true, false, {
            level: newLevel
        });
    }, this);
}