<template>
  <div class="grid grid-cols-6 md:grid-cols-16 gap-2">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="bg-gray-200 p-4 cursor-pointer relative w-24 md:w-32 h-24 md:h-32 flex justify-center overflow-hidden col-span-2"
      :class="[index === 16 ? 'md:col-start-2' : '']"
      @click="$emit('product-selected', product.brand)"
    >
      <img class="w-24 md:w-48 absolute bottom-0" :src="product.url" alt="" />
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
