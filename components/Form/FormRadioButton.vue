<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input class="custom-radio" type="radio" :name="name" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormRadioButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
.custom-radio {
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 5px;
  width: 5px;
  border-radius: 0; */
}
</style>
