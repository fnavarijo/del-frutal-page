<template>
  <div class="bg-white relative inline-block rounded-md py-1 px-2">
    <img
      src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Home/Gallo_clk24h.png"
      class="w-10 h-10 absolute -left-2 -top-2"
      alt=""
    />
    <span class="text-dark-red-500 inline-block ml-6">
      <strong>¡Gracias por enviar tu mensaje!</strong>
      Te estaremos contactando muy pronto.
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactUsMessage',
});
</script>
