<template>
  <div class="flex flex-col items-center relative cursor-pointer">
    <div
      class="w-8 mb-2 fill-current text-green-600 presentation-icon"
      :class="{ 'selected-icon': isActive }"
      alt=""
      v-html="require(`~/assets/img/presentations/${imageName}.svg?raw`)"
    />
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
    imageName: {
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

<style>
.selected-icon path {
  @apply fill-current text-dark-red-300;
}
</style>
