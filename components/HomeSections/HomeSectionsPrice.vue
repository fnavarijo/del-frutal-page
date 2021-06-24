<template>
  <AppSection
    class="min-h-screen-1/2"
    inner-container-class="w-full"
    max-content="max-w-screen-lg"
    :style="{
      backgroundImage: background.image,
      backgroundPosition: background.position,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div v-show="!arePricesShown" class="grid grid-cols-2 w-full">
      <div class="block md:hidden"></div>
      <div class="flex flex-col justify-start items-end md:items-start">
        <img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1619483907/FAMOSA/Premios/premio-01_b9tntt.png"
          alt=""
        />
        <button
          class="bg-black uppercase inline-block font-bold text-xl md:text-2xl py-1 px-2 text-normal-yellow-500 mt-4"
          @click="showPrices"
        >
          Ver todos
        </button>
      </div>
    </div>
    <div v-show="arePricesShown">
      <img
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258483/FAMOSA/Premios/2/premios_hxvrzd.png"
        alt=""
        class="mx-auto w-full"
      />
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeSectionsPrice',
  data() {
    return {
      arePricesShown: false,
    };
  },
  computed: {
    background(): any {
      const backgroundDecorationImage = !this.arePricesShown
        ? "url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258479/FAMOSA/Premios/1/cerveza_d7ij45.png'),"
        : '';
      const backgroundDecorationPosition = !this.arePricesShown ? 'right,' : '';
      return {
        image: `${backgroundDecorationImage} url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258477/FAMOSA/Premios/1/fondo_qk5uxh.jpg')`,
        position: `${backgroundDecorationPosition} top left`,
      };
    },
  },
  methods: {
    showPrices() {
      this.arePricesShown = true;
    },
  },
});
</script>
