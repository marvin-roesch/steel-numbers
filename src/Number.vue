<template>
<div class="home">
  <span v-if="number">{{ convertedNumber }}</span>
</div>
</template>

<script>
import convert from '@/convert-number';

export default {
  name: 'number',
  props: {
    number: Number,
  },
  computed: {
    convertedNumber() {
      if (this.number) {
        return convert(this.number);
      }
      return null;
    },
  },
  components: {},
};
</script>
