<template>
  <section
    class="px-8 py-4 min-h-screen w-full flex flex-col justify-center items-center bg-normal-blue-500"
  >
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppSection',
});
</script>
