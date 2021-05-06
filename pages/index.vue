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
    <a id="about" class="block relative invisible" />
    <AppSection
      class="min-h-screen"
      max-content="md:max-w-screen-xl"
      :style="{
        backgroundImage:
          'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618465031/FAMOSA/Acerca%20de/pack_gxwnmh.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258341/FAMOSA/Acerca%20de/fondo_fapbpg.jpg\')',
        backgroundPosition: '90% 100%, top left',
        backgroundSize: '40%, cover',
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
      </div>
    </AppSection>
    <a id="products" class="block relative -top-16 invisible" />
    <HomeSectionPresentations />
    <a id="prices" class="block relative -top-64 invisible" />
    <HomeSectionsPrice />
    <a id="where-to-buy" class="block relative -top-64 invisible" />
    <OurLocations />
    <a id="contact-us" class="block relative -top-16 invisible" />
    <AppSection
      :style="{
        backgroundImage:
          'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258350/FAMOSA/Contacto/fondo_odrdy3.jpg\')',
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
