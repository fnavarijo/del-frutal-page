<template>
  <section class="w-screen h-screen">
    <Hooper
      style="height: 100vh"
      :wheel-control="false"
      :infinite-scroll="true"
    >
      <Slide
        class="relative px-8 py-4 w-full flex justify-center items-center bg-60%-cover xl:bg-50%-cover"
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1619481257/FAMOSA/Premios/Botellas_qoru7n.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Inicio/Banner%201/fondo_vj9qxt.jpg\')`,
          backgroundPosition: '5% 0%, top left',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div
          class="grid grid-cols-2 w-full h-full md:max-w-screen-md lg:max-w-screen-lg"
        >
          <div></div>
          <div class="flex flex-col justify-center items-start">
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618591890/FAMOSA/Inicio/Banner%201/Dsitinguida_lvbjxr.svg"
              alt=""
              class="w-full mb-8"
            />
          </div>
        </div>
      </Slide>
      <Slide
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258471/FAMOSA/Inicio/Banner%202/fondo_sghbul.jpg\')`,
          backgroundPosition: 'top left',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }"
        ><img
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258471/FAMOSA/Inicio/Banner%202/fondo_sghbul.jpg"
          class="h-full w-full object-cover"
          alt=""
      /></Slide>
      <Slide
        class="relative px-8 py-4 flex justify-center items-center"
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258477/FAMOSA/Inicio/Banner%203/1-01_a7tngo.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258476/FAMOSA/Inicio/Banner%203/Cerveza_raly4p.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Inicio/Banner%201/fondo_vj9qxt.jpg\')`,
          backgroundPosition: '100% 15%, right bottom, top left',
          backgroundSize: '15%, auto, cover',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="grid grid-cols-2 w-full h-full max-w-screen-xl">
          <div class="flex flex-col justify-center items-start">
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618591893/FAMOSA/Inicio/Banner%201/Premiada-01_ozrn6f.svg"
              alt=""
              class="w-full mb-8"
            />
            <button
              class="uppercase bg-black text- text-2xl text-normal-yellow-500 font-bold p-2"
            >
              Conoce más
            </button>
          </div>
        </div>
      </Slide>
      <Navigation slot="hooper-addons">
        <template #hooper-prev>
          <DownArrow
            class="transform rotate-90 h-10 w-10 fill-current text-white ml-4"
        /></template>
        <template #hooper-next
          ><DownArrow
            class="transform -rotate-90 h-10 w-10 fill-current text-white mr-4"
        /></template>
      </Navigation>
      <HooperPagination slot="hooper-addons" />
    </Hooper>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import {
  Hooper,
  Slide,
  Navigation,
  Pagination as HooperPagination,
  // @ts-ignore
} from 'hooper';

import DownArrow from '@/assets/img/down-arrow.svg?inline';

export default Vue.extend({
  name: 'HomeBannerSlider',
  components: {
    Hooper,
    Slide,
    Navigation,
    DownArrow,
    HooperPagination,
  },
});
</script>

<style>
.hooper-indicator {
  @apply h-2 w-2 rounded-full;
}

.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply bg-neutral-gray-500 opacity-75;
}

.hooper-pagination {
  @apply bottom-8;
}
</style>
