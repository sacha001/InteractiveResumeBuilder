import Hero from "../../../Hero.js";

export function spawnCharacter(data) {
    // spawn hero
    this.hero = new Hero(this.game, this._heroXPos ? this._heroXPos : data.hero.x, data.hero.y);
    this.game.add.existing(this.hero);
    return this.hero;
};