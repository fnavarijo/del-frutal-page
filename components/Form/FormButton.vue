<template>
  <button
    class="darken px-4 py-2 text-lg bg-california text-normal-blue-500 font-bold"
  >
    <slot>Enviar</slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormButton',
});
</script>

<style scoped>
.darken:hover {
  filter: brightness(85%);
  transition: filter 0.3s ease-in;
}
</style>
