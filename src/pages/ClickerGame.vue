<template>
  <div>
    <canvas id="collisionCanvas"></canvas>
    <canvas @click="killRaven" id="canvas1"></canvas>
    <button v-if="gameOver" @click="restart" class="button">restart</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let collisionCanvas: HTMLCanvasElement;
let collisionCtx: CanvasRenderingContext2D;

let score = 0;
let gameOver = ref(false);

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens: Raven[] = [];
let particles: Particle[] = [];
let explosions: Explosion[] = [];

class Raven {
  spriteWidth = 271;
  spriteHeight = 194;
  sizeModifier = Math.random() * 0.6 + 0.4;
  width = this.spriteWidth * this.sizeModifier;
  height = this.spriteHeight * this.sizeModifier;
  x = canvas.width;
  y = Math.random() * (canvas.height - this.height);
  directionX = Math.random() * 1 + 3;
  directionY = Math.random() * 5 - 2.5;
  markedForDelete = false;
  image = new Image();
  frame = 0;
  maxFrame = 4;
  timeSienceFlap = 0;
  flapInterval = Math.random() * 100 + 50;
  randomColors = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  color = `rgb(${this.randomColors[0]}, ${this.randomColors[1]}, ${this.randomColors[2]})`;
  hasTrail = Math.random() > 0.5;

  constructor() {
    this.image.src = "./resourses/sprites/raven.png";
  }

  update(deltaTime: number) {
    if (this.y < 0 || this.y > canvas.height - this.height) {
      this.directionY = this.directionY * -1;
    }
    this.x -= this.directionX;
    this.y += this.directionY;
    if (this.x < 0 - this.width) this.markedForDelete = true;
    this.timeSienceFlap += deltaTime;
    if (this.timeSienceFlap > this.flapInterval) {
      if (this.frame > this.maxFrame) this.frame = 0;
      else this.frame++;
      this.timeSienceFlap = 0;
      if (this.hasTrail) {
        particles.push(new Particle(this.x, this.y, this.width, this.color));
      }
    }
    if (this.x < 0 - this.width) gameOver.value = true;
  }

  draw() {
    collisionCtx.fillStyle = this.color;
    collisionCtx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Particle {
  radius = (Math.random() * this.size) / 10;
  maxRadius = Math.random() * 10 + 35;
  markedForDelete = false;
  speedX = Math.random() * 1 + 0.5;

  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {
    this.x = x + this.size / 2 + Math.random();
    this.y = y + this.size / 3 + Math.random();
  }
  update() {
    this.x += this.speedX;
    this.radius += 0.5;
    if (this.radius > this.maxRadius - 5) {
      this.markedForDelete = true;
    }
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = 1 - this.radius / this.maxRadius;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Explosion {
  image = new Image();
  spriteWidth = 200;
  spriteHeight = 179;
  sound = new Audio("./resourses/sounds/Fire impact 1.wav");
  timeSinceLastFrame = 0;
  frameInterval = 50;
  frame = 0;
  markedForDelete = false;
  constructor(public x: number, public y: number, public size: number) {
    this.image.src = "./resourses/sprites/boom.png";
    this.sound.volume = 0.2;
  }
  update(deltaTime: number) {
    if (this.frame === 0) this.sound.play();
    this.timeSinceLastFrame += deltaTime;
    if (this.timeSinceLastFrame > this.frameInterval) {
      this.frame++;
      this.timeSinceLastFrame = 0;
    }
    if (this.frame > 5) {
      this.markedForDelete = true;
    }
  }
  draw() {
    if (!ctx) return;
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}

function drawScore() {
  ctx.save();
  ctx.font = "50px Impact";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 50, 75);
  ctx.fillStyle = "red";
  ctx.fillText("Score: " + score, 55, 80);
  ctx.restore();
}
function drawGameOver() {
  ctx.save();
  ctx.font = "50px Impact";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText(
    "Game over, score is: " + score,
    canvas.width / 2,
    canvas.height / 2
  );
  ctx.restore();
}

function animate(timestamp: number) {
  canvas = canvas as HTMLCanvasElement;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collisionCtx.clearRect(0, 0, canvas.width, canvas.height);
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltaTime;

  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven());
    timeToNextRaven = 0;
    ravens.sort((a, b) => a.width - b.width);
  }
  drawScore();
  [...particles, ...ravens, ...explosions].forEach((obj) =>
    obj.update(deltaTime)
  );
  [...particles, ...ravens, ...explosions].forEach((obj) => obj.draw());
  ravens = ravens.filter((object) => !object.markedForDelete);
  explosions = explosions.filter((object) => !object.markedForDelete);
  particles = particles.filter((object) => !object.markedForDelete);

  if (!gameOver.value) {
    requestAnimationFrame(animate);
  } else {
    drawGameOver();
  }
}

export default defineComponent({
  data() {
    return {
      collisionCtx,
      gameOver,
    };
  },
  methods: {
    killRaven(e: MouseEvent) {
      if (!this.collisionCtx) return;
      const detectPixelColor = this.collisionCtx.getImageData(
        e.offsetX,
        e.offsetY,
        1,
        1
      );
      const pc = detectPixelColor.data;
      ravens.forEach((raven) => {
        if (
          raven.randomColors[0] === pc[0] &&
          raven.randomColors[1] === pc[1] &&
          raven.randomColors[2] === pc[2]
        ) {
          raven.markedForDelete = true;
          score++;
          explosions.push(new Explosion(raven.x, raven.y, raven.width));
          console.log("explosionsm, explosions", explosions);
        }
      });
    },
    restart() {
      ravens = [];
      particles = [];
      explosions = [];
      gameOver.value = false;
      score = 0;
      animate(0);
    },
  },
  mounted() {
    canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = 500;
    canvas.height = 500;

    collisionCanvas = document.getElementById(
      "collisionCanvas"
    ) as HTMLCanvasElement;
    collisionCtx = collisionCanvas.getContext("2d") as CanvasRenderingContext2D;
    collisionCanvas.width = 500;
    collisionCanvas.height = 500;
    // to vue
    this.collisionCtx = collisionCtx;

    animate(0);
  },
});
</script>

<style lang="scss" scoped>
canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  border: 3px solid black;
  transform: translate(-50%, -50%);
}

#collisionCanvas {
  opacity: 0;
}

img {
  display: none;
}

.button {
  position: absolute;
  top: 80%;
  left: 50%;
  padding: 0 12px;
  min-height: 40px;
  border: 1px solid #000;
  transform: translateX(-50%);
}
</style>
