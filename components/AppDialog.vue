<template>
  <div v-show="showDialog" class="h-screen w-screen z-50 fixed">
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
