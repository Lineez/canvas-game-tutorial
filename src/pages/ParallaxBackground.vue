<template>
  <main>
    <div class="container">
      <p>Game speed: <span id="showGameSpeed"></span></p>
      <input
        @change="changeGameSpeed"
        type="range"
        id="slider"
        min="0"
        max="20"
      />
    </div>
    <canvas id="canvas1"></canvas>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let gameSpeed = 5;

export default defineComponent({
  methods: {
    changeGameSpeed(e: Event) {
      const targer = e.target as HTMLInputElement;
      gameSpeed = Number(targer.value);
      if (this.showGameSpeed) {
        this.showGameSpeed.innerHTML = String(gameSpeed);
      }
    },
  },
  data() {
    return {
      showGameSpeed: null as HTMLElement | null,
    };
  },
  mounted() {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const CANVAS_WIDTH = (canvas.width = 800);
    const CANVAS_HEIGHT = (canvas.height = 700);
    // let gameFrame = 0;

    const bgLayer1 = new Image();
    bgLayer1.src = "./resourses/sprites/layer-1.png";
    const bgLayer2 = new Image();
    bgLayer2.src = "./resourses/sprites/layer-2.png";
    const bgLayer3 = new Image();
    bgLayer3.src = "./resourses/sprites/layer-3.png";
    const bgLayer4 = new Image();
    bgLayer4.src = "./resourses/sprites/layer-4.png";
    const bgLayer5 = new Image();
    bgLayer5.src = "./resourses/sprites/layer-5.png";

    const slider = document.getElementById("slider") as HTMLInputElement;
    slider.value = String(gameSpeed);

    this.showGameSpeed = document.getElementById("showGameSpeed");

    if (this.showGameSpeed) {
      this.showGameSpeed.innerHTML = String(gameSpeed);
    }

    class Layer {
      x: number;
      y: number;
      width: number;
      height: number;
      image: HTMLImageElement;
      speedModifier: number;
      speed: number;

      constructor(image: HTMLImageElement, speedModifier: number) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
      }

      update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
          this.x = 0;
        }
        this.x = this.x - this.speed;

        // this.x = gameFrame * this.speed % this.width;
      }
      draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(
          this.image,
          this.x + this.width,
          this.y,
          this.width,
          this.height
        );
      }
    }

    const layer1 = new Layer(bgLayer1, 0.2);
    const layer2 = new Layer(bgLayer2, 0.4);
    const layer3 = new Layer(bgLayer3, 0.6);
    const layer4 = new Layer(bgLayer4, 0.8);
    const layer5 = new Layer(bgLayer5, 1);

    const gameObjects = [layer1, layer2, layer3, layer4, layer5];

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      gameObjects.forEach((object) => {
        object.update();
        object.draw();
      });

      // gameFrame--;
      requestAnimationFrame(animate);
    }

    animate();
  },
});
</script>

<style lang="scss" scoped>
canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 700px;
  border: 3px solid black;
  transform: translate(-50%, -50%);
}
.container {
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  #slider {
    width: 100%;
  }
  p {
    font-size: 20px;
  }
}
</style>
