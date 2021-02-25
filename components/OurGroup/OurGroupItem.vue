<template>
  <div class="flex flex-col items-center text-center">
    <img
      class="h-24 w-24"
      :src="require(`~/assets/img/${img}`)"
      alt="Our group icon"
    />
    <span class="text-2xl md:text-3xl font-bold">{{ value }}</span>
    <span class="text-sm">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OurGroupItem',
  props: {
    img: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
