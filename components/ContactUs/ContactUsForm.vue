<template>
  <form @submit.prevent="submitForm">
    <FormInput class="mb-4" name="nombre" placeholder="Nombre:" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <FormSelect name="country" class="mb-4">
        <option value="">País</option>
        <option value="GT">Estados Unidos</option>
        <option value="SV">México</option>
        <option value="US">Puerto Rico</option>
        <option value="US">Cuba</option>
        <option value="US">República Dominicana</option>
      </FormSelect>
      <FormInput class="mb-4" name="telefono" placeholder="Telefono:" />
    </div>
    <FormInput class="mb-4" name="correo" placeholder="Correo:" type="email" />
    <FormTextArea name="mensaje" class="mb-4" placeholder="Mensaje" />
    <div class="flex items-center space-x-2">
      <span class="inline-block flex-2"
        >¿Te gustaría recibir ofertas e información sobre nuestros servicios y
        productos?</span
      >
      <div class="flex-1 flex justify-center items-center">
        <FormRadioButton
          class="mr-4 font-bold uppercase"
          name="accept"
          label="Si"
        />
        <FormRadioButton
          class="mr-4 font-bold uppercase"
          name="accept"
          label="No"
        />
        <FormButton />
      </div>
    </div>
    <ContactUsMessage v-show="formSubmitted" class="mt-4" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import ContactUsMessage from '@/components/ContactUs/ContactUsMessage.vue';
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
    ContactUsMessage,
  },
  data() {
    return {
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
    },
  },
});
</script>
