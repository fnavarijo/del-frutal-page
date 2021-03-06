<template>
  <div class="flex flex-col items-center">
    <div class="mb-8">
      <img
        v-show="selectedStep === 0"
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1614403399/products/Revive_smnmgq.png"
        class="w-64"
        alt=""
      />
      <img
        v-show="selectedStep === 1"
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1614403395/products/Incaparina_Vainilla_xmbx1a.png"
        class="w-64"
        alt=""
      />
      <img
        v-show="selectedStep === 2"
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1614403387/products/Dorada_Ice_csj8nj.png"
        class="w-64"
        alt=""
      />
      <img
        v-show="selectedStep === 3"
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1614403387/products/Cranaval_rtiugg.png"
        class="w-64"
        alt=""
      />
    </div>
    <div class="w-1/2">
      <ScrollerHandler :steps="3" @select-step="updateSelectedStep" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ScrollerHandler from '@/components/Scroller/ScrollerHandler.vue';

export default Vue.extend({
  name: 'OurProductCarousel',
  components: {
    ScrollerHandler,
  },
  data() {
    return {
      selectedStep: 0,
    };
  },
  methods: {
    updateSelectedStep(step: number): void {
      this.selectedStep = step;
    },
  },
});
</script>
