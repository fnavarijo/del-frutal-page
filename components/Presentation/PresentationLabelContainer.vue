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
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258523/FAMOSA/Producto/12_oz_bakrr8.svg',
        },
        {
          label: '16 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258566/FAMOSA/Producto/16_oz_nz5mze.svg',
        },
        {
          label: '24 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258565/FAMOSA/Producto/24oz_e4zqtl.svg',
        },
        {
          label: '12 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258576/FAMOSA/Producto/12oz_d1t7bg.svg',
        },
        {
          label: '32 FL. OZ',
          imageUrl:
            'https://res.cloudinary.com/dxsslqd7f/image/upload/v1618258576/FAMOSA/Producto/32oz_i7v8vf.svg',
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
