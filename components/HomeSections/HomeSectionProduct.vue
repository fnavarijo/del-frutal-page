<template>
  <AppSection
    :style="{
      backgroundImage:
        'url(https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190389/DEL%20FRUTAL/Banner_4_qzzvko.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
    max-content="max-w-screen-xl"
    class="relative"
    inner-container-class="w-full"
  >
    <header class="flex items-center justify-center mb-8 md:mb-0 mt-4 md:mt-2">
      <h2 class="text-4xl md:text-6xl mr-4 ml-8 md:ml-0">Tetra pack</h2>
      <img
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1633966903/DEL%20FRUTAL/Garrita_onikp5.png"
        alt=""
        class="w-10 md:w-16"
      />
    </header>
    <div
      class="grid grid-cols-1 md:grid-cols-product items-center justify-items-center"
    >
      <div class="w-32 md:w-56 mt-full">
        <img :src="productImage" alt="" class="w-full" />
      </div>
      <div class="space-y-4">
        <h3 class="font-bold text-xl">Néctar de manzana</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          congue, diam et vulputate maximus, neque quam efficitur nunc, et
          commodo eros nunc sit amet velit. Quisque ac porta lorem, id elementum
          leo. Cras vitae arcu efficitur, laoreet tortor aliquam, tempor eros.
          Suspendisse tincidunt sed massa eget blandit.
        </p>
        <hr :style="{ borderTop: 'dashed 1px' }" />
        <p>
          <span class="font-bold">Ingredientes:</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aliquam congue, diam et vulputate
          maximus, neque quam efficitur nunc, et commodo eros nunc sit amet
          velit. Quisque ac porta lorem, id elementum leo. Cras vitae arcu
          efficitur, laoreet tortor aliquam, tempor eros. Suspendisse tincidunt
          sed massa eget blandit.
        </p>
        <hr :style="{ borderTop: 'dashed 1px' }" />
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          congue, diam et vulputate maximus, neque quam efficitur nunc, et
          commodo eros nunc sit amet velit. Quisque ac porta lorem, id elementum
          leo. Cras vitae arcu efficitur, laoreet tortor aliquam, tempor eros.
          Suspendisse tincidunt sed massa eget blandit.
        </p>
      </div>
      <div></div>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-9 gap-2 grid-rows-5 md:grid-rows-1 justify-items-center items-center md:items-end mt-10 w-full"
    >
      <PresentationFruits
        v-for="(fruitImage, index) in fruits"
        :key="index"
        :image="fruitImage"
      />
    </div>
    <div class="cursor-pointer" @click="$emit('return')">
      <img
        src="~/assets/img/down-arrow.svg"
        class="transform rotate-90 w-8 md:w-10 absolute left-4 top-8 md:top-1/2"
        alt=""
      />
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeSectionProduct',
  props: {
    productName: {
      type: String,
      required: true,
    },
  },
  computed: {
    fruits() {
      return [
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259181/DEL%20FRUTAL/Pera-01_ki1eax.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259238/DEL%20FRUTAL/durazno-01_zgch64.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259372/DEL%20FRUTAL/manzana-01_vciv24.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259734/DEL%20FRUTAL/mango_acpe02.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259809/DEL%20FRUTAL/pi%C3%B1a-01_c0b532.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259856/DEL%20FRUTAL/naranja-01-01_lrcqem.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634259946/DEL%20FRUTAL/limon_nn4jq5.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634260126/DEL%20FRUTAL/mango_pedazos_zaug4p.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1634260162/DEL%20FRUTAL/Banano_y_fresa-01-01_bgtd11.png',
      ];
    },
    productImage(): String {
      const productImages: { [key: string]: string } = {
        caja:
          'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190376/DEL%20FRUTAL/caja_dpsjrv.png',
        lata:
          'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190378/DEL%20FRUTAL/lata_i8ybxz.png',
        litro:
          'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190379/DEL%20FRUTAL/Litro_v8qjig.png',
      };

      return productImages[this.productName];
    },
  },
});
</script>
