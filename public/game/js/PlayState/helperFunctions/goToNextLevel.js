export function goToNextLevel(newLevel) {
    if (!Number.isInteger(newLevel)) 
        newLevel = this.level + 1;
    this.camera.fade('#000000', 250);
    this.camera.onFadeComplete.addOnce(function () {
        this.game.state.restart(true, false, {
            level: newLevel
        });
    }, this);
}