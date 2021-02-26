<template>
  <footer class="text-white">
    <div
      v-if="shouldDisplayUpper"
      class="py-4 px-8 bg-dark-blue-800 flex flex-col md:flex-row"
    >
      <div
        class="space-y-3 border-r-0 md:border-r border-white pr-0 md:pr-8 mb-6 md:mb-0"
      >
        <LocationInfo
          country="Estados unidos"
          address="EDT USA Corporation, Miami FI."
          phone="(305) 415-9944, (305) 415-9966"
          fax="(305) 415-9955"
        />
        <LocationInfo
          country="República Dominicana"
          address="Distribuidora EDT República Dominicana"
          phone="(305) 415-9966"
        />
        <LocationInfo
          country="Guatemala"
          address="EDT, Desarrollo de Exportaciones y Comercio S.A."
          phone="(502) 2289-1666"
        />
        <LocationInfo
          country="México"
          address="Comercializadora Chiapaneca, S.A. de C.V"
          phone="(52) 962-62-83665"
        />
      </div>
      <div class="ml-0 md:ml-8">
        <h3 class="text-2xl font-bold">Comunícate con nosotros:</h3>
        <ContactUsForm />
      </div>
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
