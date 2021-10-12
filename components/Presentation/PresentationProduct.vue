<template>
  <div class="flex flex-col">
    <img :src="image" alt="" />
    <button
      class="uppercase bg-green-700 text-white font-bold text-xl md:text-4xl 2xl:text-3xl rounded-lg mt-4 px-4 py-2"
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
  },
});
</script>
