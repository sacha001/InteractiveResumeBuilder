import launchGame from "../game/js/launchGame.js";

document.getElementById('startButton').addEventListener('click', () => {
    //document.getElementById('canvasPlaceholder').style.display = 'none'; 
    // launchGame();
    let canvas = document.getElementById('textCanvas');
    let ctx = canvas.getContext('2d');
    ctx.textAlign = 'center';
    ctx.font = '100px VT323';

    let text = "SACHA SILANCE";

    let img = document.getElementById('image');
    let image = new Image();
    image.src = "images/background.png";
    image.onload = function(){
        ctx.drawImage(image, 0, 0);
        ctx.fillText(text, canvas.width/2, 90);
        img.src = ctx.canvas.toDataURL();
    } 
});