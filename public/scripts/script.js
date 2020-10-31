import launchGame from "../game/js/launchGame.js";

document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('canvasPlaceholder').style.display = 'none'; 
    launchGame();
});