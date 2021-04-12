<template>
  <div class="flex flex-col relative w-full">
    <DownArrow
      v-show="!!selectedCategory"
      class="fill-current text-normal-blue-500 w-8 h-8 transform rotate-90 absolute -top-16 left-0 cursor-pointer"
      @click="backToGeneralProducts"
    />
    <div v-if="!selectedCategory">
      <div class="flex items-center mb-4">
        <span class="font-light inline-block w-full text-center text-2xl"
          >Cervezas y Maltas</span
        >
        <span class="font-light inline-block w-full text-center text-2xl"
          >Snacks</span
        >
        <span class="font-light inline-block w-full text-center text-2xl"
          >Atoles y Cereales</span
        >
        <span class="font-light inline-block w-full text-center text-2xl"
          >Bebidas</span
        >
      </div>
      <div class="flex bg-neutral-gray-200 rounded-3xl space-x-6">
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267416/logos/Famosa_v2ew4a.png"
          class="border-r border-black pr-6 pl-6"
          @click="setCategory('beer', 'Cervezas y Maltas')"
        />
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267439/logos/Se%C3%B1orial_tlayvc.png"
          class="border-r border-black pr-6 pl-6"
          @click="setCategory('snack', 'Snacks')"
        />
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615347996/logos/Logo_bhilnf.png"
          class="border-r border-black pr-6 pl-6"
          @click="setCategory('atole-cereals', 'Atoles y Cereales')"
        />
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267362/logos/Del_frutal_y302jx.png"
          @click="setCategory('drink', 'Bebidas')"
        />
      </div>
    </div>
    <div v-else-if="selectedCategory && selectedProduct">
      <OurProducts
        :selected-brand="selectedProduct"
        :show-social="showSocial(selectedProduct)"
        :brand-info="singleProduct"
      />
    </div>
    <div v-else>
      <h3 class="text-center text-3xl mb-12 font-thin">
        {{ selectedCategoryName }}
      </h3>
      <OurProductCardSlider
        :selected-category="selectedCategory"
        :products="products"
        @selected-product="selectedProductHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

// @ts-ignore
import DownArrow from '@/assets/img/down-arrow.svg?inline';

export default Vue.extend({
  name: 'OurProductCardContainer',
  components: {
    DownArrow,
  },
  data() {
    return {
      selectedCategory: '',
      selectedCategoryName: '',
      selectedProduct: '',
    };
  },
  computed: {
    ...mapState('products', ['products', 'singleProduct']),
  },
  methods: {
    async setCategory(categoryKey: string, categoryName: string) {
      this.selectedCategory = categoryKey;
      this.selectedCategoryName = categoryName;
      await this.$store.dispatch('products/fetchProducts', categoryKey);
    },
    backToGeneralProducts() {
      if (this.selectedProduct) {
        this.selectedProduct = '';
        return;
      }
      this.selectedCategory = '';
      this.selectedCategoryName = '';
    },
    showSocial(selectedProduct: string) {
      return ['famosa', 'del-frutal', 'incaparina', 'senorial'].includes(
        selectedProduct
      );
    },
    async selectedProductHandler(brandUID: string) {
      this.selectedProduct = brandUID;
      await this.$store.dispatch('products/fetchProductByUID', brandUID);
    },
  },
});
</script>
