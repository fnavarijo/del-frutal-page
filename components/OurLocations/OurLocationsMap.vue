<template>
  <div class="w-full overflow-hidden relative">
    <MapBackground class="absolute -top-48 -left-64 text-normal-red-400" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import MapBackground from '@/assets/img/background/map.svg?inline';

const pins: { [key: string]: number } = {
  mexico: 1,
  usa: 16,
  'puerto-rico': 1,
  'republica-dominicana': 1,
  cuba: 1,
};

export default Vue.extend({
  name: 'Map',
  components: {
    MapBackground,
  },
  mounted() {
    const countries = [
      'mexico',
      'usa',
      'puerto-rico',
      'republica-dominicana',
      'cuba',
    ];
    countries.forEach((country) => {
      const countryElement = document.getElementById(country);
      countryElement!.onmouseover = this.setColor;
      countryElement!.onmouseleave = this.removeColor;
    });
  },
  methods: {
    setColor(event: any) {
      const { srcElement } = event;
      srcElement?.classList.add('text-gray-300');
      this.showPin(srcElement.id);
    },
    removeColor(event: any) {
      const { srcElement } = event;
      srcElement?.classList.remove('text-gray-300');
      this.hidePin(srcElement.id);
    },
    showPin(countryName: string) {
      const amountPins = pins[countryName];
      new Array(amountPins).fill(0).forEach((_, index) => {
        const pin = document.getElementById(`${countryName}-pin-${index + 1}`);
        pin?.classList.add('opacity-100');
        pin?.classList.remove('-translate-y-1');
      });
    },
    hidePin(countryName: string) {
      const amountPins = pins[countryName];
      new Array(amountPins).fill(0).forEach((_, index) => {
        const pin = document.getElementById(`${countryName}-pin-${index + 1}`);
        pin?.classList.remove('opacity-100');
        pin?.classList.add('-translate-y-1');
      });
    },
  },
});
</script>

<style scoped>
.st0 {
  fill: #fff;
}
.st1 {
  clip-path: url(#SVGID_2_);
}
.st2 {
  fill: none;
  stroke: #a3a3a3;
  stroke-width: 0.2;
  stroke-miterlimit: 10;
}
.st3 {
  fill: #d7d7d7;
}
.st4 {
  fill: #e23342;
}
.st5 {
  fill: #f2a83d;
}
</style>
