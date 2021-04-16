<template>
  <footer class="text-white">
    <div class="py-4 px-8 grid grid-cols-3 bg-black text-white">
      <span class="font-bold inline-block mx-auto"
        >(305) 415-9944, (305) 415-9966</span
      >
      <span class="font-bold inline-block mx-auto"
        >customerservice@edtexport.com</span
      >
      <span class="font-bold inline-block mx-auto"
        >EDT USA Corporation, Miami FI.</span
      >
    </div>
    <div
      class="py-4 px-8 bg-dark-blue-900 text-center border-t border-dark-blue-200"
    >
      <span>
        Copyright © 2019 Export Development & Trade. Todos los derechos
        reservados.
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

import ContactUsForm from '@/components/ContactUs/ContactUsForm.vue';
import LocationInfo from '@/components/LocationInfo.vue';

export default Vue.extend({
  components: {
    LocationInfo,
    ContactUsForm,
  },
  computed: {
    shouldDisplayUpper(): boolean {
      return this.$route.path === '/';
    },
  },
});
</script>
