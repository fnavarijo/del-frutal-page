<template>
  <div class="text-white">
    <AppSection>
      <header class="mb-8">
        <h1 class="text-5xl font-bold text-center">Export</h1>
        <h2 class="text-3xl font-bold text-center">
          Asesoría en Mercados Internacionales
        </h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet
        leo orci. Nulla quis placerat nulla. Phasellus mattis consequat lacinia.
        Morbi venenatis interdum urna, at iaculis urna interdum et. Nunc euismod
        turpis nibh, nec tempor lorem aliquam et. Donec nec accumsan orci.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        dignissim nunc eleifend aliquet auctor. Cras consectetur metus ipsum, et
        fringilla nisl finibus in. Fusce egestas lacinia consectetur. Curabitur
        convallis magna sit amet libero placerat, sed porta quam iaculis. Morbi
        ut enim id velit pharetra lacinia molestie eget nisi. Cras finibus
        bibendum massa, ac accumsan metus mattis eu. Donec quis lacus non magna
        viverra aliquam ut eu dolor. Cras vitae nulla dapibus, sagittis nisl eu,
        pharetra lacus. Nunc laoreet nibh non ligula feugiat, sed scelerisque
        justo tincidunt.
      </p>
    </AppSection>
    <AppSection bg-color="white" class="text-black">
      <header>
        <h2 class="mb-8 text-4xl text-normal-blue-500 font-bold text-left">
          Capacidad para exportar a Mercados Internacionales
        </h2>
      </header>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet leo orci. Nulla quis placerat nulla. Phasellus mattis
          consequat lacinia.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet leo orci. Nulla quis placerat nulla. Phasellus mattis
          consequat lacinia.
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
