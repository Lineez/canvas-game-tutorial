import { AnimationState } from "@/utils/library";

interface Location {
  x: number;
  y: number;
}

interface SpriteAnimation {
  [key: string]: Frames;
}

interface Frames {
  loc: Location[];
}

export function mapSprites(
  animationStates: AnimationState[],
  spriteWidth: number,
  spriteHeight: number
) {
  const spriteAnimations = {} as SpriteAnimation;

  animationStates.forEach((state, i) => {
    const frames = {
      loc: [] as Location[],
    };

    for (let j = 0; j < state.frames; j++) {
      const posX = j * spriteWidth;
      const posY = i * spriteHeight;

      frames.loc.push({ x: posX, y: posY });
    }

    spriteAnimations[state.name] = frames;
  });

  return spriteAnimations;
}
