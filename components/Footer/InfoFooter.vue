<template>
  <div class="flex items-center mx-auto">
    <img :src="imageUrl" class="w-5 h-5 mr-2" alt="" />
    <span class="font-bold inline-block"><slot /></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InfoFooter',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
});
</script>
