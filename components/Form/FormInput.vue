<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules" tag="div">
    <label :for="name"></label
    ><input
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      class="form-input p-2 w-full text-normal-blue-500"
      @input="$emit('input', $event.target.value)"
    />
    <div>{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
  name: 'FormInput',
  components: {
    ValidationProvider,
  },
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
    rules: {
      type: String,
      default: '',
    },
  },
});
</script>
