<template>
  <div>
    <canvas id="canvas1"></canvas>
    <img
      id="playerImage"
      src="resourses/sprites/scroller/player.png"
      alt="player"
    />
    <img
      id="backgroundImage"
      src="resourses/sprites/scroller/background.png"
      alt="background"
    />
    <img
      id="enemyImage"
      src="resourses/sprites/scroller/enemy.png"
      alt="enemy"
    />
    <button @click="toggleFullscreen" id="fullscreen">Toggle fullscreen</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let raf: number;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let input: InputHandler;
let player: Player;
let background: Background;
let enemies: Enemy[] = [];

let lastTime = 0;
let enemyTimer = 0;
let score = 0;
let gameOver = false;
const randomEnemyInterval = () => Math.random() * 1000 + 1000;
const isKeyInKeys = (arr: string[]): boolean => {
  return Boolean(input.keys.find((key) => arr.includes(key)));
};

const inputKeysMap = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
const fontSize = 40;

class InputHandler {
  keys: string[];
  touchY = 0;
  touchTreshhold = 30;

  constructor() {
    this.keys = [];
  }

  addKeys(value: string) {
    this.keys.push(value);
  }
}

class Player {
  width = 200;
  height = 200;
  x = 100;
  y = this.gameHeight - this.height;
  image = document.getElementById("playerImage") as HTMLImageElement;
  frameX = 0;
  frameY = 0;
  maxFrame = 8;
  velocityX = 0;
  velocityY = 0;
  gravity = 1;
  fps = 20;
  frameTimer = 0;
  frameInterval = 1000 / this.fps;

  constructor(public gameWidth: number, public gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(input: InputHandler, deltaTime: number) {
    // collision detect
    enemies.forEach((enemy) => {
      const dx = enemy.x + enemy.width / 2 - (this.x + this.width / 2);
      const dy = enemy.y + enemy.height / 2 - (this.y + this.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < enemy.width / 2 + this.width / 2) {
        gameOver = true;
      }
    });
    // sprite animation
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) this.frameX = 0;
      else this.frameX++;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    // controls
    if (input.keys.indexOf("ArrowRight") > -1) {
      this.velocityX = 5;
    } else if (input.keys.indexOf("ArrowLeft") > -1) {
      this.velocityX = -5;
    } else {
      this.velocityX = 0;
    }

    if (isKeyInKeys(["ArrowUp", "swipe up"]) && this.onGround()) {
      this.velocityY = -32;
    }

    // horizontal movement
    this.x += this.velocityX;

    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width) {
      this.x = this.gameWidth - this.width;
    }

    // vertical movement
    this.y += this.velocityY;

    if (!this.onGround()) {
      this.velocityY += this.gravity;
      this.maxFrame = 6;
      this.frameY = 1;
      this.frameX = 0;
    } else {
      this.velocityY = 0;
      this.maxFrame = 8;
      this.frameY = 0;
    }

    if (this.y > this.gameHeight - this.height) {
      this.y = this.gameHeight - this.height;
    }
  }
  private onGround() {
    return this.y >= this.gameHeight - this.height;
  }
  restart() {
    this.x = 100;
    this.y = this.gameHeight - this.height;
    this.maxFrame = 8;
    this.frameY = 0;
    this.frameX = 0;
  }
}

class Background {
  image = document.getElementById("backgroundImage") as HTMLImageElement;
  x = 0;
  y = 0;
  width = 2400;
  height = 720;
  velocityX = 2;

  constructor(public gameWidth: number, public gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width - 1,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.x -= this.velocityX;
    if (this.x < 0 - this.width + 1) this.x = 0;
  }
  restart() {
    this.x = 0;
  }
}

class Enemy {
  width = 160;
  height = 119;
  x = this.gameWidth;
  y = this.gameHeight - this.height;
  frameX = 0;
  frameY = 0;
  velocityX = 8;
  maxFrame = 5;
  fps = 20;
  frameTimer = 0;
  frameInterval = 1000 / this.fps;
  markForDelete = false;
  image = document.getElementById("enemyImage") as HTMLImageElement;

  constructor(public gameWidth: number, public gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(deltaTime: number) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) this.frameX = 0;
      else this.frameX++;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    this.x -= this.velocityX;

    if (this.x < -this.width) {
      this.markForDelete = true;
      score++;
    }
  }
}

