<template>
  <nav class="bg-black text-white flex justify-center py-6">
    <ul class="max-w-lg w-full flex flex-row items-center justify-between">
      <li class="first">Bored API</li>
      <li class="second">About us</li>
      <li class="third">FAQ</li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  cursor: pointer;
  transition: 0.5s all;
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
