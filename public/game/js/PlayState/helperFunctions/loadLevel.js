
export function loadLevel(data) {
    this.platforms = this.game.add.group();
    this.books = this.game.add.group();
    this.bgDecoration = this.game.add.group();
    this.worldBounds = this.game.add.group();

    data.platforms.forEach(this._spawnPlatform, this);    

    let hero = this._spawnCharacter({hero: data.hero});
    
    for (let i = 0; i < hero.initialEducationLen && data.books; i++) {
        let randomIndex = Math.floor(Math.random() * data.books.length);
        let book = data.books.splice(randomIndex, 1)[0];
        this._spawnItem(book);
    }

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