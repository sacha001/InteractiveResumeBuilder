import PlayState from "./PlayState/PlayState.js";

const playstate = new PlayState();

function launchGame() {
    // let canvas = document.getElementById('textCanvas');
    // let ctx = canvas.getContext('2d');
    // let img = document.getElementById('image');

 
    // ctx.font = '30px VT323';
    // ctx.fillText("Almost before we knew it, we had left the ground", 0, 90);
    
    document.getElementById('canvasPlaceholder').style.display = 'none'; 
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('play', playstate);
    game.state.start('play');
    //img.src = ctx.canvas.toDataURL();
    
    

}

document.getElementById('startButton').addEventListener('click', launchGame);