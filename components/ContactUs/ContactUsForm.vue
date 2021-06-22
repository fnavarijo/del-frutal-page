<template>
  <ValidationObserver v-slot="{ handleSubmit }" ref="form">
    <form @submit.prevent="handleSubmit(submitForm)">
      <FormInput
        v-model="contact.name"
        class="mb-4"
        name="nombre"
        placeholder="Nombre:"
        rules="required|alpha_spaces"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <FormSelect
          v-model="contact.country"
          name="country"
          class="mb-4"
          rules="required"
        >
          <option value="">País</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="PR">Puerto Rico</option>
          <option value="CU">Cuba</option>
          <option value="RD">República Dominicana</option>
        </FormSelect>
        <FormInput
          v-model="contact.phone"
          class="mb-4"
          name="telefono"
          placeholder="Teléfono:"
          rules="required"
        />
      </div>
      <FormInput
        v-model="contact.email"
        class="mb-4"
        name="correo"
        placeholder="Correo:"
        type="email"
        rules="required"
      />
      <FormTextArea
        v-model="contact.message"
        name="mensaje"
        class="mb-4"
        placeholder="Mensaje"
        rules="required"
      />
      <div class="flex items-center space-x-2">
        <span class="inline-block flex-2"
          >¿Te gustaría recibir ofertas e información sobre nuestros servicios y
          productos?</span
        >
        <div class="flex-1 flex justify-center items-center">
          <FormRadioButton
            v-model="contact.receiveNotifications"
            class="mr-4 font-bold uppercase"
            name="accept"
            label="Si"
            value="si"
          />
          <FormRadioButton
            v-model="contact.receiveNotifications"
            class="mr-4 font-bold uppercase"
            name="accept"
            label="No"
            value="no"
          />
          <FormButton type="submit" />
        </div>
      </div>
      <ContactUsMessage
        v-show="formSubmitted && handleSubmitMessage"
        class="mt-4"
      />
      <ContactUsMessage v-show="hasError" class="mt-4"
        >¡Algo ocurrio! Intentalo de nuevo.</ContactUsMessage
      >
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationObserver } from 'vee-validate';

import ContactUsMessage from '@/components/ContactUs/ContactUsMessage.vue';
import FormInput from '@/components/Form/FormInput.vue';
import FormSelect from '@/components/Form/FormSelect.vue';
import FormButton from '@/components/Form/FormButton.vue';
import FormRadioButton from '@/components/Form/FormRadioButton.vue';
import { sendEmail } from '@/api/sendEmail';

export default Vue.extend({
  name: 'ContactUsForm',
  components: {
    FormInput,
    FormSelect,
    FormButton,
    FormRadioButton,
    ContactUsMessage,
    ValidationObserver,
  },
  props: {
    handleSubmitMessage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        email: '',
        message: '',
        country: '',
        receiveNotifications: '',
      },
      formSubmitted: false,
      hasError: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        // @ts-ignore
        await this.$recaptcha.execute('login');
        await sendEmail(this.validateFields(this.contact));

        this.formSubmitted = true;
        this.$emit('submit');

        setInterval(this.clearSubmitedMessage, 10000);
      } catch (err) {
        this.hasError = true;
        setInterval(this.clearErrorMessage, 10000);
      } finally {
        this.clearForm();
        // @ts-ignore
        this.$refs.form.reset();
      }
    },
    validateFields(fields: { [key: string]: any }): { [key: string]: any } {
      return Object.entries(fields).reduce(
        (dictionary, [key, value]) => ({
          ...dictionary,
          // @ts-ignore
          [key]: this.$sanitize(value),
        }),
        {}
      );
    },
    clearSubmitedMessage() {
      this.formSubmitted = false;
    },
    clearErrorMessage() {
      this.hasError = false;
    },
    clearForm() {
      this.contact = {
        name: '',
        phone: '',
        email: '',
        message: '',
        country: '',
        receiveNotifications: '',
      };
    },
  },
});
</script>
