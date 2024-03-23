<script setup lang="ts"></script>

<template>
  <div id="heroBg" class="full-height">
  </div>
</template>

<style scoped>
.full-height {
  height: 100vh; /* Imposta l'altezza del div al 100% dell'altezza della viewport */
}

#heroBg {
  background-image: url(/src/img/Hero.jpg);
  width: 100%;
  background-position: center;
  background-size: cover;
}
</style>
