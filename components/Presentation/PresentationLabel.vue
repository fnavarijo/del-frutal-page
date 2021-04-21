<template>
  <div class="flex flex-col items-center">
    <img :src="imageUrl" class="w-8" alt="" /><span class="text-sm">{{
      label
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PresentationLabel',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
