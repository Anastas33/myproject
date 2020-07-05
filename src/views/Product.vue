<template>
  <div>
    <section class="description">
      <div class="description__pagination">
        <a href="#" class="description__arrow"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="description__arrow"><i class="fas fa-chevron-right"></i></a>
      </div>
      <div class="description__slider">
        <img :src="setItem.big_image" alt="img__slide" class="description__img fade-in">
        <div class="description__info">
          <div class="description__rectangle"></div>
          <h4 class="description__h4">{{ setItem.collection }}</h4>
          <h3 class="description__h3">{{ setItem.description }}</h3>
          <p class="description__p">{{ setItem.full_description }}</p>
          <ul class="description__ul">
            <li class="description__list"><span class="description__span">MATERIAL:</span>
              {{ setItem.material }}</li>
            <li class="description__list"><span class="description__span">DESIGNER:</span>
              {{ setItem.designer }}</li>
          </ul>
          <p class="description__price">${{ setItem.price }}</p>
          <div class="description__choose">
            <div class="description__choose__block">
              <h4 class="description__choose__block__h4">CHOOSE COLOR</h4>
              <details class="description__choose__block__drop">
                <summary class="description__choose__block__summary">Red</summary>
              </details>
            </div>
            <div class="description__choose__block">
              <h4 class="description__choose__block__h4">CHOOSE SIZE</h4>
              <details class="description__choose__block__drop">
                <summary class="description__choose__block__summary">XXL</summary>
              </details>
            </div>
            <div class="description__choose__block">
              <h4 class="description__choose__block__h4">QUANTITY</h4>
              <label>
                <input class="description__choose__block__drop description__choose__block__summary"
                       type="number" placeholder="1" min="1">
              </label>
            </div>
          </div>
          <div class="description__add">
            <a @click="addToCart(product)" href="#" class="description__add__to__cart">
              <img class="pink__cart" src="../assets/pink__cart.png" alt="pink__cart">
              Add to Cart</a>
          </div>
        </div>
      </div>
    </section>
    <section class="also center">
      <h2 class="also__h2">you may like also</h2>
      <div class="product__box">
        <productItem v-for="product in getProducts" :product="product" :key="product.id_product">
        </productItem>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import productItem from '@/components/top/blocks/ProductItem.vue';

export default {
  name: 'Product',
  components: {
    productItem,
  },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    ...mapActions(['addToCart']),
  },
  computed: {
    ...mapGetters(['getProducts']),
    setItem() {
      return this.getProducts.find((el) => el.id_product === +this.$route.params.id);
    },
  },
};
</script>

<style scoped>

</style>
