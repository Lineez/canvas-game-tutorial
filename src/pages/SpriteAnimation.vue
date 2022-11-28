<template>
  <main>
    <div class="controls">
      <label for="animations">Choose Animation:</label>
      <select
        @change="selectPlayerState"
        id="animations"
        name="animations"
      ></select>
    </div>
    <canvas id="canvas1"></canvas>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapSprites } from "@/utils/utils";
import { animationStates } from "@/utils/library";

let playerState = "idle";

export default defineComponent({
  methods: {
    selectPlayerState(e: Event) {
      const target = e.target as HTMLSelectElement;
      playerState = target.value;
    },
  },
  mounted() {
    const select = document.getElementById("animations") as HTMLDivElement;

    const options = animationStates.map((state) => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = state.name;
      return opt;
    });
    select.append(...options);

    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const CANVAS_WIDTH = (canvas.width = 600);
    const CANVAS_HEIGHT = (canvas.height = 600);

    const playerImage = new Image();
    playerImage.src = "./resourses/sprites/shadow_dog.png";
    const spriteWidth = 575;
    const spriteHeight = 523;
    let gameFrame = 0;
    const staggerFrames = 5;
    const spriteAnimations = mapSprites(
      animationStates,
      spriteWidth,
      spriteHeight
    );

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      let position =
        Math.floor(gameFrame / staggerFrames) %
        spriteAnimations[playerState].loc.length;
      let frameX = spriteWidth * position;
      let frameY = spriteAnimations[playerState].loc[position].y;

      ctx.drawImage(
        playerImage,
        frameX,
        frameY,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );

      gameFrame++;
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
  width: 600px;
  height: 600px;
  border: 3px solid black;
  transform: translate(-50%, -50%);
}

.controls {
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.controls,
select,
option {
  font-size: 25px;
}
</style>
