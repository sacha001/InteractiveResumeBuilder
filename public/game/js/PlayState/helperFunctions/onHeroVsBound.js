export function onHeroVsBound(hero, bound) {
    if (bound.position.x === 0 && this.level === 0)
        return;

    let newLevel;
    if (bound.position.x === 0) {
        this._heroXPos = this.world.width - hero._frame.width;
        newLevel = this.level - 1;
    } else {
        this._heroXPos = hero._frame.width;
        newLevel = this.level + 1;
    }
    this._goToNextLevel(newLevel);
}