<template>
  <div class="flex flex-col relative">
    <DownArrow
      v-show="!!selectedCategory"
      class="fill-current text-normal-blue-500 w-8 h-8 transform rotate-90 absolute -top-16 left-0 cursor-pointer"
      @click="backToGeneralProducts"
    />
    <div v-if="!selectedCategory">
      <div class="flex items-center mb-4">
        <span class="font-light inline-block w-full text-center text-3xl"
          >Cervezas y Maltas</span
        >
        <span class="font-light inline-block w-full text-center text-3xl"
          >Snacks</span
        >
        <span class="font-light inline-block w-full text-center text-3xl"
          >Atoles y Cereales</span
        >
        <span class="font-light inline-block w-full text-center text-3xl"
          >Bebidas</span
        >
      </div>
      <div class="flex bg-neutral-gray-200 rounded-3xl space-x-12">
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267416/logos/Famosa_v2ew4a.png"
          @click="setCategory('beer', 'Cervezas y Maltas')"
        />
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267439/logos/Se%C3%B1orial_tlayvc.png"
          @click="setCategory('snack', 'Snacks')"
        />
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615347996/logos/Logo_bhilnf.png"
          @click="setCategory('atole-cereals', 'Atoles y Cereales')"
        />
        <OurProductCard
          image="https://res.cloudinary.com/dxsslqd7f/image/upload/v1615267362/logos/Del_frutal_y302jx.png"
          @click="setCategory('drinks', 'Bebidas')"
        />
      </div>
    </div>
    <div v-else-if="selectedCategory && selectedProduct">
      <OurProducts
        :selected-brand="selectedProduct"
        :show-social="showSocial(selectedProduct)"
      />
    </div>
    <div v-else>
      <h3 class="text-center text-2xl mb-12">
        {{ selectedCategoryName }}
      </h3>
      <OurProductCardSlider
        :selected-category="selectedCategory"
        @selected-product="selectedProduct = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

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
  methods: {
    setCategory(categoryKey: string, categoryName: string) {
      this.selectedCategory = categoryKey;
      this.selectedCategoryName = categoryName;
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
  },
});
</script>
