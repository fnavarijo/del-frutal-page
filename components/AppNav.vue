<template>
  <!-- :class="[isSelectorVisible ? gradient : blackBanner]" -->
  <nav
    class="py-12 px-16 w-screen fixed hidden md:flex items-center justify-between text-white z-10"
    :class="[gradient]"
  >
    <NuxtLink to="/">
      <img src="~assets/img/logo-export.png" class="w-56" alt="EDT Logo" />
    </NuxtLink>
    <ul class="flex">
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/">Inicio</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/#our-group">Nuestro Grupo</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/#brands">Marcas</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/#find-edt">Descubre EDT</NuxtLink>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/quienes-somos">¿Quienes somos?</NuxtLink>
      </li>
      <li class="uppercase relative font-bold mx-2 group">
        <span>Export</span>
        <ul class="absolute invisible group-hover:visible">
          <NuxtLink to="/export">
            <li
              class="mb-1 p-1 uppercase bg-white opacity-75 border text-black text-sm whitespace-no-wrap sub-link"
            >
              Exportacion
            </li>
          </NuxtLink>
          <NuxtLink to="/private-label">
            <li
              class="mb-1 p-1 uppercase bg-white opacity-75 border text-black text-sm whitespace-no-wrap sub-link"
            >
              Private label
            </li>
          </NuxtLink>
        </ul>
      </li>
      <li class="uppercase font-bold mx-2">
        <NuxtLink to="/contact-us">Contáctenos</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppNav',
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
      return 'bg-gradient-to-b from-black to-black';
    },
  },
  watch: {
    $route() {
      this.isSelectorVisible = false;
      // this.setObserverOnRoutes(['index', 'quienes-somos']);
    },
  },
  // mounted() {
  //   const options = {
  //     rootMargin: '0px',
  //     threshold: 0.9,
  //   };
  //   this.observer = new IntersectionObserver(
  //     this.observerInterception,
  //     options
  //   );

  //   this.setObserverOnRoutes(['index', 'quienes-somos']);
  // },
  methods: {
    // setObserverOnRoutes(routes: Array<string>): void {
    //   const { name } = this.$route;
    //   if (routes.includes(name!)) {
    //     const selector = name! === 'index' ? '#index' : '#who-we-are';
    //     console.log('Selector', selector);
    //     const target = document.querySelector(selector);
    //     // @ts-ignore
    //     this.observer.observe(target!);
    //   }
    // },
    // observerInterception(entries: Array<any>): void {
    //   const [indexElement] = entries.filter(
    //     ({ target }) => target.id === 'index' || target.id === 'who-we-are'
    //   );
    //   this.isSelectorVisible = indexElement.isIntersecting;
    // },
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
