<template>
  <div
    class="md:hidden absolute p-4 w-full flex justify-between items-center top-0 z-20"
  >
    <NuxtLink to="/">
      <img
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258472/FAMOSA/Inicio/LOGO_gc7qlk.png"
        class="w-20"
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
        <NuxtLink
          to="/"
          class="triangle-bullet"
          @click.native="displayNav = false"
          ><li>Inicio</li></NuxtLink
        >
        <NuxtLink
          to="/#about"
          class="triangle-bullet"
          @click.native="displayNav = false"
          ><li>Acerca de famosa</li></NuxtLink
        >
        <NuxtLink
          to="/#products"
          class="triangle-bullet"
          @click.native="displayNav = false"
          ><li>Productos</li></NuxtLink
        >
        <NuxtLink
          to="/#prices"
          class="triangle-bullet"
          @click.native="displayNav = false"
          ><li>Premios</li></NuxtLink
        >
        <NuxtLink
          to="/#where-to-buy"
          class="triangle-bullet"
          @click.native="displayNav = false"
          ><li>Dónde comprar</li></NuxtLink
        >
        <NuxtLink
          to="/#contact-us"
          class="triangle-bullet"
          @click.native="displayNav = false"
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
