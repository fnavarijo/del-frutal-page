<template>
  <nav
    class="px-8 py-4 w-screen fixed flex items-center justify-between text-white"
  >
    <img
      src="https://vuejs.org/images/logo.png"
      class="h-12 w-12"
      alt="EDT Logo"
    />
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
        <NuxtLink to="/">¿Quienes somos?</NuxtLink>
      </li>
      <li class="uppercase relative font-bold mx-2 group">
        <span>Export</span>
        <ul class="absolute invisible group-hover:visible">
          <NuxtLink to="/">
            <li
              class="mb-1 p-1 uppercase bg-white opacity-50 border text-black text-sm whitespace-no-wrap sub-link"
            >
              Exportacion
            </li>
          </NuxtLink>
          <NuxtLink to="/">
            <li
              class="mb-1 p-1 uppercase bg-white opacity-50 border text-black text-sm whitespace-no-wrap sub-link"
            >
              Private label
            </li>
          </NuxtLink>
        </ul>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Contactenos</NuxtLink>
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
