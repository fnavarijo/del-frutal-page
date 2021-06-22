<template>
  <ValidationProvider
    v-slot="{ errors }"
    :rules="rules"
    tag="div"
    class="text-normal-blue-500 flex-col"
  >
    <label :for="name"></label
    ><select
      :name="name"
      :value="value"
      class="p-2 w-full bg-white"
      @input="$emit('input', $event.target.value)"
    >
      <slot />
    </select>
    <div class="text-white">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
  name: 'FormSelect',
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

<style scoped>
select {
  height: 40px;
}
</style>
