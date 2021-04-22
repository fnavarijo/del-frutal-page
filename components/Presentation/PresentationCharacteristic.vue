<template>
  <div class="flex justify-end">
    <div class="flex flex-col items-end mr-4">
      <span class="font-bold">{{ title }}</span>
      <span class="font-thin">{{ subtitle }}</span>
    </div>
    <img :src="iconUrl" alt="" class="w-12" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PresentationCharacteristic',
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
});
</script>
