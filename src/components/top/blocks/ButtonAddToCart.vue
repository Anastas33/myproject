<template>
  <a href="#" class="add__to__cart" @click="addToCart(product)">
    <img class="white__cart" src="../../../assets/white__cart.png" alt="white__cart">Add to Cart
  </a>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ButtonAddToCart',
  methods: {
    ...mapActions(['addToCart']),
  },
  props: ['product'],
};
</script>

<style scoped>

</style>
