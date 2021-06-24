<template>
  <section class="w-screen h-screen">
    <Hooper
      style="height: 100vh"
      :wheel-control="false"
      :infinite-scroll="true"
    >
      <Slide
        class="relative px-8 py-4 flex justify-center items-center bg-medal-sm-alignment md:bg-medal-md-alignment"
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258477/FAMOSA/Inicio/Banner%203/1-01_a7tngo.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258476/FAMOSA/Inicio/Banner%203/Cerveza_raly4p.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Inicio/Banner%201/fondo_vj9qxt.jpg\')`,
          backgroundSize: '15%, auto, cover',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 w-full h-full max-w-screen-xl p-4"
        >
          <div
            class="flex flex-col justify-start md:justify-center items-end md:items-start pt-1/4 md:pt-0"
          >
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1620858343/FAMOSA/Frase_nueva-01_f7j2jg.svg"
              alt=""
              class="w-3/5 md:w-full mb-2 md:mb-8"
            />
            <NuxtLink
              class="uppercase bg-black text-2xl text-normal-yellow-500 font-bold p-2"
              to="/#about"
            >
              Conoce más
            </NuxtLink>
          </div>
        </div>
      </Slide>
      <Slide
        class="relative px-8 py-4 w-full flex justify-center items-center bg-60%-cover xl:bg-50%-cover bg-custom-center-banner md:bg-custom-top-left-banner"
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1619481257/FAMOSA/Premios/Botellas_qoru7n.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258469/FAMOSA/Inicio/Banner%201/fondo_vj9qxt.jpg\')`,
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 w-full h-full md:max-w-screen-md lg:max-w-screen-lg p-4"
        >
          <div class="hidden md:block"></div>
          <div
            class="flex flex-col justify-center items-center md:items-start pb-12 md:pb-0 pt-24 md:pt-0"
          >
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618591890/FAMOSA/Inicio/Banner%201/Dsitinguida_lvbjxr.svg"
              alt=""
              class="w-3/5 md:w-full mb-8"
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
          src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1620919051/FAMOSA/Gente_runtde.png"
          class="h-full w-full object-cover"
          alt=""
      /></Slide>

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
