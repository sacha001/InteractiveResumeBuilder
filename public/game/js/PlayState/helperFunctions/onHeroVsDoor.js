export function onHeroVsDoor(hero, door) {
    door.frame = 1;
    this.game.add.tween(hero)
        .to({x: this.door.x, alpha: 0}, 500, null, true)
        .onComplete.addOnce(this._goToNextLevel, this);
}