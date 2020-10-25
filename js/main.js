import PlayState from "./PlayState/PlayState.js";

const playstate = new PlayState();

function launchGame() {
    document.getElementById('canvasPlaceholder').style.display = 'none'; 
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('play', playstate);
    game.state.start('play');
}

document.getElementById('startButton').addEventListener('click', launchGame);