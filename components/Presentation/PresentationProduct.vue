<template>
  <div class="flex flex-col">
    <img :src="image" alt="" />
    <button
      class="uppercase bg-green-700 text-white font-bold text-xl md:text-4xl rounded-lg"
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
