export function create() {
    this.camera.flash('#000000', 250);
    this.game.add.image(0, 0, `background-level-${this.level}`);
    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));
    this.hud = this.game.add.group();
};