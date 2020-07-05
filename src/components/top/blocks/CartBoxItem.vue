<template>
  <div class="addedProduct">
    <div class="addedProduct__left">
      <a href="#" class="cart__product">
        <img :src="cartBoxItem.small_image"
             :alt="cartBoxItem.id_product" class="cart__product__img"></a>
      <div class="addedProduct__left__info">
        <a href="#" class="cart__product__name">{{ cartBoxItem.product_name }}</a>
        <img src="../../../assets/stars.png" alt="stars">
        <p class="cart__product__quantity">
          {{ cartBoxItem.quantity }} <span class="cart__product__x">x</span>
          ${{ cartBoxItem.price }}</p>
      </div>
    </div>
    <buttonDeleteFromCart :cartItem="cartBoxItem"></buttonDeleteFromCart>
  </div>
</template>

<script>
import buttonDeleteFromCart from '@/components/top/blocks/ButtonDeleteFromCart.vue';

export default {
  name: 'CartBoxItem',
  props: ['cartBoxItem'],
  components: {
    buttonDeleteFromCart,
  },
};
</script>

<style scoped>

</style>
