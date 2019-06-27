<template>
<div class="number">
  <div class="number-digits">
    <digit :value="digit" v-for="digit in convertedNumber" :key="digit"></digit>
  </div>
</div>
</template>

<script>
import convert from '@/convert-number';
import Digit from '@/Digit.vue';

export default {
  name: 'number',
  components: { Digit },
  props: {
    number: String,
  },
  computed: {
    convertedNumber() {
      const integer = parseInt(this.number, 10);
      if (integer) {
        return convert(integer);
      }
      return null;
    },
  },
};
</script>

<style lang="scss">
.number {
  display: flex;
  align-items: center;

  &-digits {
    display: flex;
  }
}
</style>
