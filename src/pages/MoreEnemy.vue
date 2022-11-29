<template>
  <div>
    <canvas id="canvas1"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let game: Game;

type EnemyWariant = "Worm" | "Ghost" | "Spider";

class Game {
  enemies: (Worm | Ghost | Spider)[] = [];
  enemyInterval = 500;
  enemyTimer = 0;
  enemyMap = { Worm, Ghost, Spider };
  constructor(
    public ctx: CanvasRenderingContext2D,
    public width: number,
    public height: number
  ) {}
  update(deltaTime: number) {
    this.enemies = this.enemies.filter((obj) => !obj.markedForDelete);
    if (this.enemyTimer > this.enemyInterval) {
      this.addNewEnemy();
      this.enemyTimer = 0;
      console.log(this.enemies);
    } else {
      this.enemyTimer += deltaTime;
    }
    this.enemies.forEach((obj) => obj.update(deltaTime));
  }
  draw() {
    this.enemies.forEach((obj) => obj.draw(this.ctx));
  }
  private addNewEnemy() {
    const enemyMap = Object.keys(this.enemyMap);
    const randomNumber = Math.floor(Math.random() * enemyMap.length);

    const newEnemy = this.enemyMap[enemyMap[randomNumber] as EnemyWariant];
    this.enemies.push(new newEnemy(this));
    // this.enemies.sort((a, b) => a.y - b.y)
  }
}
// maybe it's a mistake to use abstract class here
// mayble need define property like (y!: number)
// i don't know how to typed this class, who uses child property in self methods
abstract class Enemy {
  markedForDelete = false;
  frameX = 0;
  maxFrame = 5;
  frameInterval = 100;
  frameTimer = 0;
  // define in child class, but need here too
  abstract velocityX: number;
  abstract y: number;
  abstract x: number;
  abstract width: number;
  abstract height: number;
  abstract spriteWidth: number;
  abstract spriteHeight: number;
  abstract image: HTMLImageElement;

  constructor(public game: Game) {}

  update(deltaTime: number) {
    this.x -= this.velocityX * deltaTime;
    // remove enemies
    if (this.x < -this.width) this.markedForDelete = true;
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
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

class Worm extends Enemy {
  spriteWidth = 229;
  spriteHeight = 171;
  width = this.spriteWidth * 0.5;
  height = this.spriteHeight * 0.5;
  x = this.game.width;
  y = this.game.height - this.height;
  image = new Image();
  velocityX = Math.random() * 0.1 + 0.1;
  constructor(game: Game) {
    super(game);
    this.image.src = "./resourses/sprites/enemy_worm.png";
  }
}

class Ghost extends Enemy {
  spriteWidth = 261;
  spriteHeight = 209;
  width = this.spriteWidth * 0.5;
  height = this.spriteHeight * 0.5;
  x = this.game.width;
  y = Math.random() * this.game.height * 0.6;
  image = new Image();
  velocityX = Math.random() * 0.2 + 0.1;
  opacity = Math.random() + 0.1;
  angle = 0;
  curve = Math.random() * 3;
  constructor(game: Game) {
    super(game);
    this.image.src = "./resourses/sprites/enemy_ghost.png";
  }
  update(deltaTime: number) {
    super.update(deltaTime);
    this.y += Math.sin(this.angle) * this.curve;
    this.angle += 0.04;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    super.draw(ctx);
    ctx.restore();
  }
}

class Spider extends Enemy {
  spriteWidth = 310;
  spriteHeight = 175;
  width = this.spriteWidth * 0.5;
  height = this.spriteHeight * 0.5;
  x = Math.random() * this.game.width;
  y = 0 - this.height;
  image = new Image();
  velocityX = 0;
  velocityY = Math.random() * 0.1 + 0.1;
  maxLength = Math.random() * this.game.height;
  constructor(game: Game) {
    super(game);
    this.image.src = "./resourses/sprites/enemy_spider.png";
  }
  update(deltaTime: number) {
    super.update(deltaTime);
    // delete spider
    if (this.y < -this.height) this.markedForDelete = true;

    this.y += this.velocityY * deltaTime;
    if (this.y > this.maxLength) {
      this.velocityY *= -1;
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x + this.width / 2, 0);
    ctx.lineTo(this.x + this.width / 2, this.y + 10);
    ctx.stroke();
    super.draw(ctx);
  }
}

let deltaTime = 0,
  lastTime = 0;

function animate(timestamp = 0) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  game.update(deltaTime);
  game.draw();
  requestAnimationFrame(animate);
}

export default defineComponent({
  mounted() {
    canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = 500;
    canvas.height = 800;

    game = new Game(ctx, canvas.width, canvas.height);

    animate();
  },
});
</script>

<style lang="scss">
canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 800px;
  border: 3px solid black;
  transform: translate(-50%, -50%);
}
</style>
