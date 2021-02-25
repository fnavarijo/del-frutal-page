<template>
  <div class="text-white">
    <AppSection
      :style="{
        background: `url(\'${require('~/assets/img/background/home-header.jpg')}\')`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
      }"
    >
      <h1 class="text-5xl mb-4 text-center">Generamos valor a tus Negocios</h1>
      <span class="p-4 uppercase bg-california rounded-md">
        Exporta con nosotros
      </span>
    </AppSection>
    <AppSection class="min-h-screen-1/2">
      <header class="w-full mb-32 relative flex items-center justify-center">
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
    <AppSection class="min-h-screen-1/2 grid grid-cols-2">
      <div>
        <header class="mb-4">
          <img
            class="h-16 mb-2"
            src="https://vuejs.org/images/logo.png"
            alt=""
          />
          <h2 class="font-bold text-lg">Export Development and Trade</h2>
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
    <AppSection class="grid grid-cols-2">
      <div>
        <header>
          <h2 class="text-6xl font-bold">Descubre EDT</h2>
        </header>
        <ul>
          <li class="text-2xl font-bold triangle-bullet">
            <span>Estados Unidos</span>
          </li>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';
import OurGroupItem from '@/components/OurGroup/OurGroupItem.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    AppSection,
    OurGroupItem,
  },
  computed: {
    ourGroupItems(): Array<any> {
      return [
        {
          img: 'statistics.svg',
          value: '17',
          name: 'Estados en USA',
        },
        {
          img: 'statistics.svg',
          value: '10',
          name: 'Países',
        },
        {
          img: 'statistics.svg',
          value: '+10,000',
          name: 'Colaboradores',
        },
        {
          img: 'statistics.svg',
          value: '75',
          name: 'Distribuidores en USA',
        },
        {
          img: 'statistics.svg',
          value: '+100',
          name: 'Productos',
        },
        {
          img: 'statistics.svg',
          value: '15',
          name: 'Marcas',
        },
        {
          img: 'statistics.svg',
          value: '+ 15.Mill',
          name: 'De puntos de venta',
        },
        {
          img: 'statistics.svg',
          value: '+20',
          name: 'Plantas',
        },
      ];
    },
  },
});
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
