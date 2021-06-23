<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center p-4"
    :style="{
      background:
        'no-repeat url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258468/FAMOSA/Home/LANDING-FAMOSA_qrcquc.jpg\'), linear-gradient(90deg, rgba(36,36,36,0.9) 0%, rgba(36,36,36,0.9) 100%)',
      backgroundSize: 'cover, cover',
    }"
  >
    <img
      src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258341/FAMOSA/Home/Guate_wpxj5r.png"
      class="absolute top-0 right-0"
      alt=""
    />
    <p
      class="absolute bottom-8 md:top-8 left-8 w-2/4 md:w-1/3 text-white text-sm md:text-base"
    >
      (C) 2019, Famosa Lager Beer©, Miami. By submitting this form you agree to
      be bound by the Terms of Service and Privacy.
    </p>
    <div class="relative">
      <img
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Home/Gallo_clk24h.png"
        class="w-40 md:w-64 absolute -top-32 md:-top-48 left-0 right-0 mx-auto"
        alt=""
      />
      <h1 class="font-bold text-white text-3xl md:text-6xl">
        ¿Tienes 21 años o más?
      </h1>
    </div>
    <div class="flex flex-col justify-center items-center space-x-4">
      <div class="flex space-x-4">
        <button
          class="bg-white bg-opacity-10 text-white text-2xl uppercase px-4 py-2"
          @click="acceptTerms"
        >
          Si
        </button>
        <button
          class="bg-white bg-opacity-10 text-white text-2xl uppercase px-4 py-2"
        >
          No
        </button>
      </div>
      <div v-show="showTermsAlert" class="text-white mt-4">
        Debes aceptar los términos y condiciones
      </div>
    </div>
    <div class="text-white mt-8 flex items-center px-8">
      <FormRadioButton
        v-model="areTermsAccepted"
        class="mr-4"
        name="accept-terms-conditions"
        value="accept"
      />
      <span>He leído y acepto las políticas de privacidad y cookies.</span>
    </div>
    <div class="text-sm text-blue-600 underline">
      <a href="#">Políticas de privacidad y cookies</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'AgeDialog',
  data() {
    return {
      areTermsAccepted: '',
      showTermsAlert: false,
    };
  },
  methods: {
    ...mapMutations('dialog', ['closeDialog']),
    acceptTerms() {
      if (this.areTermsAccepted !== '') {
        localStorage.setItem('acceptedTerms', 'true');
        this.$store.commit('dialog/closeDialog');
        window.scrollTo(0, 0);
        return;
      }
      this.showTermsAlert = true;
    },
  },
});
</script>
