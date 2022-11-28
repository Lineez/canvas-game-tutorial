<template>
  <header>
    <nav class="nav">
      <router-link v-for="route in routes" :key="route.name" :to="route.path">
        {{ route.name }}
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routes } from "@/router/index";

export default defineComponent({
  data() {
    return {
      routes,
    };
  },
});
</script>

<style lang="scss">
.nav {
  display: flex;
  column-gap: 10px;
}
</style>
