<template>
  <div class="text-white flex flex-col">
    <span class="text-2xl font-bold uppercase">{{ country }}</span>
    <span class="text-sm">{{ address }}</span>
    <span v-if="!!phone" class="text-sm"
      >Teléfono: <strong>{{ phone }}</strong></span
    >
    <span v-if="!!fax" class="text-sm"
      >Fax: <strong>{{ fax }}</strong></span
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    country: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: '',
    },
    fax: {
      type: String,
      default: '',
    },
  },
});
</script>
