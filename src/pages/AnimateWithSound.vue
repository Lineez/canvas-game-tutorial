<template>
  <div>
    <div class="container">click to see boom effect with sound</div>
    <canvas @click="showExplosion" id="canvas1"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let raf: number;
const explosions: Explosion[] = [];
class Explosion {
  spriteWidth = 200;
  spriteHeight = 179;
  width = this.spriteWidth / 2;
  height = this.spriteHeight / 2;
  image = new Image();
  frame = 0;
  timer = 0;
  angle = Math.random() * 6.2;
  sound = new Audio("./resourses/sounds/Fire impact 1.wav");

  constructor(
    public x: number,
    public y: number,
    public ctx: CanvasRenderingContext2D
  ) {
    this.image.src = "./resourses/sprites/boom.png";
    this.sound.volume = 0.2;
  }

  update() {
    if (this.frame === 0) this.sound.play();
    this.timer++;
    if (this.timer % 10 === 0) {
      this.frame++;
    }
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    this.ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.width / 2,
      0 - this.height / 2,
      this.width,
      this.height
    );
    this.ctx.restore();
  }
}

export default defineComponent({
  data() {
    return {
      ctx: null as CanvasRenderingContext2D | null,
    };
  },
  methods: {
    showExplosion(e: MouseEvent) {
      console.log("explosions", explosions);
      if (this.ctx) {
        explosions.push(new Explosion(e.offsetX, e.offsetY, this.ctx));
      }
    },
  },
  mounted() {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx = ctx;
    canvas.width = 500;
    canvas.height = 500;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      explosions.forEach((item, i) => {
        item.update();
        item.draw();

        if (explosions[i].frame > 5) {
          explosions.splice(i, 1);
        }
      });

      raf = requestAnimationFrame(animate);
    }

    animate();
  },
  unmounted() {
    cancelAnimationFrame(raf);
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
}
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
