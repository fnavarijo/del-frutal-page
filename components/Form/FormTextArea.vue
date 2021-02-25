<template>
  <div>
    <label :for="name"></label
    ><textarea
      :name="name"
      :value="value"
      :placeholder="placeholder"
      class="form-input p-2 w-full"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FormTextArea',
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
