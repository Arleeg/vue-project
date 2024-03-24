<script setup lang="ts"></script>

<template>
  <div id="heroBg" class="full-height flex items-start">
    <div class="h-3/6 w-full flex items-center justify-center">
      <h1 class="text-white text-center" id="hero-title">Catturando l'essenza del momento</h1>
    </div>
  </div>

</template>

<style scoped>
.full-height {
  height: 100vh; /* Imposta l'altezza del div al 100% dell'altezza della viewport */
}

#heroBg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(/src/img/Hero.jpg);
  width: 100%;
  background-position: center;
  background-size: cover;
}

#hero-title {
  font-size: 64px;
  line-height: 80px;
  text-shadow: 2px 2px 4px #000000; /* Aggiunge ombre nere al testo */
}
</style>
