<template>
  <div class="bg-white relative inline-block rounded-md py-1 px-2">
    <img
      src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1633966903/DEL%20FRUTAL/Garrita_onikp5.png"
      class="w-10 h-10 absolute -left-2 -top-2"
      alt=""
    />
    <span class="text-dark-red-500 inline-block ml-6">
      <slot>
        <strong>¡Gracias por enviar tu mensaje!</strong>
        Te estaremos contactando muy pronto.
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactUsMessage',
});
</script>
