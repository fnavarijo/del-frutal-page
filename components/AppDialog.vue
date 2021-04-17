<template>
  <div v-show="showDialog" class="h-screen w-screen absolute z-50">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppDialog',
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
