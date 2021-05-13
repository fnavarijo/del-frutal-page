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
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="flex flex-col justify-center text-justify">
        <h2 class="text-4xl font-bold mb-4">Presentaciones</h2>
        <p class="mb-8">
          <strong>Famosa Lager Beer:</strong> Cerveza tipo lager de cuerpo
          espumoso persistente en el vaso. Su sabor es acentuado y definido por
          un amargo especial provenietne del lúpulo, con un contendio alcohólico
          del 5%.
          <br />
          <br />
          Tiene un sabor y calidad incomparable, un tono dorado oscuro y su
          espuma clara y estable.
        </p>
        <PresentationLabelContainer
          @presentation-selected="setSelectedPresentation"
        />
      </div>
      <div class="w-1/2 pt-2-ratio relative h-0 overflow-hidden mx-auto">
        <img
          :src="presentationsImages[selectedPresentation]"
          class="w-full h-full absolute top-0 left-0 px-12 mx-auto object-contain"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center">
        <p class="mb-8 text-justify">
          <strong>Armonización:</strong> Quesos, comida oriental, comida
          latinoamericana, especialmente con salsas picantes, carnes rojas a la
          parilla acompañada de aderezos y salsas.
        </p>
        <div class="flex flex-col items-end mb-4">
          <span class="font-bold text-lg mr-1">Color</span>
          <img
            src="https://res.cloudinary.com/dxsslqd7f/image/upload/v1619069241/FAMOSA/Producto/color_ilvkuu_he8ujw.png"
            alt=""
            class="w-2/3"
          />
        </div>
        <div class="space-y-8">
          <PresentationCharacteristic
            icon-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258564/FAMOSA/Producto/categoria_xjlah2.svg"
            title="Categoria"
            subtitle="Larger Beer"
          />
          <PresentationCharacteristic
            icon-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258570/FAMOSA/Producto/Contenido_de_alcohol_i843qr.svg"
            title="Contenido de alcohol"
            subtitle="5%"
          />
          <PresentationCharacteristic
            icon-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258525/FAMOSA/Producto/temperatura_zlardn.svg"
            title="Temperatura ideal"
            subtitle="0-3° C"
          />
          <PresentationCharacteristic
            icon-url="https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258521/FAMOSA/Producto/IBUs_zrkaki.svg"
            title="IBUs"
            subtitle="10"
          />
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeSectionPresentations',
  data() {
    return {
      selectedPresentation: 0,
    };
  },
  computed: {
    presentationsImages() {
      return [
        'https://res.cloudinary.com/dxsslqd7f/image/upload/q_auto:eco/v1618258601/FAMOSA/Producto/LATA_FAMOSA_12OZ_d8za3i_lower.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/q_auto:eco/v1618258599/FAMOSA/Producto/LATA_FAMOSA_16OZ_izablg.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/q_auto:eco/v1618258592/FAMOSA/Producto/LATA_FAMOSA_24OZ_ifweuy.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/q_auto:eco/v1618258568/FAMOSA/Producto/Botella_Famos_12oz_xhj3o6.png',
        'https://res.cloudinary.com/dxsslqd7f/image/upload/v1620858202/FAMOSA/15_LITER_BOTTLE_wltap1.png',
      ];
    },
  },
  methods: {
    setSelectedPresentation(index: number) {
      this.selectedPresentation = index;
    },
  },
});
</script>
