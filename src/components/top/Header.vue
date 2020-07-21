<template>
  <header class="header center">
    <div class="header__left">
      <logo></logo>
      <form action="#" class="header__form">
        <details class="header__browse">
          <summary>Browse</summary>
          <div class="header__dropDown">
            <div class="border__bottom">Women</div>
            <ul class="header__dropDown__category header__dropDown__category__top">
              <li class="header__dropDown__list"
                  v-for="browseWomenListPoint of browseWomenListPoints"
                  :key="browseWomenListPoint"><a href="#" class="header__dropDown__link">
                {{ browseWomenListPoint }}
              </a></li>
            </ul>
            <div class="border__bottom">Men</div>
            <ul class="header__dropDown__category">
              <li class="header__dropDown__list"
                  v-for="browseMenListPoint of browseMenListPoints"
                  :key="browseMenListPoint"><a href="#" class="header__dropDown__link">
                {{ browseMenListPoint }}
              </a></li>
            </ul>
          </div>
        </details>
        <label>
          <input class="header__search" type="text" placeholder="Search for Item..."
                 v-model="userSearch" @submit="filterProducts(userSearch)">
        </label>
        <router-link to="/products">
          <button class="search__button" @click="filterProducts(userSearch)">
          <img src="../../assets/search.png" alt="search"></button></router-link>
      </form>
    </div>
    <div class="header__right">
      <cartBox></cartBox>
      <details class="button">
        <summary>My Account</summary>
      </details>
    </div>
  </header>
</template>

<script>
import logo from '@/components/top/blocks/Logo.vue';
import cartBox from '@/components/top/CartBox.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      userSearch: '',
      browseWomenListPoints: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers',
        'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'],
      browseMenListPoints: ['Shirts/Polos', 'Sweaters', 'Sweatshirts/Hoodies',
        'Tees/Tank tops', 'Blazers', 'Jackets/vests'],
    };
  },
  methods: {
    ...mapActions(['filterProducts']),
    ...mapActions(['fetchProducts']),
  },
  components: {
    logo,
    cartBox,
  },
  beforeMount() {
    this.fetchProducts();
    this.filterProducts();
  },
};
</script>

<style scoped lang="scss">

</style>
