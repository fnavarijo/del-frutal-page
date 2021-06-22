<template>
  <div class="flex justify-center">
    <label class="flex items-center">
      <span>{{ label }}</span>
      <input
        class="ml-2 radio-button inline-block appearance-none rounded-none w-4 h-4 border-white border transition-all duration-200 ease-in"
        type="radio"
        :name="name"
        :checked="isChecked"
        :value="value"
        @change="$emit('change', $event.target.value)"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormRadioButton',
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
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
});
</script>

<style scoped>
.radio-button:checked {
  @apply bg-white;
}
</style>
