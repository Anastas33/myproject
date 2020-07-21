<template>
  <section class="product center">
    <div class="product__header">
      <h2 class="product__header__h2">Fetured Items</h2>
      <p class="product__header__p">Shop for items based on what we featured in this week</p>
    </div>
    <div class="product__box">
      <productItem v-for="product in getProducts" :product="product" :key="product.id_product">
      </productItem>
    </div>
    <router-link to="/products" class="product__button">Browse All Product
      <span class="icon-long-arrow-right">
    </span></router-link>
  </section>
</template>

<script>
import productItem from '@/components/top/blocks/ProductItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProductHome',
  computed: {
    ...mapGetters(['getProducts']),
  },
  components: {
    productItem,
  },
};
</script>

<style scoped>

</style>
