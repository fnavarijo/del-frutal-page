<template>
  <div id="index-container" class="text-white relative">
    <div id="index" class="absolute top-8">
      <!-- Hacky element to intercept with top -->
    </div>
    <!-- <AppSection
      id="index"
      :style="{
        backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258477/FAMOSA/Inicio/Banner%203/1-01_a7tngo.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258476/FAMOSA/Inicio/Banner%203/Cerveza_raly4p.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Inicio/Banner%201/fondo_vj9qxt.jpg\')`,
        backgroundPosition: 'top right, right bottom, top left',
        backgroundSize: '15%, auto, cover',
        backgroundRepeat: 'no-repeat',
      }"
      class="relative"
      max-content="md:max-w-screen-xl"
      inner-container-class="w-full grid grid-cols-2"
    >
      <div>
        <img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618591893/FAMOSA/Inicio/Banner%201/Premiada-01_ozrn6f.svg"
          alt=""
          class="w-full mb-8"
        />
        <button
          class="uppercase bg-black text- text-2xl text-normal-yellow-500 font-bold p-2"
        >
          Conoce más
        </button>
      </div>
    </AppSection> -->
    <HomeBannerSlider />
    <a id="about" class="block relative top-0 md:-top-20 invisible" />
    <AppSection
      class="min-h-screen"
      max-content="md:max-w-screen-xl"
      justify="start"
      justify-responsive="md:justify-center"
      :style="{
        backgroundImage:
          'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190402/DEL%20FRUTAL/Frutas_ho2xw5.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190389/DEL%20FRUTAL/Banner_4_qzzvko.png\')',
        backgroundPosition: 'bottom right, top left',
        backgroundSize: '40%, cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="flex flex-col justify-center items-center md:items-start space-y-4"
        >
          <img
            src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1626187491/DEL%20FRUTAL/logo_pnf2wv.png"
            alt=""
            class="w-56"
          />
          <h2 class="text-4xl font-bold">Acerca de Del Frutal</h2>
          <p class="text-justify">
            Del Frutal es un néctar 100% natural, sin preservantes y sin colorantes artificiales, viene en sus presentaciones de lata 330ml, Tetra 200ml y Tetra 1 litro. Actualmente, en los sabores de manzana, melocotón, piña, pera, mango, banano-fresa, guayaba y mango maracuyá.
            <br />
            <br />
            Del Frutal se ha caracterizado por ser una marca líder, con los más altos estándares de calidad en la producción de sus productos. Es una marca innovadora que busca estar al nivel de sus consumidores, y prueba de ello su reciente lanzamiento de la nueva imagen desde Agosto 2009, con un giro jovial y atractivo.
          </p>
        </div>
      </div>
    </AppSection>
    <a id="products" class="block relative md:-top-12 2xl:top-0 invisible" />
    <HomeSectionPresentations />
    <a id="where-to-buy" class="block relative -top-8 md:-top-56 invisible" />
    <OurLocations />
    <a id="contact-us" class="block relative top-0 md:-top-16 invisible" />
    <AppSection
      :style="{
        backgroundImage:
          'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190403/DEL%20FRUTAL/Banner_contacto_lz1muv.png\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
      }"
    >
      <header class="w-full mb-4">
        <h2 class="text-5xl font-bold">Comunícate con nosotros:</h2>
      </header>
      <ContactUsForm />
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
