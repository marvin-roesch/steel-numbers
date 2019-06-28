<template>
<div class="digit">
  <img :src="`${publicPath}digits/${value}.svg`" height="80">
  <span class="digit-label">{{ value }}</span>
</div>
</template>

<script>
export default {
  name: 'digit',
  props: {
    value: Number,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss">
.digit {
  display: flex;
  padding: 0.5rem;
  text-align: center;
  flex-direction: column;

  &-label {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 0.25rem;
  }
}
</style>
