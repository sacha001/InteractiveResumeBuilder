export function handleInput() {
    if (this.keys.left.isDown) { // move hero left
        this.hero.move(-1);
    }
    else if (this.keys.right.isDown) { // move hero right
        this.hero.move(1);
    } else {
        this.hero.move(0);
    }

    this.keys.up.onDown.add(function () {
        let didJump = this.hero.jump();
        //if (didJump) {this.sfx.jump.play();}
    }, this);
}
