const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 800);
let gameSpeed = 10;

const backgroundLayer1 = new Image(); // el constructor Image() tiene la misma funcionalidad que escribir document.createElement('img')
backgroundLayer1.src = "layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "layer-4.png";

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
const layer1 = new Layer(backgroundLayer1, 0.5);
const layer2 = new Layer(backgroundLayer2, 0.7);
const layer3 = new Layer(backgroundLayer3, 0.8);
const layer4 = new Layer(backgroundLayer4, 0.9);

const gameObjects = [layer4, layer1, layer3, layer2]; // ese es el orden en el que quedan bien, corregir nombre de archivos

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((object) => {
    object.update();
    object.draw();
  });

  requestAnimationFrame(animate);
}

animate();
