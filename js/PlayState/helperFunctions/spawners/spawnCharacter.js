import Hero from "../../../Hero.js";

export function spawnCharacter(data) {
    // spawn hero
    this.hero = new Hero(this.game, data.hero.x, data.hero.y);
    this.game.add.existing(this.hero);
};