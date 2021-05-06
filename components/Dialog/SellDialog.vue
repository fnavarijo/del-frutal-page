<template>
  <AppSection
    class="font-sans h-screen w-screen p-4 flex flex-col justify-center items-center text-white relative"
    :style="{
      backgroundImage:
        'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258468/FAMOSA/Contacto/fondo_ckx7cm.jpg\')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <span
      class="absolute top-8 right-8 cursor-pointer z-30"
      @click="closeDialog"
      ><img src="~/assets/img/cancel.svg" class="w-8 h-8" alt=""
    /></span>
    <h1 class="text-5xl self-start">¿Quieres vender famosa?</h1>
    <ContactUsForm :handle-submit-message="false" @submit="showThanksMessage" />
    <div v-show="showThanks" class="h-screen w-screen absolute top-0 thanks-bg">
      <div
        class="p-8 bg-white text-dark-red-700 flex flex-col items-center rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
      >
        <img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258344/FAMOSA/Home/Gallo_arrctz.png"
          class="w-24 h-24 absolute -top-16"
          alt=""
        />
        <span class="font-bold text-lg">¡Gracias por enviar tu mensaje!</span>
        <span>Te estaremos contactando muy pronto.</span>
      </div>
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'SellDialog',
  data() {
    return {
      showThanks: false,
    };
  },
  beforeDestroy() {
    this.showThanks = false;
  },
  methods: {
    ...mapMutations('dialog', ['closeSellDialog']),
    showThanksMessage() {
      this.showThanks = true;
    },
    closeDialog() {
      this.$store.commit('dialog/closeSellDialog');
      this.showThanks = false;
    },
  },
});
</script>

<style scoped>
.thanks-bg::after {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.95;
  background-image: url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258580/FAMOSA/Quieres%20Vender/Fondo-agradecimiento_b9o5k5.jpg');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
</style>
