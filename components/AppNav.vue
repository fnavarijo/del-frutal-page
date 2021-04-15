<template>
  <!-- :class="[isSelectorVisible ? gradient : blackBanner]" -->
  <nav
    class="py-12 px-16 w-screen fixed hidden md:flex items-center justify-between text-white z-10"
    :class="[isOnTopSection ? gradient : blackBanner]"
  >
    <NuxtLink to="/">
      <img src="~assets/img/logo-export.png" class="w-56" alt="EDT Logo" />
    </NuxtLink>
    <ul class="flex">
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Acerca de famosa</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/#our-group">Productos</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/#brands">Premios</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/#find-edt">Dónde comprar</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/quienes-somos">Contáctanos</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/contact-us">¿Quieres vender famosa?</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

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
