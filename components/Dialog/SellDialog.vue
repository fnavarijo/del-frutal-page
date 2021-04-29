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
    <span class="absolute top-8 right-8 cursor-pointer" @click="closeSellDialog"
      ><img src="~/assets/img/cancel.svg" class="w-8 h-8" alt=""
    /></span>
    <h1 class="text-5xl self-start">¿Quieres vender famosa?</h1>
    <ContactUsForm />
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'SellDialog',
  methods: {
    ...mapMutations('dialog', ['closeSellDialog']),
  },
});
</script>
