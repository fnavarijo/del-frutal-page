<template>
  <div class="text-white">
    <AppSection class="min-h-screen-1/2">
      <header>
        <h1 class="text-5xl font-bold">¿Quiénes somos?</h1>
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
    <AppSection class="min-h-screen-1/2 grid grid-cols-1 md:grid-cols-2 gap-20">
      <div class="flex flex-col items-center">
        <img class="h-12 w-12" src="https://vuejs.org/images/logo.png" alt="" />
        <h2 class="text-4xl text-center font-bold mb-12">Visión</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet leo orci. Nulla quis placerat nulla. Phasellus mattis
          consequat lacinia. Morbi venenatis interdum urna, at iaculis urna
          interdum et. Nunc euismod turpis nibh, nec tempor lorem aliquam et.
          Donec nec accumsan orci. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <img class="h-12 w-12" src="https://vuejs.org/images/logo.png" alt="" />
        <h2 class="text-4xl text-center font-bold mb-12">Misión</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet leo orci. Nulla quis placerat nulla. Phasellus mattis
          consequat lacinia. Morbi venenatis interdum urna, at iaculis urna
          interdum et. Nunc euismod turpis nibh, nec tempor lorem aliquam et.
          Donec nec accumsan orci. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
      </div>
    </AppSection>
    <AppSection class="min-h-screen-1/2">
      <header class="mb-16">
        <h2 class="text-5xl uppercase font-bold">Historia</h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet
        leo orci. Nulla quis placerat nulla. Phasellus mattis consequat lacinia.
        Morbi venenatis interdum urna, at iaculis urna interdum et. Nunc euismod
        turpis nibh, nec tempor lorem aliquam et. Donec nec accumsan orci.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </AppSection>
    <AppSection class="min-h-screen-1/2 text-black" bg-color="white">
      <header>
        <h2 class="text-4xl text-center font-bold text-normal-blue-500">
          Propuesta de Valor
        </h2>
      </header>
      <div>
        <ul class="my-8 flex flex-col md:flex-row">
          <li class="mb-4 triangle-bullet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet leo orci.
          </li>
          <li class="mb-4 triangle-bullet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet leo orci.
          </li>
          <li class="mb-4 triangle-bullet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet leo orci.
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet leo orci. Nulla quis placerat nulla. Phasellus mattis
          consequat lacinia. Morbi venenatis interdum urna, at iaculis urna
          interdum et. Nunc euismod turpis nibh, nec tempor lorem aliquam et.
          Donec nec accumsan orci. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Donec dignissim nunc eleifend aliquet auctor. Cras
          consectetur metus ipsum, et fringilla nisl finibus in. Fusce egestas
          lacinia consectetur. Curabitur convallis magna sit amet libero
          placerat, sed porta quam iaculis. Morbi ut enim id velit pharetra
          lacinia molestie eget nisi. Cras finibus bibendum massa, ac accumsan
          metus mattis eu. Donec quis lacus non magna viverra aliquam ut eu
          dolor. Cras vitae nulla dapibus, sagittis nisl eu, pharetra lacus.
          Nunc laoreet nibh non ligula feugiat, sed scelerisque justo tincidunt.
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
