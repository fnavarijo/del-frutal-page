<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col justify-center">
      <img class="w-56 mb-8" :src="brand.logo" alt="" />
      <p v-if="!showExtraDescription">
        {{ brand.description }}
      </p>
      <p v-else>
        {{ brand['description-multicereal'] }}
      </p>
      <div v-if="showSocial" class="flex">
        <FbIcon class="w-16 h-16" />
        <IgIcon class="w-16 h-16" />
        <WebIcon class="w-16 h-16" />
      </div>
    </div>
    <div class="flex items-center justify-center relative">
      <OurProductCarousel
        :name="brand.name || ''"
        :images="getProductImages(brand.products)"
        @selected-presentation="setPresentation"
      />
      <div v-show="presentation" class="absolute bottom-0 right-0">
        {{ presentation }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import OurProductCarousel from '@/components/OurProducts/OurProductCarousel.vue';
// @ts-ignore
import FbIcon from '@/assets/img/fb.svg?inline';
// @ts-ignore
import IgIcon from '@/assets/img/ig.svg?inline';
// @ts-ignore
import WebIcon from '@/assets/img/web.svg?inline';

import { ourBrands } from '@/data/our-brands';

export default Vue.extend({
  name: 'OurProducts',
  components: {
    OurProductCarousel,
    FbIcon,
    IgIcon,
    WebIcon,
  },
  props: {
    selectedBrand: {
      type: String,
      required: true,
    },
    showSocial: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      presentation: '',
      showExtraDescription: false,
    };
  },
  computed: {
    brand(): any {
      return ourBrands[this.selectedBrand] || {};
    },
  },
  methods: {
    setPresentation(index: number): void {
      const presentation = this.brand.products[index].presentation || '';
      this.presentation = presentation;
      this.showExtraDescription = presentation.includes('Multicereal');
    },
    getProductImages(products: Array<any>): Array<string> {
      return products.map(({ url }: { url: string }) => url);
    },
  },
});
</script>
