<template>
  <nav class="flex items-center justify-between navbar-custom fixed w-full mx-auto px-20">
    <!-- Logo a sinistra -->
    <div class="flex items-center">
      <a href="/">
        <img src="../img/Logo.png" alt="Logo" height="20px" width="90px"/>
      </a>
    </div>

    <!-- Pulsanti a destra -->
    <div class="flex items-center space-x-4">
      <a
        v-for="item in [{label:'Home',href:'/'}, {label:'About',href:'/about'}, {label:'Gallery',href:'/gallery'}]"
        :key="item.label"
        :href="item.href"
        class=" font-bold text-white px-4 "
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
/* Stili specifici per il componente Navbar */
.navbar-custom {
  height: 90px;
}
</style>
