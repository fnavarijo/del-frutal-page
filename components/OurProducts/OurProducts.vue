<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col justify-center">
      <img class="w-56 mb-8" :src="brand.logo" alt="" />
      <p>
        {{ brand.description }}
      </p>
    </div>
    <div>
      <OurProductCarousel />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import OurProductCarousel from '@/components/OurProducts/OurProductCarousel.vue';

import { ourBrands } from '@/data/our-brands';

export default Vue.extend({
  name: 'OurProducts',
  components: {
    OurProductCarousel,
  },
  props: {
    selectedBrand: {
      type: String,
      required: true,
    },
  },
  computed: {
    brand(): any {
      return ourBrands[this.selectedBrand] || {};
    },
  },
});
</script>
