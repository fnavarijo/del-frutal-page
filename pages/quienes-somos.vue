<template>
  <div class="text-white">
    <AppSection
      id="who-we-are"
      class="min-h-screen md:min-h-screen-2/3"
      :style="{
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'${require('~/assets/img/background/who-we.jpg')}\')`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <header class="flex flex-col items-center mb-4">
        <!-- <img
          src="~assets/img/edt-simple.png"
          class="w-32 mb-4"
          alt="EDT Logo"
        /> -->
        <h1 class="text-5xl md:text-6xl font-thin title-shadow">
          ¿Quiénes somos?
        </h1>
      </header>
      <p class="text-justify">
        EDT comercializa alimentos y bebidas de clase mundial, dando a nuestros
        clientes una amplia variedad de posibilidades de acuerdo a los
        requerimientos específicos del mercado. Los productos que ofrecemos se
        comercializan en: Estados Unidos, México, el Caribe y Europa, y cumplen
        con los altos estándares de calidad exigidos en esos mercados.
      </p>
    </AppSection>
    <AppSection class="min-h-screen-1/2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="flex flex-col items-center">
          <img class="h-16 w-16 mb-4" src="~assets/img/vision.svg" alt="" />
          <h2 class="text-4xl text-center font-thin mb-8">Visión</h2>
          <p class="text-justify">
            Ser el mejor operador comercial para la exportación de productos de
            los que se nos ha confiado la distribución.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-16 w-16 mb-4" src="~assets/img/mision.svg" alt="" />
          <h2 class="text-4xl text-center font-thin mb-8">Misión</h2>
          <p class="text-justify">
            Crear y desarrollar negocios que contribuyan a crear valor, por
            medio de los productos que distribuimos, tanto en el mercado
            regional como en el mercado internacional, satisfaciendo a nuestros
            clientes y colaboradores.
          </p>
        </div>
      </div>
    </AppSection>
    <AppSection
      class="min-h-screen-2/3"
      :style="{
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'${require('~/assets/img/background/history.jpg')}\')`,
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <header class="mb-16">
        <h2 class="text-4xl uppercase font-thin title-shadow">Historia</h2>
      </header>
      <p class="text-justify">
        En 2004 se consolida EDT (Export Development and Trade), como parte de
        la Corporación Castillo Hermanos bajo la Vicepresidencia de Cadenas de
        Comercio e Internacional. Pasando de exportar 350 mil a 3.5 millones de
        cajas en el último año. Un crecimiento del 1,000% en 14 años
      </p>
    </AppSection>
    <AppSection class="min-h-screen-1/2 text-black" bg-color="white">
      <header>
        <h2 class="text-4xl text-center font-thin text-normal-blue-500">
          Propuesta de Valor
        </h2>
      </header>
      <div>
        <ul class="my-8 grid grid-cols-1 md:grid-cols-3 space-x-4">
          <li class="mb-4 triangle-bullet">
            El desarrollo comercial de las marcas que comercializamos.
          </li>
          <li class="mb-4 triangle-bullet">
            El desarrollo de un portafolio de productos competitivos y de alta
            calidad.
          </li>
          <li class="mb-4 triangle-bullet">El cumplimiento de lo ofrecido.</li>
        </ul>
        <p class="text-justify">
          Nos esforzamos por ser un proveedor de confianza y un importante socio
          comercial de cada uno de nuestros distribuidores. Los productos que
          comercializamos son producidos por fábricas con tecnología de
          vanguardia y estrictos estándares de calidad aplicados a sus procesos
          de desarrollo y producción.
          <br />
          <br />
          Como resultado, tales procesos han sido certificados en el Sistema de
          Gestión de Calidad ISO 9000:2008, ISO 14001:2004 para estándares
          ambientales, OHSAS 18000:2007 para Seguridad Industrial y Salud
          Ocupacional, entre otros.
        </p>
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';

export default Vue.extend({
  components: {
    AppSection,
  },
  data() {
    return {
      isIndexVisible: false,
    };
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

    const target = document.querySelector('#who-we-are');
    observer.observe(target!);
  },
  beforeDestroy() {
    this.$store.commit('setIntersectionFlag', true);
  },
  methods: {
    observerInterception(entries: Array<any>): void {
      const [indexElement] = entries.filter(
        ({ target }) => target.id === 'who-we-are'
      );
      this.isIndexVisible = indexElement.isIntersecting;
      this.$store.commit('setIntersectionFlag', indexElement.isIntersecting);
    },
  },
});
</script>
