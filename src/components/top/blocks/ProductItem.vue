<template>
  <div class="item">
    <router-link :to="linkOpen">
      <img :src="product.image" :alt="product.id_product" class="item__img"></router-link>
    <div class="product__content">
      <router-link :to="linkOpen" class="product__name">
        {{ product.product_name }}</router-link>
      <div class="product__price">$ {{ product.price }}</div>
    </div>
    <buttonAddToCart :product="product"></buttonAddToCart>
  </div>
</template>

<script>
import buttonAddToCart from '@/components/top/blocks/ButtonAddToCart.vue';

export default {
  name: 'ProductItem',
  components: {
    buttonAddToCart,
  },
  props: ['product'],
  computed: {
    linkOpen() {
      return `/product/${this.product.id_product}`;
    },
  },
};
</script>

<style scoped>

</style>
