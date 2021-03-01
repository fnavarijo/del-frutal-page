<template>
  <nav
    class="p-8 w-screen fixed hidden md:flex items-center justify-between text-white z-10"
  >
    <NuxtLink to="/">
      <img src="~assets/img/logo-export.png" class="w-56" alt="EDT Logo" />
    </NuxtLink>
    <ul class="flex">
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Inicio</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Nuestro Grupo</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Marcas</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Descubre EDT</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/quienes-somos">¿Quienes somos?</NuxtLink>
      </li>
      <li class="uppercase relative font-bold mx-2 group">
        <span>Export</span>
        <ul class="absolute invisible group-hover:visible">
          <NuxtLink to="/export">
            <li
              class="mb-1 p-1 uppercase bg-white opacity-50 border text-black text-sm whitespace-no-wrap sub-link"
            >
              Exportacion
            </li>
          </NuxtLink>
          <NuxtLink to="/private-label">
            <li
              class="mb-1 p-1 uppercase bg-white opacity-50 border text-black text-sm whitespace-no-wrap sub-link"
            >
              Private label
            </li>
          </NuxtLink>
        </ul>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/contact-us">Contactenos</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppNav',
});
</script>

<style scoped>
.sub-link {
  @apply transition ease-in duration-100;
}

.sub-link:hover {
  @apply opacity-25;
}
</style>
