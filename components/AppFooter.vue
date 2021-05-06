<template>
  <footer class="text-white">
    <div
      class="py-4 px-8 grid gap-4 grid-cols-1 md:gap-1 md:grid-cols-3 bg-dark-red-600"
    >
      <InfoFooter
        image-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1620077455/FAMOSA/3_wqyqgj.png"
      >
        (305) 415-9944, (305) 415-9966
      </InfoFooter>
      <InfoFooter
        image-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1620077455/FAMOSA/2_bilga6.png"
      >
        customerservice@edtexport.com
      </InfoFooter>
      <InfoFooter
        image-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1620077455/FAMOSA/1_cgepys.png"
      >
        EDT USA Corporation, Miami FI.
      </InfoFooter>
    </div>
    <div class="py-4 px-8 bg-dark-red-700 text-center">
      <span> © 2019 Export Development & Trade </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

import InfoFooter from '@/components/Footer/InfoFooter.vue';

export default Vue.extend({
  components: {
    InfoFooter,
  },
  computed: {
    shouldDisplayUpper(): boolean {
      return this.$route.path === '/';
    },
  },
});
</script>
