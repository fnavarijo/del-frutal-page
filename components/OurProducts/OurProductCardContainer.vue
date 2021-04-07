<template>
  <div class="flex flex-col">
    <div class="flex mb-4">
      <span class="font-light inline-block w-full text-center text-xl"
        >Cervezas y Maltas</span
      >
      <span class="font-light inline-block w-full text-center text-xl"
        >Snacks</span
      >
      <span class="font-light inline-block w-full text-center text-xl"
        >Atoles y Cereales</span
      >
      <span class="font-light inline-block w-full text-center text-xl"
        >Bebidas</span
      >
    </div>
    <div class="flex bg-neutral-gray-200 rounded-3xl">
      <OurProductCard
        image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267416/logos/Famosa_v2ew4a.png"
      />
      <OurProductCard
        image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267439/logos/Se%C3%B1orial_tlayvc.png"
      />
      <OurProductCard
        image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615347996/logos/Logo_bhilnf.png"
      />
      <OurProductCard
        image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267362/logos/Del_frutal_y302jx.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OurProductCardContainer',
});
</script>
