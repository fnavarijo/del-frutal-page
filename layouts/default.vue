<template>
  <div>
    <AppNav />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    AppNav,
    AppFooter,
  },
});
</script>
