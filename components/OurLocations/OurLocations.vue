<template>
  <AppSection
    class="min-h-screen-2/3"
    :style="{
      backgroundImage: `url('https://res.cloudinary.com/dxsslqd7f/image/upload/v1626190406/DEL%20FRUTAL/Mapa_Banner_mh5sd5.png')`,
      backgroundPosition: 'bottom left',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
    max-content="md:max-w-screen-xl"
    inner-container-class="w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 w-full">
      <div>
        <h2 class="text-4xl font-bold mb-8">Dónde comprar</h2>
        <ul>
          <span class="font-bold triangle-bullet text-xl"
            >Puntos de venta en Estados Unidos:</span
          >
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('florida')">
            Florida
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('new-jersey')">
            New Jersey
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('new-york')">
            New York
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('maryland')">
            Maryland
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('california')">
            California
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('tennessee')">
            Tennessee
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('georgia')">
            Georgia
          </li>
          <li
            class="ml-6 cursor-pointer"
            @mouseover="selectArea('massachusetts')"
          >
            Massachusetts
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('delaware')">
            Delaware
          </li>
          <li
            class="ml-6 cursor-pointer"
            @mouseover="selectArea('north-carolina')"
          >
            North Carolina
          </li>
          <li
            class="ml-6 cursor-pointer"
            @mouseover="selectArea('rhode-island')"
          >
            Rhode Island
          </li>
          <li class="ml-6 cursor-pointer" @mouseover="selectArea('texas')">
            Texas
          </li>
        </ul>
      </div>
      <OurLocationsMap :selected-area="selectedArea" />
    </div>
  </AppSection>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OurLocations',
  data() {
    return {
      selectedArea: '',
    };
  },
  methods: {
    selectArea(area: string): void {
      this.selectedArea = area;
    },
  },
});
</script>
