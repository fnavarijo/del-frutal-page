<template>
  <div>
    <HomeSectionPresentations
      v-if="!selectedProduct"
      @selected-product="setSelectedProduct"
    />
    <HomeSectionProduct
      v-else
      :product-name="selectedProductName"
      @return="selectedProduct = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeProducts',
  data() {
    return {
      selectedProduct: false,
      selectedProductName: '',
    };
  },
  methods: {
    setSelectedProduct(productName = '') {
      this.selectedProduct = true;
      this.selectedProductName = productName;
    },
  },
});
</script>
