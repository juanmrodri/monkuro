const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 800);

let gameSpeed = 10;

// cargamos los layers del back
const backgroundLayer1 = new Image(); // el constructor Image() tiene la misma funcionalidad que escribir document.createElement('img')
backgroundLayer1.src = "layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "layer-7.png";
const backgroundLayer6 = new Image();
backgroundLayer6.src = "layer-8.png";
const backgroundLayer7 = new Image();
backgroundLayer7.src = "layer-5.png";

let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 18;

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 800;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier; // nos ayuda a la paralaxisacion, para los layers
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed; // esto ayuda a que no quede vacio entre imagenes
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed; // esto ayuda a que no quede vacio entre imagenes
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}
const layer1 = new Layer(backgroundLayer1, 0.3);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.5);
const layer4 = new Layer(backgroundLayer4, 0.4);
const layer5 = new Layer(backgroundLayer5, 0.3);
const layer6 = new Layer(backgroundLayer6, 0.2);
const layer7 = new Layer(backgroundLayer7, 0.8);

const gameObjects = [layer6, layer5, layer4, layer7, layer3, layer2]; // ese es el orden en el que quedan bien, corregir nombre de archivos

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((object) => {
    object.update();
    object.draw();
  });

  // este va acá porque tapa al monkuro
  layer1.update();
  layer1.draw();

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
