<template>
  <TheNav />
  <TheMain />
</template>

<script lang="ts">
import TheNav from "./components/TheNav.vue";
import TheMain from "./components/TheMain.vue";

export default{
  components: {
    TheNav,
    TheMain,
  },
}
</script>

<style>
body{
  background: gold;
}

body {
  background: linear-gradient(90deg, #dcff3e, #ff0062, #cc00ff, #006951);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  transform: translate3d(0, 0, 0);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>