<template>
  <nav
    class="py-12 px-16 w-screen fixed hidden md:flex items-center justify-between text-white z-10"
    :class="[isOnTopSection ? gradient : blackBanner]"
  >
    <NuxtLink to="/">
      <img
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258472/FAMOSA/Inicio/LOGO_gc7qlk.png"
        class="w-24"
        alt="Famosa Logo"
      />
    </NuxtLink>
    <div>
      <div class="flex justify-end mb-4">
        <span class="mr-2 text-sm">Parte de la familia EDT:</span
        ><img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258470/FAMOSA/Inicio/EDT_aguzfc.png"
          class="w-28"
          alt=""
        />
      </div>
      <ul class="flex">
        <li class="uppercase font-bold mx-2">
          <NuxtLink to="/#about">Acerca de famosa</NuxtLink>
        </li>
        <li class="uppercase font-bold mx-2">
          <NuxtLink to="/#products">Productos</NuxtLink>
        </li>
        <li class="uppercase font-bold mx-2">
          <NuxtLink to="/#prices">Premios</NuxtLink>
        </li>
        <li class="uppercase font-bold mx-2">
          <NuxtLink to="/#where-to-buy">Dónde comprar</NuxtLink>
        </li>
        <li class="uppercase font-bold mx-2">
          <NuxtLink to="/#contact-us">Contáctanos</NuxtLink>
        </li>
        <li class="uppercase font-bold mx-2">
          <span class="cursor-pointer" @click="openSellDialog"
            >¿Quieres vender famosa?</span
          >
        </li>
        <div class="flex">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Inicio/FB_gehi7n.png"
              class="w-4 h-4 mr-2"
              alt=""
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258470/FAMOSA/Inicio/IG_iqmqcx.png"
              class="w-4 h-4"
              alt=""
            />
          </a>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

// @ts-ignore
import DownArrow from '@/assets/img/down-arrow.svg?inline';

export default Vue.extend({
  name: 'AppNav',
  components: {
    DownArrow,
  },
  data() {
    return {
      isSelectorVisible: true,
      observer: {},
    };
  },
  computed: {
    gradient(): string {
      const { path } = this.$route;
      return ['/private-label', '/export'].includes(path)
        ? ''
        : 'bg-gradient-to-b from-black to-transparent';
    },
    blackBanner(): string {
      const { path } = this.$route;
      return ['/', '/quienes-somos'].includes(path)
        ? 'bg-gradient-to-b from-black to-black'
        : '';
    },
    ...mapState(['isOnTopSection']),
  },
  watch: {
    $route() {
      this.isSelectorVisible = false;
    },
  },
  methods: {
    ...mapMutations('dialog', ['openSellDialog']),
  },
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
