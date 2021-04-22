<template>
  <div class="flex flex-col items-center relative cursor-pointer">
    <img :src="imageUrl" class="w-8 mb-2" alt="" />
    <span class="text-sm">
      {{ label }}
    </span>
    <hr
      v-show="isActive"
      class="w-full h-1 border-0 bg-california absolute -bottom-2"
    />
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
