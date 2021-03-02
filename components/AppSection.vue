<template>
  <section
    class="px-8 py-4 min-h-screen w-full relative flex flex-col"
    :class="`bg-${bgColor} justify-${justify} items-${items}`"
  >
    <div
      class="flex flex-col justify-center items-center md:max-w-screen-md lg:max-w-screen-lg"
    >
      <slot />
    </div>
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
