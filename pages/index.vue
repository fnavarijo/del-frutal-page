<template>
  <div class="text-white relative">
    <AppSection
      :style="{
        background: `url(\'${require('~/assets/img/background/home-header.jpg')}\')`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
      class="relative"
    >
      <h1
        class="text-5xl md:text-6xl mb-8 text-center font-black leading-14 title-shadow"
      >
        Generamos valor<br />
        a tus Negocios
      </h1>
      <span class="p-4 uppercase bg-california rounded-md font-bold">
        Exporta con nosotros
      </span>
      <DownArrow
        class="fill-current text-white absolute bottom-6 m-auto w-8 h-8 animate-bounce"
      />
    </AppSection>
    <a id="our-group" class="block relative -top-250 invisible" />
    <AppSection class="min-h-screen-1/2">
      <header class="w-full mb-24 relative flex items-center justify-center">
        <hr class="w-full h-1 bg-white absolute top-1/2" />
        <h2
          class="px-4 md:px-8 text-2xl md:text-4xl relative capitalize inline-block bg-normal-blue-500"
        >
          Nuestro Grupo
        </h2>
      </header>
      <div class="grid grid-cols-2 md:grid-cols-8 gap-4">
        <OurGroupItem
          v-for="(item, index) in ourGroupItems"
          :key="index"
          v-bind="item"
        />
      </div>
    </AppSection>
    <a id="brands" class="block relative -top-16 invisible" />
    <AppSection
      bg-color="white"
      class="text-normal-blue-500 min-h-screen-1/2 my-8"
      max-content="xl:max-w-screen-xl"
    >
      <header class="text-center">
        <h2 class="text-5xl">Nuestras <strong>Marcas</strong></h2>
      </header>
      <OurProductsTabs />
    </AppSection>
    <AppSection
      class="min-h-screen-1/2 grid grid-cols-2"
      :style="{
        background: `url(\'${require('~/assets/img/background/development-trade.jpg')}\')`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div>
        <header class="mb-4">
          <img class="h-16 mb-2" src="~assets/img/edt-simple.png" alt="" />
          <h2 class="font-bold text-xl">Export Development and Trade</h2>
        </header>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
            diam, tempus a diam id, rutrum ullamcorper dolor. Vestibulum
            malesuada elit in turpis tincidunt rutrum. Aliquam finibus ante
            enim, at scelerisque quam faucibus sed. In nec urna lorem. Proin
            pulvinar eros vitae purus ullamcorper scelerisque. Sed eu tristique
            est. Phasellus sodales turpis ut consectetur luctus. Donec convallis
            est a odio ultricies varius. Mauris id tortor ipsum. Mauris porta
            massa augue, sit amet imperdiet ipsum consequat eu. Quisque quis
            ipsum tempus, accumsan leo efficitur, maximus sapien. Nullam a
            ligula non elit interdum efficitur.
          </p>
        </div>
      </div>
    </AppSection>
    <a id="find-edt" class="block relative -top-250 invisible" />
    <AppSection
      class="grid grid-cols-2 min-h-screen-1/2"
      :style="{
        background: `url(\'${require('~/assets/img/background/map.png')}\') #0f2646`,
        backgroundPosition: 'right 10% center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div>
        <header>
          <h2 class="text-6xl font-bold">Descubre EDT</h2>
        </header>
        <ul>
          <li class="text-2xl font-bold triangle-bullet">
            <span>Estados Unidos</span>
          </li>
          <ul class="ml-4 text-base font-normal">
            <li>Arizona</li>
            <li>California</li>
            <li>Delawere</li>
            <li>Florida</li>
            <li>Georgia</li>
            <li>Illinois</li>
            <li>Maryland</li>
            <li>Massachusetts</li>
            <li>New Jersey</li>
            <li>Nuevo York</li>
            <li>Tennessee</li>
            <li>Texas</li>
          </ul>
          <li class="text-2xl font-bold triangle-bullet">
            <span>México</span>
          </li>
          <li class="text-2xl font-bold triangle-bullet">
            <span>Puerto Rico</span>
          </li>
          <li class="text-2xl font-bold triangle-bullet">
            <span>Cuba</span>
          </li>
          <li class="text-2xl font-bold triangle-bullet">
            <span>República Dominicana</span>
          </li>
        </ul>
      </div>
    </AppSection>
    <AppSection>
      <div class="relative pt-16-9ratio h-0 w-full">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7wtfhZwyrcc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';
import OurGroupItem from '@/components/OurGroup/OurGroupItem.vue';
import OurProductsTabs from '@/components/OurProducts/OurProductsTabs.vue';

// @ts-ignore
import DownArrow from '@/assets/img/down-arrow.svg?inline';

export default Vue.extend({
  name: 'Index',
  components: {
    AppSection,
    OurGroupItem,
    DownArrow,
    OurProductsTabs,
  },
  computed: {
    ourGroupItems(): Array<any> {
      return [
        {
          img: 'statistics.png',
          value: '17',
          name: 'Estados en USA',
        },
        {
          img: 'worldwide.png',
          value: '10',
          name: 'Países',
        },
        {
          img: 'teamwork.png',
          value: '+10,000',
          name: 'Colaboradores',
        },
        {
          img: 'delivery-truck.png',
          value: '75',
          name: 'Distribuidores en USA',
        },
        {
          img: 'vote.png',
          value: '+100',
          name: 'Productos',
        },
        {
          img: 'package.png',
          value: '15',
          name: 'Marcas',
        },
        {
          img: 'shop.png',
          value: '+ 15.Mill',
          name: 'De puntos de venta',
        },
        {
          img: 'factory.png',
          value: '+20',
          name: 'Plantas',
        },
      ];
    },
  },
});
</script>
