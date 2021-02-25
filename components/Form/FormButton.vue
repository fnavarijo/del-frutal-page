<template>
  <button
    class="px-4 py-2 text-lg bg-california text-normal-blue-500 font-bold"
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
