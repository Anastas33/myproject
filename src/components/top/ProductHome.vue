<template>
  <section class="product center">
    <div class="product__header">
      <h2 class="product__header__h2">Fetured Items</h2>
      <p class="product__header__p">Shop for items based on what we featured in this week</p>
    </div>
    <div class="product__box">
      <productItem v-for="product in products" :product="product" :key="product.id_product">
      </productItem>
    </div>
    <router-link to="/products" class="product__button">Browse All Product
      <span class="icon-long-arrow-right">
    </span></router-link>
  </section>
</template>

<script>
import productItem from '@/components/top/blocks/ProductItem.vue';

export default {
  name: 'ProductHome',
  data() {
    return {
      products: [
        {
          id_product: 1,
          product_name: 'Mango People T-shirt',
          price: 51.00,
          image: 'https://placehold.it/200x150',
        },
        {
          id_product: 2,
          product_name: 'Mango People T-shirt2',
          price: 52.00,
          image: 'https://placehold.it/200x150',
        },
        {
          id_product: 3,
          product_name: 'Mango People T-shirt3',
          price: 53.00,
          image: 'https://placehold.it/200x150',
        },
        {
          id_product: 4,
          product_name: 'Mango People T-shirt4',
          price: 54.00,
          image: 'https://placehold.it/200x150',
        },
      ],
    };
  },
  computed: {

  },
  mounted() {
    // this.$parent.getJson('./db/productItems.json')
    //   .then((data) => {
    //     for (const el of data) {
    //       this.products.push(el);
    //       // this.filtered.push(el);
    //     }
    //   });
  },
  components: {
    productItem,
  },
};
</script>

<style scoped>

</style>
