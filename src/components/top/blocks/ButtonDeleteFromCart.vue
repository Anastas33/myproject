<template>
  <button class="iconClose__button" @click="deleteFromCart(cartItem)">
    <span class="icon-close"></span>
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ButtonDeleteFromCart',
  methods: {
    ...mapActions(['deleteFromCart']),
  },
  props: ['cartItem'],
};
</script>

<style scoped>

</style>
