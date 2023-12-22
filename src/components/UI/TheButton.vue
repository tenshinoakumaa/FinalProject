<template>
  <button class="w-36 bg-black rounded-lg text-white py-2 px-2" :class="position">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: ["position"],
};
</script>

<style scoped>
button {
  transition: all 0.5s;
  color: gold;
}
.first:hover {
  transform: rotate(-10deg) scale(1.2);
}
.second:hover {
  transform: scale(1.2);
}
.third:hover {
  transform: rotate(10deg) scale(1.2);
}
</style>
