import PlayState from "./PlayState/PlayState.js";

const playstate = new PlayState();

export default function launchGame() {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('play', playstate);
    game.state.start('play');
}
