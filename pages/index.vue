<template>
  <div id="index-container" class="text-white relative">
    <AppSection
      id="index"
      :style="{
        background: `url(\'${require('~/assets/img/background/home-header.jpg')}\')`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
      class="relative"
    >
      <h1>Premiada la mejor cerveza</h1>
    </AppSection>
    <a id="our-group" class="block relative -top-250 invisible" />
    <AppSection
      class="min-h-screen"
      max-content="md:max-w-screen-xl"
      :style="{
        background: `url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258341/FAMOSA/Acerca%20de/fondo_fapbpg.jpg')`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="flex flex-col justify-center items-center md:items-start space-y-4"
        >
          <img
            src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258472/FAMOSA/Inicio/LOGO_gc7qlk.png"
            alt=""
            class="w-56"
          />
          <h2 class="text-4xl font-bold">Acerca de Famosa</h2>
          <p class="text-justify">
            FAMOSA, fórmula de excelencia con historia de más de 125 años.
            Creada en 1,896 bajo el maestro cervecero de origen alemán, German
            Spitz, que ha llegado a Estados Unidos y otros países del mundo a
            conquistar los corazones y el paladar de los latinos. Una cerveza
            lager clara con contenido alcohólico de 5.0%. Con cuerpo definido,
            aroma acelerado y una fórmula reconocida por sus notas amargas y
            herbáceas provenientes del lúpulo; con sabor prolongado.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618465031/FAMOSA/Acerca%20de/pack_gxwnmh.png"
            alt=""
          />
        </div>
      </div>
    </AppSection>
    <a id="brands" class="block relative -top-16 invisible" />
    <AppSection
      bg-color="white"
      class="text-normal-blue-500 min-h-screen-2/3 my-8"
      max-content="xl:max-w-screen-xl"
      inner-container-class="w-full"
    >
      <div>Presetaciones</div>
    </AppSection>
    <AppSection
      class="min-h-screen-1/2 grid grid-cols-2"
      :style="{
        background: `url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258477/FAMOSA/Premios/1/fondo_qk5uxh.jpg')`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div>
        <img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258480/FAMOSA/Premios/1/frase_k9bk38.svg"
          alt=""
        />
      </div>
    </AppSection>
    <AppSection
      class="min-h-screen-2/3 grid grid-cols-2"
      :style="{
        backgroundImage: `url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258470/FAMOSA/Donde%20comprar/fondo_lgqvdc.jpg')`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div>
        <h2 class="text-4xl font-bold mb-8">Dónde comprar</h2>
        <ul>
          <span class="font-bold triangle-bullet text-xl"
            >Puntos de venta en Estados Unidos:</span
          >
          <li class="ml-6">California</li>
          <li class="ml-6">New Jersey</li>
          <li class="ml-6">Georgia</li>
          <li class="ml-6">New York</li>
          <li class="ml-6">Texas</li>
          <li class="ml-6">Florida</li>
          <li class="ml-6">Illinois</li>
          <li class="ml-6">Maryland</li>
          <li class="ml-6">Virginia</li>
          <li class="ml-6">Alabama</li>
          <li class="ml-6">Tennessee</li>
          <li class="ml-6">Massachusetts</li>
          <li class="ml-6">Washington</li>
          <li class="ml-6">Oklahoma</li>
        </ul>
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    AppSection,
  },
  data() {
    return {
      isIndexVisible: false,
    };
  },
  async fetch() {
    await this.$store.dispatch('products/fetchProducts', 'beer');
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(
      this.observerInterception,
      options
    );

    const target = document.querySelector('#index');
    observer.observe(target!);
  },
  beforeDestroy() {
    this.$store.commit('setIntersectionFlag', true);
  },
  methods: {
    observerInterception(entries: Array<any>): void {
      const [indexElement] = entries.filter(
        ({ target }) => target.id === 'index'
      );
      this.isIndexVisible = indexElement.isIntersecting;
      this.$store.commit('setIntersectionFlag', indexElement.isIntersecting);
    },
  },
});
</script>
