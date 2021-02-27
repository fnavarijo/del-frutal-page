<template>
  <div
    class="md:hidden absolute p-4 w-full flex justify-between items-center top-0 z-20"
  >
    <NuxtLink to="/">
      <img
        src="https://vuejs.org/images/logo.png"
        class="h-12 w-12"
        alt="EDT Logo"
      />
    </NuxtLink>
    <div
      class="flex flex-col space-y-1 h-6 justify-between"
      @click="displayNav = true"
    >
      <span class="bg-white w-8 h-1 rounded-sm inline-block" />
      <span class="bg-white w-8 h-1 rounded-sm inline-block" />
      <span class="bg-white w-8 h-1 rounded-sm inline-block" />
    </div>

    <nav
      class="absolute top-0 left-0 h-screen w-screen p-4 bg-normal-blue-500 text-white transition ease-in-out duration-150"
      :class="[displayNav ? 'transform-none' : 'transform -translate-x-full']"
    >
      <div class="h-10 w-full flex justify-end" @click="displayNav = false">
        <div class="relative w-30px h-30px inline-block">
          <span
            class="bg-white w-37px h-1 inline-block rounded-sm absolute top-0 left-0 origin origin-left-center transform rotate-45"
          />
          <span
            class="bg-white w-37px h-1 inline-block rounded-sm absolute bottom-0 left-0 origin-left-center transform -rotate-45"
          />
        </div>
      </div>
      <ul class="space-y-4 text-lg">
        <NuxtLink to="/" class="triangle-bullet"><li>Inicio</li></NuxtLink>
        <NuxtLink to="/" class="triangle-bullet"
          ><li>Nuestro grupo</li></NuxtLink
        >
        <NuxtLink to="/" class="triangle-bullet"><li>Marcas</li></NuxtLink>
        <NuxtLink to="/" class="triangle-bullet"
          ><li>Descubre EDT</li></NuxtLink
        >
        <NuxtLink to="/quienes-somos" class="triangle-bullet"
          ><li>¿Quiénes somos?</li></NuxtLink
        >
        <li class="triangle-bullet">Export</li>
        <ul class="ml-6 space-y-4">
          <NuxtLink class="triangle-bullet" to="/export"
            ><li>Exportación</li></NuxtLink
          >
          <NuxtLink class="triangle-bullet" to="/private-label"
            ><li>Private Label</li></NuxtLink
          >
        </ul>
        <NuxtLink to="/contact-us" class="triangle-bullet"
          ><li>Contáctanos</li></NuxtLink
        >
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppNavMobile',
  data() {
    return {
      displayNav: false,
    };
  },
});
</script>
