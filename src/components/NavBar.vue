<script>
</script>

<template >
  <nav class="flex items-center justify-between bg-transparent fixed inset-x-0 top-0 p-4 z-10">
    <!-- Logo a sinistra -->
    <div class="flex items-center">
      <img src="../img/logo.png" alt="Logo" height="20px" width="90px" class="ml-10"/>
    </div>

    <!-- Pulsanti a destra -->
    <div class="flex items-center space-x-4">
      <a
        v-for="item in [{label:'Home',href:'/'}, {label:'About',href:'/about'}, {label:'Contact',href:'/contact'}]"
        :key="item.label"
        :href="item.href"
        class="bg-transparent font-bold text-white px-4 py-2 rounded-md"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
/* Stili specifici per il componente Navbar */
</style>

 