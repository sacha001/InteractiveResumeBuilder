const SPEED = 200;
const JUMP_SPEED = 600;

export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'hero');
        this.anchor.set(0.5, 0.5);
        this.game.physics.enable(this);
        this.body.collideWorldBounds = true;

        this.educationText = ['University of New Brunswick', 'Bachelor of Computer Science', '3.8 GPA'];
        this.initialEducationLen = this.educationText.length;
    }

    move(direction) {
        this.body.velocity.x = direction * SPEED;
    }

    jump() {
        let onGround = this.body.touching.down;
        if (onGround)
            this.body.velocity.y = -JUMP_SPEED;
        return onGround;
    }
 }