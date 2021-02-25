<template>
  <div class="text-normal-blue-500">
    <label :for="name"></label
    ><select :name="name" class="p-2 w-full h-full bg-white">
      <slot />
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FormSelect',
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
});
</script>
