<template>
  <div>
    <AppSection bg-color="white">
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-dark-blue-700">
          Servicios de Maquila y Desarrollo de Productos
        </h1>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center justify-center">
          <img
            class="h-24 w-24"
            src="https://vuejs.org/images/logo.png"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          egestas augue. Pellentesque sed viverra quam, non dapibus mi. Maecenas
          sollicitudin bibendum sapien in ultrices. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Mauris posuere magna vel elit auctor, nec
          tempus libero pretium. Maecenas enim lacus, pharetra nec risus vitae,
          malesuada sodales orci. Fusce placerat pulvinar libero eget iaculis.
          <br />
          Aliquam nec velit id metus sagittis dignissim. Praesent elementum
          sagittis nisl, sit amet accumsan turpis convallis nec. Nullam in
          tellus bibendum, varius magna vitae, interdum est. Praesent non tempor
          tellus. Nunc arcu ipsum, vehicula vitae dictum ut, maximus ut erat.
          Etiam interdum scelerisque leo pulvinar faucibus. Vivamus tempor
          turpis quis ex dictum lobortis. Praesent lobortis in sapien ac
          faucibus.
          <br />
          Morbi ut dui tincidunt, mollis orci sit amet, pulvinar tortor. Integer
          dignissim imperdiet viverra. Etiam arcu eros, fringilla in iaculis sit
          amet, eleifend eget felis. Nunc non diam tempor, tristique enim id,
          imperdiet neque.
        </p>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-dark-blue-700">
          Servicios Integrales
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          egestas augue. Pellentesque sed viverra quam, non dapibus mi. Maecenas
          sollicitudin bibendum sapien in ultrices. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Mauris posuere magna vel elit auctor, nec
          tempus libero pretium.
        </p>
      </div>
    </AppSection>
    <AppSection class="min-h-screen-1/2 text-white" justify="start">
      <header class="mb-8">
        <h2 class="text-4xl font-bold">Beneficios</h2>
      </header>
      <ol class="benefits-list">
        <li class="mb-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li class="my-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li class="my-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li class="my-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li class="my-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li class="my-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li class="my-3 benefits-list__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </ol>
    </AppSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';

export default Vue.extend({
  name: 'PrivateLabel',
  components: {
    AppSection,
  },
});
</script>

<style scoped>
.benefits-list {
  counter-reset: benefits-item;
  column-count: 2;
}

.benefits-list__item::before {
  counter-increment: benefits-item;
  content: counter(benefits-item);

  @apply mr-2;
}
</style>
