<template>
  <div class="grid grid-cols-3 md:grid-cols-8 gap-4">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="bg-gray-200 p-4"
    >
      <img class="w-24" :src="product.url" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'OurProductsTable',
  props: {
    products: {
      type: Array as PropType<Array<any>>,
      default: () => [],
    },
  },
});
</script>
