<template>
  <div
    v-if="steps > 0"
    class="flex items-center text-neutral-gray-500 relative"
  >
    <div class="h-1 w-full bg-neutral-gray-500" />
    <ScrollerDot
      v-for="(dot, index) in dots"
      :key="index"
      class="w-4 absolute cursor-pointer"
      :style="{ left: `${index * positions}%` }"
      @click="updateStep(index)"
    />
    <ScrollerSelectedDot
      class="w-8 absolute text-dark-blue-700 transition-all linear duration-200 transform -translate-x-1/4"
      :style="{ left: `${thumbPosition}%` }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ScrollerDot from '@/components/Scroller/ScrollerDot.vue';
import ScrollerSelectedDot from '@/components/Scroller/ScrollerSelectedDot.vue';

export default Vue.extend({
  name: 'ScrollerHandler',
  components: {
    ScrollerDot,
    ScrollerSelectedDot,
  },
  props: {
    steps: {
      type: Number,
      default: 2,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      thumbPosition: 0,
    };
  },
  computed: {
    dots(): Array<number> {
      return new Array(this.steps + 1).fill(0);
    },
    positions(): number {
      return 100 / this.steps;
    },
  },
  watch: {
    name() {
      if (this.name !== '') {
        this.thumbPosition = 0;
        this.$emit('select-step', 0);
      }
    },
  },
  methods: {
    getDotPosition(index: number): number {
      return index * this.positions;
    },
    updateStep(index: number): void {
      this.thumbPosition = this.getDotPosition(index);
      this.$emit('select-step', index);
    },
  },
});
</script>
