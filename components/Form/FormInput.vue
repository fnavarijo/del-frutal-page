<template>
  <div>
    <label :for="name"></label
    ><input
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      class="form-input p-2 w-full"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FormInput',
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
    type: {
      type: String,
      default: 'text',
    },
  },
});
</script>
