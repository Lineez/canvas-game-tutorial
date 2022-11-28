<template>
  <div>
    <canvas id="canvas1"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const CANVAS_WIDTH = (canvas.width = 500);
    const CANVAS_HEIGHT = (canvas.height = 500);
    const enemyCounter = 20;
    let gameFrame = 5;

    class Enemy {
      image = new Image();
      speed = Math.random() * 4 + 1;
      spriteWidth = 213;
      spriteHeight = 213;
      width = this.spriteWidth / 3;
      height = this.spriteHeight / 2;
      x = Math.random() * (canvas.width - this.width);
      y = Math.random() * (canvas.height - this.height);
      frame = 0;
      flapSpeed = Math.floor(Math.random() * 3 + 1);
      newX = Math.random() * (canvas.width - this.width);
      newY = Math.random() * (canvas.height - this.height);
      interval = Math.floor(Math.random() * 200 + 50);
      constructor() {
        this.image.src = "./resourses/sprites/enemy4.png";
      }
      update() {
        if (gameFrame % this.interval === 0) {
          this.newX = Math.random() * (canvas.width - this.width);
          this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;

        this.x -= dx / 20;
        this.y -= dy / 20;

        // this.x = 0;
        // this.y = 0;
        if (this.x + this.width < 0) {
          this.x = canvas.width;
        }

        if (gameFrame % this.flapSpeed === 0) {
          this.frame > 4 ? (this.frame = 0) : (this.frame += 1);
        }
      }
      draw() {
        ctx.drawImage(
          this.image,
          this.frame * this.spriteWidth,
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

    const enemies = createEnemies(enemyCounter);

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      enemies.forEach((enemy) => {
        enemy.update();
        enemy.draw();
      });

      gameFrame++;
      requestAnimationFrame(animate);
    }

    animate();

    function createEnemies(n: number) {
      const enemies = [];
      for (let i = 0; i < n; i++) {
        enemies.push(new Enemy());
      }
      return enemies;
    }
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
</style>
