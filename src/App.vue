<script setup lang="ts">
import Navbar from './components/NavBar.vue'
import FooterFinal from './components/FooterFinal.vue';
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <FooterFinal />

</template>

<style scoped></style>
