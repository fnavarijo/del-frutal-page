<template>
  <div>
    <HomeSectionPresentations
      v-if="!selectedProduct"
      @selected-product="selectedProduct = true"
    />
    <HomeSectionProduct v-else @return="selectedProduct = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeProducts',
  data() {
    return {
      selectedProduct: false,
    };
  },
});
</script>
