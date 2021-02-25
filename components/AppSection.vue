<template>
  <section
    class="px-8 py-4 min-h-screen w-full flex flex-col items-center"
    :class="`bg-${bgColor} justify-${justify}`"
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
    justify: {
      type: String,
      default: 'center',
    },
  },
});
</script>
