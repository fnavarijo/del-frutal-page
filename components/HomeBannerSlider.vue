<template>
  <section class="w-screen h-screen-2/3 md:h-screen">
    <Hooper :wheel-control="false" :infinite-scroll="true">
      <Slide
        class="relative px-8 py-4 flex justify-center items-center bg-medal-sm-alignment md:bg-medal-md-alignment"
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190404/DEL%20FRUTAL/Vive_al_Natural_tmbjjx.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190402/DEL%20FRUTAL/Banner_1_r4dhdz.png\')`,
          backgroundSize: 'contain, cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center, left top',
        }"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 w-full h-full max-w-screen-xl p-4"
        >
          <div></div>
          <div
            class="flex flex-col justify-start md:justify-center items-end md:items-start pt-1/4 md:pt-0"
          >
            <img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190403/DEL%20FRUTAL/Productos_ttjod3.png"
              alt=""
              class="w-3/5 md:w-full mb-2 md:mb-8"
            />
          </div>
        </div>
      </Slide>
      <Slide
        class="relative px-8 py-4 w-full flex justify-center items-center bg-60%-cover xl:bg-50%-cover bg-custom-center-banner md:bg-custom-top-left-banner"
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190384/DEL%20FRUTAL/Banner_2_frase_doywaq.png\'), url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190397/DEL%20FRUTAL/Banner_2_h7n0ft.png\')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center, left top',
        }"
      />
      <Slide
        :style="{
          backgroundImage: `url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1626187493/DEL%20FRUTAL/BANNER_-_2_bvfxol.jpg\')`,
          backgroundPosition: 'top left',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }"
      />

      <Navigation slot="hooper-addons">
        <template #hooper-prev>
          <DownArrow
            class="hidden md:block transform rotate-90 h-10 w-10 fill-current text-white ml-4"
        /></template>
        <template #hooper-next class=""
          ><DownArrow
            class="hidden md:block transform -rotate-90 h-10 w-10 fill-current text-white mr-4"
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
.hooper {
  @apply h-screen-2/3;
}

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

/* stylelint-disable */
@screen md {
  .hooper {
    @apply h-screen;
  }
}
</style>
