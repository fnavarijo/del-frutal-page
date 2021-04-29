<template>
  <AppSection
    class="h-screen w-screen p-4 flex flex-col justify-center items-center text-white"
    :style="{
      backgroundImage:
        'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258468/FAMOSA/Contacto/fondo_ckx7cm.jpg\')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <h1 class="text-5xl self-start">¿Quieres vender famosa?</h1>
    <ContactUsForm />
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactUs',
});
</script>
