<template>
  <AppSection
    class="min-h-screen-1/2"
    max-content=""
    inner-container-class="w-full"
  >
    <div class="grid grid-cols-box-bigger w-full">
      <div class="md:pl-12 lg:pl-12 xl:pl-24">
        <header>
          <h2 class="text-5xl font-thin">Descubre EDT</h2>
        </header>
        <ul>
          <li class="text-2xl font-bold triangle-bullet">
            <span>Estados Unidos</span>
          </li>
          <ul class="ml-4 text-base font-normal">
            <li
              class="hover:text-california cursor-pointer"
              data-area="arizona"
              @mouseover="setSelectedArea"
            >
              Arizona
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="california"
              @mouseover="setSelectedArea"
            >
              California
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="delawere"
              @mouseover="setSelectedArea"
            >
              Delawere
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="florida"
              @mouseover="setSelectedArea"
            >
              Florida
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="georgia"
              @mouseover="setSelectedArea"
            >
              Georgia
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="illinois"
              @mouseover="setSelectedArea"
            >
              Illinois
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="maryland"
              @mouseover="setSelectedArea"
            >
              Maryland
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="massachusetts"
              @mouseover="setSelectedArea"
            >
              Massachusetts
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="new-jersey"
              @mouseover="setSelectedArea"
            >
              New Jersey
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="nueva-york"
              @mouseover="setSelectedArea"
            >
              Nuevo York
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="tennessee"
              @mouseover="setSelectedArea"
            >
              Tennessee
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="texas"
              @mouseover="setSelectedArea"
            >
              Texas
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="virginia"
              @mouseover="setSelectedArea"
            >
              Virginia
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="alabama"
              @mouseover="setSelectedArea"
            >
              Alabama
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="washington"
              @mouseover="setSelectedArea"
            >
              Washington
            </li>
            <li
              class="hover:text-california cursor-pointer"
              data-area="oklahoma"
              @mouseover="setSelectedArea"
            >
              Oklahoma
            </li>
          </ul>
          <li class="text-2xl font-bold triangle-bullet">
            <span
              class="hover:text-california cursor-pointer"
              data-area="mexico"
              @mouseover="setSelectedArea"
              >México</span
            >
          </li>
          <li class="text-2xl font-bold triangle-bullet">
            <span
              class="hover:text-california cursor-pointer"
              data-area="puerto-rico"
              @mouseover="setSelectedArea"
              >Puerto Rico</span
            >
          </li>
          <li class="text-2xl font-bold triangle-bullet">
            <span
              class="hover:text-california cursor-pointer"
              data-area="cuba"
              @mouseover="setSelectedArea"
              >Cuba</span
            >
          </li>
          <li class="text-2xl font-bold triangle-bullet">
            <span
              class="hover:text-california cursor-pointer"
              data-area="republica-dominicana"
              @mouseover="setSelectedArea"
              >República Dominicana</span
            >
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
  name: 'DiscoverEDT',
  data() {
    return {
      selectedArea: '',
    };
  },
  methods: {
    setSelectedArea(event: any) {
      const { srcElement } = event;
      this.selectedArea = srcElement.dataset.area;
    },
  },
});
</script>
