<template>
  <section
    class="px-8 py-4 min-h-screen w-full flex flex-col relative"
    :class="`bg-${bgColor} justify-${justify} items-${items}`"
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
    items: {
      type: String,
      default: 'center',
    },
  },
});
</script>
