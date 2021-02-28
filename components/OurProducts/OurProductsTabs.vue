<template>
  <div class="flex flex-col items-center">
    <div v-show="!selectedProduct">
      <ul class="flex flex-col md:flex-row justify-center space-x-2 mb-8">
        <li
          v-for="(tab, index) in tabsNames"
          :key="index"
          class="text-base md:text-xl uppercase font-bold p-4 rounded-md select-none cursor-pointer"
          :class="[
            selectedTab === index
              ? 'bg-normal-blue-500 text-white'
              : 'bg-normal-blue-100',
          ]"
          @click="selectedTab = index"
        >
          {{ tab }}
        </li>
      </ul>
      <OurProductsTable
        :products="ourProducts"
        @product-selected="displaySelectedProduct"
      />
    </div>
    <OurProducts v-show="!!selectedProduct" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import OurProductsTable from '@/components/OurProducts/OurProductsTable.vue';
import OurProducts from '@/components/OurProducts/OurProducts.vue';

import { ourProducts } from '@/data/our-products';

export default Vue.extend({
  name: 'OurProductsTabs',
  components: {
    OurProductsTable,
    OurProducts,
  },
  data() {
    return {
      selectedTab: 0,
      selectedProduct: '',
    };
  },
  computed: {
    tabsNames(): Array<string> {
      return ['Todas nuestras marcas', 'Bebidas', 'Comida', 'Nutrición diaria'];
    },
    selectedProducts(): string {
      const productMapping: { [key: number]: string } = {
        1: 'drinks',
        2: 'food',
        3: 'nutrition',
      };
      return productMapping[this.selectedTab];
    },
    ourProducts(): Array<any> {
      return this.selectedTab === 0
        ? ourProducts
        : ourProducts.filter(({ type }) => type === this.selectedProducts);
    },
  },
  methods: {
    displaySelectedProduct(product: string): void {
      console.log('Product', product);
      this.selectedProduct = product;
    },
  },
});
</script>
