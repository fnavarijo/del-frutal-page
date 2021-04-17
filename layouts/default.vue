<template>
  <div class="font-sans relative overflow-hidden">
    <AppNav :class="navBgColor" />
    <AppNavMobile />
    <AppDialog :show-dialog="showDialog">
      <AgeDialog />
    </AppDialog>
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import AppNav from '@/components/AppNav.vue';
import AppNavMobile from '@/components/AppNavMobile.vue';
import AppFooter from '@/components/AppFooter.vue';
import AgeDialog from '@/components/Dialog/AgeDialog.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    AppNav,
    AppNavMobile,
    AppFooter,
    AgeDialog,
  },
  computed: {
    navBgColor(): string {
      const { path } = this.$route;
      return ['/private-label', '/export'].includes(path)
        ? 'bg-normal-blue-500'
        : '';
    },
    ...mapState('dialog', ['showDialog']),
  },
  mounted() {
    this.$store.commit('dialog/openDialog');
  },
});
</script>
