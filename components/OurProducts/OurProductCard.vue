<template>
  <div class="flex flex-col items-center justify-center p-8 relative">
    <img class="w-40 h-40 object-contain" :src="image" alt="" />
    <button
      class="bg-normal-blue-500 text-white font-bold py-2 px-8 rounded-xl absolute -bottom-4"
      @click="$emit('click')"
    >
      Ver más
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OurProductCard',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
});
</script>
