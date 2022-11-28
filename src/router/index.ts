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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
