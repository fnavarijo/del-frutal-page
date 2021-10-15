<template>
  <div class="w-24 md:w-24 relative flex items-end">
    <div
      class="absolute w-24 md:w-24 h-24 md:h-24 rounded-full bg-gray-300 opacity-50 bottom-0"
    ></div>
    <img class="relative z-10" :src="image" alt="" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PresentationFruits',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
});
</script>
