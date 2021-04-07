<template>
  <div class="grid grid-cols-6">
    <OurProductCard
      v-for="(product, index) in selectedProducts"
      :key="index"
      :image="product.url"
      @click="$emit('selected-product', product.brand)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { ourProducts } from '../../data/our-products-cards';

export default Vue.extend({
  name: 'OurProductCardSlider',
  props: {
    selectedCategory: {
      type: String,
      required: true,
    },
  },
  computed: {
    selectedProducts() {
      return ourProducts.filter(
        (item: any) => item.type === this.selectedCategory
      );
    },
  },
});
</script>
