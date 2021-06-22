<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules" tag="div">
    <label :for="name"></label
    ><textarea
      :name="name"
      :value="value"
      :placeholder="placeholder"
      class="form-input p-2 w-full text-normal-blue-500"
      @input="$emit('input', $event.target.value)"
    />
    <span>{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
  name: 'FormTextArea',
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
    rules: {
      type: String,
      default: '',
    },
  },
});
</script>
