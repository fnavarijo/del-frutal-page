<template>
  <AppSection class="text-white">
    <header class="mb-4">
      <h1 class="text-4xl font-bold">Comunícate con Nosotros</h1>
    </header>
    <ContactUsForm class="w-full md:w-1/2 mb-8" />
    <div class="grid grid-cols-4 gap-4">
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
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';

import ContactUsForm from '@/components/ContactUs/ContactUsForm.vue';
import LocationInfo from '@/components/LocationInfo.vue';

export default Vue.extend({
  name: 'ContactUs',
  components: {
    LocationInfo,
    ContactUsForm,
  },
});
</script>
