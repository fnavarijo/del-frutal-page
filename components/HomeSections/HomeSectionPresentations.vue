<template>
  <AppSection
    :style="{
      backgroundImage:
        'url(\'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258429/FAMOSA/Producto/fonod_ypz1jp.jpg\')',
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
    }"
    inner-container-class="w-full text-normal-brown-500"
    max-content=""
  >
    <div class="grid grid-cols-3">
      <div>
        <h2 class="text-3xl font-bold mb-4">Presentaciones</h2>
        <p>
          <strong>Famosa Lager Beer:</strong> Cerveza tipo lager de cuerpo
          espumoso persistente en el vaso. Su sabor es acentuado y definido por
          un amargo especial provenietne del lúpulo, con un contendio alcohólico
          del 5%.
          <br />
          Tiene un sabor y calidad incomparable, un tono dorado oscuro y su
          espuma clara y estable.
        </p>
        <div class="flex items-end">
          <PresentationLabel
            v-for="(presentation, index) in presentationsLabels"
            :key="index"
            v-bind="presentation"
            class="mx-2"
          />
        </div>
      </div>
      <div></div>
      <div>
        <p class="mb-8">
          <strong>Armonización:</strong> Quesos, comida oriental, comida
          latinoamericana, especialmente con salsas picantes, carnes rojas a la
          parilla acompañada de aderezos y salsas.
        </p>
        <div>
          <div class="grid grid-cols-2 mb-4">
            <span class="font-bold flex items-center">Categoria</span
            ><img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258564/FAMOSA/Producto/categoria_xjlah2.svg"
              alt=""
              class="w-12"
            />
          </div>
          <div class="grid grid-cols-2 mb-4">
            <span class="font-bold flex items-center">Contenido de Alcohol</span
            ><img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258570/FAMOSA/Producto/Contenido_de_alcohol_i843qr.svg"
              alt=""
              class="w-12"
            />
          </div>
          <div class="grid grid-cols-2 mb-4">
            <span class="font-bold flex items-center">Temperatura ideal</span
            ><img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258525/FAMOSA/Producto/temperatura_zlardn.svg"
              alt=""
              class="w-12"
            />
          </div>
          <div class="grid grid-cols-2 mb-4">
            <span class="font-bold flex items-center">IBUs</span
            ><img
              src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258521/FAMOSA/Producto/IBUs_zrkaki.svg"
              alt=""
              class="w-12"
            />
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeSectionPresentations',
  computed: {
    presentationsLabels() {
      return [
        {
          label: '12 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258523/FAMOSA/Producto/12_oz_bakrr8.svg',
        },
        {
          label: '16 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258566/FAMOSA/Producto/16_oz_nz5mze.svg',
        },
        {
          label: '24 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258565/FAMOSA/Producto/24oz_e4zqtl.svg',
        },
        {
          label: '12 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258576/FAMOSA/Producto/12oz_d1t7bg.svg',
        },
        {
          label: '32 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258576/FAMOSA/Producto/32oz_i7v8vf.svg',
        },
      ];
    },
  },
});
</script>
