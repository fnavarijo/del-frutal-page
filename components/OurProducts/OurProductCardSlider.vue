<template>
  <div>
    <Hooper
      :items-to-show="4"
      style="height: 300px"
      class="focus:outline-none"
      :wheel-control="false"
      :short-drag="false"
      :trim-white-space="true"
    >
      <Slide v-for="(product, index) in products" :key="index">
        <OurProductCard
          :image="product.url"
          class="h-4/5 bg-neutral-gray-200"
          @click="$emit('selected-product', product.brand)"
        />
      </Slide>
      <Navigation slot="hooper-addons">
        <template #hooper-prev>
          <DownArrow class="transform rotate-90 h-4 w-4"
        /></template>
        <template #hooper-next
          ><DownArrow class="transform -rotate-90 h-4 w-4"
        /></template>
      </Navigation>
    </Hooper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import { Hooper, Slide, Navigation } from 'hooper';

import DownArrow from '@/assets/img/down-arrow.svg?inline';
import { ourProducts } from '../../data/our-products-cards';

// @ts-ignore

export default Vue.extend({
  name: 'OurProductCardSlider',
  components: {
    Hooper,
    Slide,
    Navigation,
    DownArrow,
  },
  props: {
    selectedCategory: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      default: () => [],
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
