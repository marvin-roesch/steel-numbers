<template>
<div class="number">
  <div class="number-digits">
    <digit :value="digit" v-for="(digit, index) in digits" :key="`${index}-${digit}`"></digit>
  </div>
</div>
</template>

<script>
import Digit from '@/Digit.vue';

export default {
  name: 'number',
  components: { Digit },
  props: {
    digits: Array,
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
