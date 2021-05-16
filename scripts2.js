// solo para testear spritesheets

const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 800);

let gameSpeed = 15;

// cargamos el monkuro

const monkuro = new Image();
monkuro.src = "raiden.png";

// para sprite monk
//const monkuroWidth = 104;
//const monkuroHeight = 135;

// para sprite raiden
const monkuroWidth = 108;
const monkuroHeight = 125;

let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 18;



function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    monkuro,
    frameX * monkuroWidth,
    frameY * monkuroHeight,
    monkuroWidth,
    monkuroHeight,
    400,
    350,
    monkuroWidth,
    monkuroHeight
  );
  if (gameFrame % staggerFrames == 0) {
    if (frameX < 5) {
      frameX++;
    } else {
      frameX = 0;
    }
  }
  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
