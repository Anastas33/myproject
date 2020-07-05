<template>
  <div>
    <section class="table center">
      <table>
        <tr class="table__tr__1">
          <th class="table__th">Product Details</th>
          <th class="table__th">unite Price</th>
          <th class="table__th">Quantity</th>
          <th class="table__th">shipping</th>
          <th class="table__th">Subtotal</th>
          <th class="table__th">ACTION</th>
        </tr>
        <cartItem v-for="cartItem in getCartItems" :cartItem="cartItem" :key="cartItem.id_product">
        </cartItem>
      </table>
    </section>
    <section class="cart__buttons center">
      <button @click="deleteFromCartAll" class="cart__button">cLEAR SHOPPING CART</button>
      <router-link to="/products"><button class="cart__button">cONTINUE sHOPPING</button>
      </router-link>
    </section>
    <section class="cart__block center">
      <form class="cart__block__form" action="#">
        <h4 class="cart__block__h4">Shipping Adress</h4>
        <details class="cart__block__drop">
          <summary class="cart__block__summary">Bangladesh</summary>
        </details>
        <input class="cart__block__input" type="text" placeholder="State">
        <input class="cart__block__input" type="text" placeholder="Postcode / Zip">
        <input class="cart__block__submit" type="submit" value="get a quote">
      </form>
      <form class="cart__block__form" action="#">
        <h4 class="cart__block__h4">coupon  discount</h4>
        <p class="cart__block__p">Enter your coupon code if you have one</p>
        <input class="cart__block__input" type="text" placeholder="State">
        <input class="cart__block__submit" type="submit" value="Apply coupon">
      </form>
      <div class="cart__block__right">
        <div class="cart__block__right__text">
          <p class="cart__block__right__p">Sub total <span class="cart__block__span">
            $ {{ totalPrice }}</span></p>
          <h4 class="cart__block__right__h4">GRAND TOTAL
            <span class="cart__block__span cart__block__span__pink">$ {{ totalPrice }}</span></h4>
        </div>
        <button class="cart__block__button">proceed to checkout</button>
      </div>
    </section>
  </div>
</template>

<script>
import cartItem from '@/components/top/blocks/CartItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  components: {
    cartItem,
  },
  methods: {
    ...mapActions(['fetchCartItems']),
    ...mapActions(['deleteFromCartAll']),
  },
  computed: {
    totalPrice() {
      return this.getCartItems.reduce((sum, good) => sum + (good.price * good.quantity), 0);
    },
    ...mapGetters(['getCartItems']),
  },
  mounted() {
    this.fetchCartItems()
      .then((data) => {
        if (data) {
          console.log(123);
        }
      });
  },
};
</script>

<style scoped>

</style>
