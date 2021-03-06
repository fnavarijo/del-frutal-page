<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    @click="$emit('click')"
  >
    <circle r="5" cx="5" cy="5" fill="currentcolor" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ScrollerDot',
});
</script>
