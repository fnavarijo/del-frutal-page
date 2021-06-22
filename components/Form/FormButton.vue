<template>
  <button
    :type="type"
    class="darken px-4 py-2 text-lg bg-black text-white font-bold"
  >
    <slot>Enviar</slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
});
</script>

<style scoped>
.darken:hover {
  filter: brightness(85%);
  transition: filter 0.3s ease-in;
}
</style>
