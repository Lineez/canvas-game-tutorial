import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SpriteAnimation",
    component: () => import("@/pages/SpriteAnimation.vue"),
  },
  {
    path: "/parallaxBackground",
    name: "ParallaxBackground",
    component: () => import("@/pages/ParallaxBackground.vue"),
  },
  {
    path: "/enemyMovement",
    name: "EnemyMovement",
    component: () => import("@/pages/EnemyMovement.vue"),
  },
  {
    path: "/animateWithSound",
    name: "AnimateWithSound",
    component: () => import("@/pages/AnimateWithSound.vue"),
  },
  {
    path: "/clickerGame",
    name: "ClickerGame",
    component: () => import("@/pages/ClickerGame.vue"),
  },
  {
    path: "/moreEnemy",
    name: "MoreEnemy",
    component: () => import("@/pages/MoreEnemy.vue"),
  },
  {
    path: "/scrollerGame",
    name: "ScrollerGame",
    component: () => import("@/pages/ScrollerGame.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
