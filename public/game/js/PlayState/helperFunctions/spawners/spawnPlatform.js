export function spawnPlatform(platform) {
    let sprite = this.platforms.create(platform.x, platform.y, platform.image);
    
    this.game.physics.enable(sprite);    
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;
};