export function spawnItem(book) {
    let frame = Math.floor(Math.random() * Math.floor(5)) + 1;
    let sprite = this.books.create(book.x, book.y, 'book', frame);
    sprite.anchor.set(0.5, 0.5);
    // sprite.animations.add('rotate', [0, 1, 2, 1], 6, true); // 6fps, looped
    // sprite.animations.play('rotate');

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    // add a small 'up & down' animation via a tween
    sprite.y -= 3;
    this.game.add.tween(sprite)
        .to({y: sprite.y + 6}, 200, Phaser.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .loop()
        .start();
};