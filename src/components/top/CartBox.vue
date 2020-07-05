<template>
  <div class="cart-box">
    <router-link to="/cart" class="cart_hover" href="cart.html">
      <img class="header__cart" src="../../assets/cart.png" alt="cart"></router-link>
    <div class="button__dropDown">
      <cartBoxItem v-for="cartBoxItem in getCartItems" :cartBoxItem="cartBoxItem"
      :key="cartBoxItem.id_product"></cartBoxItem>
      <div class="total">
        <ul class="total__list">
          <li>TOTAL</li>
          <li>${{ totalPrice }}</li>
        </ul>
      </div>
      <a href="#" class="checkout__button">Checkout</a>
      <router-link to="/cart" class="goToCart__button">Go to cart</router-link>
    </div>
  </div>
</template>

<script>
import cartBoxItem from '@/components/top/blocks/CartBoxItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CartBox',
  components: {
    cartBoxItem,
  },
  data() {
    return {
      cartBoxItems: [
        {
          id_product: 1,
          product_name: 'Mango People T-shirt',
          price: 51.00,
          image: 'https://placehold.it/50x100',
          color: 'Red',
          size: 'Xll',
          quantity: 1,
        },
        {
          id_product: 2,
          product_name: 'Mango People T-shirt2',
          price: 52.00,
          image: 'https://placehold.it/50x100',
          color: 'Red',
          size: 'Xll',
          quantity: 1,
        },
      ],
    };
  },
  methods: {
    ...mapActions(['fetchCartItems']),
  },
  computed: {
    totalPrice() {
      return this.getCartItems.reduce((sum, good) => sum + (good.price * good.quantity), 0);
    },
    ...mapGetters(['getCartItems']),
  },
  mounted() {
    this.fetchCartItems();
  },
};
</script>

<style scoped>

</style>
