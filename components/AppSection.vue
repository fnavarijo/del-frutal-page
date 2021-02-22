<template>
  <section
    class="px-8 py-4 min-h-screen w-full flex flex-col justify-center items-center"
    :class="`bg-${bgColor}`"
  >
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppSection',
  props: {
    bgColor: {
      type: String,
      default: 'normal-blue-500',
    },
  },
});
</script>
