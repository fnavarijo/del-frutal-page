<template>
  <div class="flex flex-col">
    <img :src="image" alt="" />
    <button
      class="uppercase bg-green-700 text-white font-bold text-xl md:text-xl 2xl:text-2xl rounded-lg mt-4 px-4 py-2"
      @click="$emit('selected-product', productName)"
    >
      Mostrar más
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
  },
});
</script>
