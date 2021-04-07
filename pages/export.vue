<template>
  <div class="text-white">
    <AppSection
      :style="{
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'${require('~/assets/img/background/export.jpg')}\') no-repeat left/cover`,
      }"
    >
      <header class="mb-8">
        <h1 class="text-4xl md:text-6xl font-thin text-center">
          Exportación de Marcas Propias
        </h1>
        <h2 class="text-xl md:text-3xl font-bold text-center">
          Asesoría en Mercados Internacionales
        </h2>
      </header>
      <p>
        La creación de productos a escala internacional, requiere una serie
        pasos previos para planificar desde la creación de la marca, hasta la
        puesta en el mercado escogido para comercializarlo, así como el
        seguimiento y el apoyo necesario para que la marca tenga éxito.
        <br /><br />
        Nosotros podemos asesorarte a lo largo de todo este proceso, que incluye
        la formulación del producto, para que cumpla con los más altos
        estándares de excelencia y calidad mundial. También la implementación de
        costos competitivos a escala mundial y por supuesto, diseño de marca y
        empaque.
      </p>
    </AppSection>
    <AppSection
      bg-color="white"
      items="start"
      class="px-4 md:px-32 min-h-screen-1/2 text-black"
      :style="{
        background: `url(\'${require('~/assets/img/background/export-map.jpg')}\') no-repeat left/cover`,
      }"
    >
      <header class="w-full">
        <h2
          class="mb-8 text-3xl md:text-5xl text-normal-blue-500 font-bold text-left leading-none"
        >
          Capacidad para exportar a<br />
          Mercados Internacionales
        </h2>
      </header>
      <div>
        <p>
          Actualmente, exportamos nuestros productos desde Centroamérica a
          diferentes partes del mundo, incluyendo:
        </p>
        <ul class="mb-8">
          <li class="line-bullet font-bold">Norteamérica</li>
          <li class="line-bullet font-bold">Sudamérica</li>
          <li class="line-bullet font-bold">Europa</li>
          <li class="line-bullet font-bold">Asia</li>
          <li class="line-bullet font-bold">Africa</li>
          <li class="line-bullet font-bold">Australia</li>
        </ul>
        <p>
          Sin embargo, tenemos la capacidad para cubrir cualquier país que el
          cliente requiera.
        </p>
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';

export default Vue.extend({
  components: {
    AppSection,
  },
});
</script>

<style scoped>
.line-bullet {
  @apply relative flex items-center;
}

.line-bullet::before {
  content: '';

  @apply w-4 h-1 absolute -left-6 bg-california;
}
</style>
