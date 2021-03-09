<template>
  <div class="flex flex-col items-center">
    <div class="mb-8">
      <span v-for="(img, index) in images" :key="index">
        <img v-show="selectedStep === index" :src="img" class="w-64" alt="" />
      </span>
    </div>
    <div class="w-1/2">
      <ScrollerHandler
        :steps="images.length - 1"
        :name="name"
        @select-step="updateSelectedStep"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import ScrollerHandler from '@/components/Scroller/ScrollerHandler.vue';

export default Vue.extend({
  name: 'OurProductCarousel',
  components: {
    ScrollerHandler,
  },
  props: {
    images: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    name: {
      type: String,
      required: true,
    },
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
