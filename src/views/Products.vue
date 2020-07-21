<template>
  <div>
    <breadcrumb></breadcrumb>
    <section class="product__body center">
      <div class="sidebar">
        <details class="sidebar__top">
          <summary class="sidebar__line border__bottom">Category</summary>
          <ul class="sidebar__dropDown">
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Accessories</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Bags</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Denim</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Hoodies & Sweatshirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Jackets & Coats</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Pants</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Polos</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shoes</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shorts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Sweaters & Knits</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              T-Shirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Tanks</a></li>
          </ul>
        </details>
        <details class="sidebar__top">
          <summary class="sidebar__line border__bottom">BRAND</summary>
          <ul class="sidebar__dropDown">
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Accessories</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Bags</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Denim</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Hoodies & Sweatshirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Jackets & Coats</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Pants</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Polos</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shoes</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shorts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Sweaters & Knits</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              T-Shirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Tanks</a></li>
          </ul>
        </details>
        <details class="sidebar__top">
          <summary class="sidebar__line border__bottom">dESIGNER</summary>
          <ul class="sidebar__dropDown">
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Accessories</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Bags</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Denim</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Hoodies & Sweatshirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Jackets & Coats</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Pants</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Polos</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shoes</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Shorts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Sweaters & Knits</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              T-Shirts</a></li>
            <li class="sidebar__dropDown__list"><a href="#" class="sidebar__dropDown__link">
              Tanks</a></li>
          </ul>
        </details>
      </div>
      <div class="product__right">
        <div class="topFilter">
          <div class="topFilter__top">
            <div class="topFilter__block">
              <h4 class="topFilter__block__h4">Trending now</h4>
              <ul class="topFilter__trending">
                <li class="topFilter__list"><a href="#" class="topFilter__link">Bohemian</a></li>
                <li class="topFilter__list"><a href="#" class="topFilter__link">Floral</a></li>
                <li class="topFilter__list"><a href="#" class="topFilter__link">Lace</a></li>
                <li class="topFilter__list"><a href="#" class="topFilter__link">Floral</a></li>
                <li class="topFilter__list"><a href="#" class="topFilter__link">Lace</a></li>
                <li class="topFilter__list"><a href="#" class="topFilter__link">Bohemian</a></li>
              </ul>
            </div>
            <div class="topFilter__block">
              <h4 class="topFilter__block__h4">Size</h4>
              <form action="#" class="topFilter__checkbox">
                <p class="topFilter__checkbox__p" v-for="size of sizes" :key="size">
                  <input class="checkbox" type="checkbox" :value="size" :id="size"
                         v-model="checkedSizes">
                  <label :for="size">{{ size }}</label>
                </p>
              </form>
            </div>
            <div class="topFilter__block">
              <h4 class="topFilter__block__h4">pRICE</h4>
              <form action="#">
                <label>
                  <input class="topFilter__range" type="range" min="52" max="400">
                </label>
                <div class="range__block">
                  <div class="range__price">$52</div>
                  <div class="range__price">$400</div>
                </div>
              </form>
            </div>
          </div>
          <div class="topFilter__bottom">
            <div class="topFilter__bottom__block">Sort By</div>
            <details class="topFilter__bottom__block topFilter__summary">
              <summary class="topFilter__dropDown">Name</summary>
            </details>
            <div class="topFilter__bottom__block">Show</div>
            <details class="topFilter__bottom__block topFilter__summary">
              <summary class="topFilter__dropDown">09</summary>
            </details>
          </div>
        </div>
        <div class="product__box">
          <productItem v-for="product in getFiltered" :product="product" :key="product.id_product">
          </productItem>
        </div>
        <div class="product__pagination">
          <div class="product__pagination__pages">
            <a href="#" class="product__page"><i class="fas fa-chevron-left"></i></a>
            <a href="#" class="product__page product__page__active">1</a>
            <a href="#" class="product__page">2</a>
            <a href="#" class="product__page">3</a>
            <a href="#" class="product__page">4</a>
            <a href="#" class="product__page">5</a>
            <a href="#" class="product__page">6</a>
            <a href="#" class="product__page">.....</a>
            <a href="#" class="product__page">20</a>
            <a href="#" class="product__page"><i class="fas fa-chevron-right"></i></a>
          </div>
          <button class="button__viewAll">View All</button>
        </div>
      </div>
    </section>
    <productFeature></productFeature>
  </div>
</template>

<script>
import productItem from '@/components/top/blocks/ProductItem.vue';
import breadcrumb from '@/components/top/Breadcrumb.vue';
import productFeature from '@/components/top/ProductFeature.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Products',
  data() {
    return {
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
      checkedSizes: [],
    };
  },
  components: {
    productItem,
    breadcrumb,
    productFeature,
  },
  computed: {
    ...mapGetters(['getFiltered']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapActions(['filterProducts']),
    scroll() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.scroll();
  },
  beforeMount() {
    this.filterProducts();
  },
};
</script>

<style scoped>

</style>
