<template>
  <AppSection
    :style="{
      backgroundImage:
        'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190392/DEL%20FRUTAL/Banner_5_n8mfe2.png\')',
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
    }"
    inner-container-class="w-full text-normal-brown-500"
    max-content=""
  >
    <div class="grid grid-cols-1 md:grid-cols-1">
      <div class="m-auto">
        <img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190390/DEL%20FRUTAL/El_nectar_para_tu_dia_vju4kc.png"
          alt=""
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <PresentationProduct
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190376/DEL%20FRUTAL/caja_dpsjrv.png"
          class="w-1/2 m-auto"
          product-name="caja"
          @selected-product="selectedProduct"
        />
        <PresentationProduct
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190378/DEL%20FRUTAL/lata_i8ybxz.png"
          class="w-1/2 m-auto"
          product-name="lata"
          @selected-product="selectedProduct"
        />
        <PresentationProduct
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190379/DEL%20FRUTAL/Litro_v8qjig.png"
          class="w-1/2 m-auto"
          product-name="litro"
          @selected-product="selectedProduct"
        />
      </div>
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeSectionPresentations',
  data() {
    return {
      selectedPresentation: 0,
    };
  },
  computed: {
    presentationsImages() {
      return [
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1620918952/FAMOSA/5_bglzie.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1620918957/FAMOSA/4_lwa2lu.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1620918953/FAMOSA/3_jnh9t8.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1620918955/FAMOSA/2_nksbhp.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1620918955/FAMOSA/1_nravn6.png',
      ];
    },
  },
  methods: {
    setSelectedPresentation(index: number) {
      this.selectedPresentation = index;
    },
    selectedProduct(product = '') {
      this.$emit('selected-product', product);
    },
  },
});
</script>
