<template>
  <AppSection class="text-white">
    <header class="mb-4">
      <h1 class="text-4xl font-bold">Comunícate con Nosotros</h1>
    </header>
    <form class="w-full md:w-1/2 mb-8">
      <FormInput class="mb-4" name="nombre" placeholder="Nombre:" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <FormSelect name="country" class="mb-4">
          <option value="">País</option>
          <option value="GT">Guatemala</option>
          <option value="SV">El Salvador</option>
          <option value="US">Estados Unidos</option>
        </FormSelect>
        <FormInput class="mb-4" name="telefono" placeholder="Telefono:" />
      </div>
      <FormInput
        class="mb-4"
        name="correo"
        placeholder="Correo:"
        type="email"
      />
      <FormTextArea name="mensaje" class="mb-4" placeholder="Mensaje" />
      <div class="flex">
        <span
          >¿Te gustaría recibir ofertas e información sobre nuestros servicios y
          productos?</span
        >
      </div>
      <FormButton />
    </form>
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

import FormInput from '@/components/Form/FormInput.vue';
import FormSelect from '@/components/Form/FormSelect.vue';
import FormButton from '@/components/Form/FormButton.vue';
import LocationInfo from '@/components/LocationInfo.vue';

export default Vue.extend({
  name: 'ContactUs',
  components: {
    FormInput,
    FormSelect,
    FormButton,
    LocationInfo,
  },
});
</script>
