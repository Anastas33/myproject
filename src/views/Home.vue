<template>
  <div>
    <promo></promo>
    <category></category>
    <productHome></productHome>
    <feature></feature>
  </div>
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
</template>

<script>
import feature from '@/components/top/Feature.vue';
import promo from '@/components/top/Promo.vue';
import category from '@/components/top/Category.vue';
import productHome from '@/components/top/ProductHome.vue';

export default {
  name: 'Home',
  components: {
    feature,
    promo,
    category,
    productHome,
  },
};
</script>
