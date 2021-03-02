<template>
  <div class="font-sans relative">
    <AppNav :class="navBgColor" />
    <AppNavMobile />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppNav from '@/components/AppNav.vue';
import AppNavMobile from '@/components/AppNavMobile.vue';
import AppFooter from '@/components/AppFooter.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    AppNav,
    AppNavMobile,
    AppFooter,
  },
  computed: {
    navBgColor(): string {
      const { path } = this.$route;
      return ['/private-label', '/export'].includes(path)
        ? 'bg-normal-blue-500'
        : '';
    },
  },
});
</script>
