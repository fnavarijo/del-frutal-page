<template>
  <div class="flex items-end">
    <PresentationLabel
      v-for="(presentation, index) in presentationsLabels"
      :key="index"
      v-bind="presentation"
      class="mx-2"
      :is-active="presentationSelected === index"
      @click.native="selectPresentation(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PresentationLabelContainer',
  data() {
    return {
      presentationSelected: 0,
    };
  },
  computed: {
    presentationsLabels() {
      return [
        {
          label: '12 FL. OZ',
          imageName: '12_oz_can',
        },
        {
          label: '16 FL. OZ',
          imageName: '16_oz_can',
        },
        {
          label: '24 FL. OZ',
          imageName: '24oz_can',
        },
        {
          label: '12 FL. OZ',
          imageName: '12oz_bottle',
        },
        {
          label: '32 FL. OZ',
          imageName: '32oz_bottle',
        },
      ];
    },
  },
  methods: {
    selectPresentation(index: number) {
      this.presentationSelected = index;
      this.$emit('presentation-selected', index);
    },
  },
});
</script>
