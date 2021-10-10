<template>
  <div class="font-sans relative overflow-hidden">
    <AppNav :class="navBgColor" />
    <AppNavMobile />
    <AppDialog :show-dialog="showSellDialog">
      <SellDialog />
    </AppDialog>
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppNav from '@/components/AppNav.vue';
import AppNavMobile from '@/components/AppNavMobile.vue';
import AppFooter from '@/components/AppFooter.vue';
import AgeDialog from '@/components/Dialog/AgeDialog.vue';
import SellDialog from '@/components/Dialog/SellDialog.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    AppNav,
    AppNavMobile,
    AppFooter,
    AgeDialog,
    SellDialog,
  },
  computed: {
    navBgColor(): string {
      const { path } = this.$route;
      return ['/private-label', '/export'].includes(path)
        ? 'bg-normal-blue-500'
        : '';
    },
    showDialog(): boolean {
      let acceptedTerms = 'false';
      if (process.browser) {
        acceptedTerms = localStorage.getItem('acceptedTerms') || 'false';
      }
      return this.$store.state.dialog.showDialog && acceptedTerms === 'false';
    },
    showSellDialog(): boolean {
      return this.$store.state.dialog.showSellDialog;
    },
  },
  async mounted() {
    this.$store.commit('dialog/openDialog');
    try {
      // @ts-ignore
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },
  beforeDestroy() {
    // @ts-ignore
    this.$recaptcha.destroy();
  },
});
</script>
