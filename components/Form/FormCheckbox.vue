<template>
  <div class="flex justify-center">
    <label class="flex items-center">
      {{ label }}
      <input
        class="radio-button inline-block appearance-none rounded-none w-4 h-4 border-white border transition-all duration-200 ease-in cursor-pointer"
        type="checkbox"
        :name="name"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    modelValue: { type: String, default: '' },
  },
});
</script>

<style scoped>
.radio-button:checked {
  @apply bg-white;
}
</style>