function handleEnemies(deltaTime: number) {
  if (enemyTimer > randomEnemyInterval()) {
    enemies.push(new Enemy(canvas.width, canvas.height));
    enemyTimer = 0;
  } else {
    enemyTimer += deltaTime;
  }
  // add new ENEMY
  enemies.forEach((enemy) => {
    enemy.update(deltaTime);
    enemy.draw(ctx);
  });
  // remove ENEMY if out of screen
  enemies = enemies.filter((enemy) => !enemy.markForDelete);
}

function displayScore(ctx: CanvasRenderingContext2D) {
  ctx.textAlign = "left";
  ctx.fillStyle = "black";
  ctx.font = `${fontSize}px Helvetica`;
  ctx.fillText(`Score ${score}`, 50, 50);
}

function displayStatusText(ctx: CanvasRenderingContext2D) {
  const widthCenter = canvas.width / 2;
  const heightCenter = canvas.height / 2;

  ctx.textAlign = "center";
  // shadow
  ctx.fillStyle = "black";
  ctx.fillText("Game over", widthCenter, heightCenter);
  ctx.fillText(`Score ${score}`, widthCenter, heightCenter + fontSize);
  ctx.fillText(
    "Press Enter or swipe down to restart",
    widthCenter,
    heightCenter + fontSize * 2
  );
  // text
  ctx.fillStyle = "white";
  ctx.fillText("Game over", widthCenter + 2, heightCenter);
  ctx.fillText(`Score ${score}`, widthCenter + 2, heightCenter + 40);
  ctx.fillText(
    "Press Enter or swipe down to restart",
    widthCenter + 2,
    heightCenter + fontSize * 2
  );
}

function restart() {
  player.restart();
  background.restart();
  enemies = [];
  score = 0;
  gameOver = false;
  animate();
}

function animate(timestamp = 0) {
  console.log(timestamp);
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background.update();
  background.draw(ctx);
  handleEnemies(deltaTime);

  player.update(input, deltaTime);
  player.draw(ctx);

  displayScore(ctx);

  if (!gameOver) {
    raf = requestAnimationFrame(animate);
  } else {
    displayStatusText(ctx);
  }
}

export default defineComponent({
  mounted() {
    canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = 800;
    canvas.height = 720;

    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchmove", this.touchMove);
    window.addEventListener("touchend", this.touchEnd);

    input = new InputHandler();
    player = new Player(canvas.width, canvas.height);
    background = new Background(canvas.width, canvas.height);

    animate();
  },
  methods: {
    keydown(e: KeyboardEvent) {
      if (inputKeysMap.includes(e.code) && input.keys.indexOf(e.code) === -1) {
        input.addKeys(e.code);
      }
      if (gameOver && e.code === "Enter") restart();
      if (e.code === "KeyF") this.toggleFullscreen();
    },
    keyup(e: KeyboardEvent) {
      if (inputKeysMap.includes(e.code)) {
        input.keys = input.keys.filter((key) => key !== e.code);
      }
    },
    touchStart(e: TouchEvent) {
      input.touchY = e.changedTouches[0].pageY;
    },
    touchMove(e: TouchEvent) {
      const swipeDistance = e.changedTouches[0].pageY - input.touchY;
      if (
        swipeDistance < -input.touchTreshhold &&
        input.keys.indexOf("swipe up") === -1
      ) {
        input.keys.push("swipe up");
      } else if (
        swipeDistance > input.touchTreshhold &&
        input.keys.indexOf("swipe down") === -1
      ) {
        input.keys.push("swipe down");
        if (gameOver) restart();
      }
    },
    touchEnd() {
      console.log(input.keys);
      input.keys = input.keys.filter((key) => key !== "swipe up");
      input.keys = input.keys.filter((key) => key !== "swipe down");
      // input.keys.splice(input.keys.indexOf("swipe up"), 1);
      // input.keys.splice(input.keys.indexOf("swipe down"), 1);
    },
    toggleFullscreen() {
      if (!document.fullscreenElement) {
        canvas.requestFullscreen().catch((err) => {
          alert(`Can't enable fullscreen mode. ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    },
  },
  unmounted() {
    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("keyup", this.keyup);
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchmove", this.touchMove);
    window.removeEventListener("touchend", this.touchEnd);
    cancelAnimationFrame(raf);
  },
});
</script>

<style lang="scss" scoped>
#canvas1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
}

img {
  display: none;
}

#fullscreen {
  position: absolute;
  font-size: 20px;
  padding: 10px;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-black);
  border: 1px solid var(--color-black);
}
</style>
