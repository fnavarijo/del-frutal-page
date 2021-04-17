<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center"
    :style="{
      backgroundImage:
        'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258468/FAMOSA/Home/LANDING-FAMOSA_qrcquc.jpg\')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <img
      src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258341/FAMOSA/Home/Guate_wpxj5r.png"
      class="absolute top-0 right-0"
      alt=""
    />
    <p class="absolute top-8 left-8 w-1/3 text-white">
      (C) 2019, Famosa Lager Beer©, Miami. By submitting this form you agree to
      be bound by the Terms of Service and Privacy.
    </p>
    <div class="relative">
      <img
        src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Home/Gallo_clk24h.png"
        class="w-64 absolute -top-48 left-0 right-0 mx-auto"
        alt=""
      />
      <h1 class="font-bold text-white text-6xl">¿Tienes 21 años o más?</h1>
    </div>
    <div class="flex space-x-4">
      <button
        class="bg-white bg-opacity-10 text-white text-2xl uppercase px-4 py-2"
      >
        Si
      </button>
      <button
        class="bg-white bg-opacity-10 text-white text-2xl uppercase px-4 py-2"
      >
        No
      </button>
    </div>
    <div class="text-white mt-8">
      <span>He leído y acepto las políticas de privacidad y cookies.</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AgeDialog',
});
</script>
