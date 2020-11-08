import launchGame from "../game/js/launchGame.js";

document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('canvasPlaceholder').style.display = 'none';
    genBackground(0, 'SACHA SILANCE', '50px "Press Start 2P"', '#000000', 960/2, 90);
    genBackground(1, 'UNB', '25px "Press Start 2P"', '#FFFFFF', 960/2, 227);
});

function genBackground(lvlNum, text, font, color, x, y) {
  let image = new Image();
  image.src = "images/background-level-" + lvlNum + ".png";
  image.onload = function() {
    let canvas = document.createElement('canvas');
    canvas.width = 960;
    canvas.height = 600;
    let ctx = canvas.getContext('2d');
    ctx.textAlign = 'center';
    ctx.fillStyle= color;
    ctx.font = font;

    ctx.drawImage(image, 0, 0);
    ctx.fillText(text, x, y);
    let base64img = ctx.canvas.toDataURL();
    let body = {base64img: base64img, filename: "background-level-" + lvlNum + ".png"};
    postData('upload', body).then(() => { if (lvlNum === 0) { launchGame()} });
  }
}

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response;
}
