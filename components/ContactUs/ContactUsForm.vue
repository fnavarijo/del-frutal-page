<template>
  <form>
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
    <FormInput class="mb-4" name="correo" placeholder="Correo:" type="email" />
    <FormTextArea name="mensaje" class="mb-4" placeholder="Mensaje" />
    <div class="flex space-x-3 items-center">
      <span
        >¿Te gustaría recibir ofertas e información sobre nuestros servicios y
        productos?</span
      >
      <FormRadioButton name="accept" label="Si" />
      <FormRadioButton name="accept" label="No" />
      <FormButton />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import FormInput from '@/components/Form/FormInput.vue';
import FormSelect from '@/components/Form/FormSelect.vue';
import FormButton from '@/components/Form/FormButton.vue';
import FormRadioButton from '@/components/Form/FormRadioButton.vue';

export default Vue.extend({
  name: 'ContactUsForm',
  components: {
    FormInput,
    FormSelect,
    FormButton,
    FormRadioButton,
  },
});
</script>
