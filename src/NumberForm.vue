<template>
<div class="number-form">
  <form @submit.prevent>
    <input type="number" id="number" min="0" placeholder="Number"
           :value="number || '1'" max="65535" @input="changeNumber">
  </form>
  <number :digits="digits" v-if="digits !== null"></number>
  <div class="number-form-error" v-else>
    The provided number is either not an integer or exceeds the maximum supported number of 65535!
  </div>
</div>
</template>

<script>
import Number from '@/Number.vue';
import convert from '@/convert-number';

export default {
  name: 'number-form',
  components: { Number },
  props: {
    number: String,
  },
  computed: {
    digits() {
      const integer = parseInt(this.number === undefined ? '1' : this.number, 10);
      if (Math.floor(integer) === integer) {
        return convert(integer);
      }
      return null;
    },
  },
  methods: {
    changeNumber(event) {
      this.$router.replace({
        name: 'number',
        params: { number: event.target.value },
      });
    },
  },
};
</script>

<style lang="scss">
.number-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    font-size: 1rem;
    color: #2c3e50;
    line-height: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 2px 4px;
    font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
    -webkit-appearance: none;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    outline: 0;
    box-sizing: border-box;
    background: white;
    min-width: 200px;
  }

  &-error {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff5c4f;
    height: 102px;
  }
}
</style>
