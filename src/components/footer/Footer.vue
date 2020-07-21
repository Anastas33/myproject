<template>
  <footer class="footer">
    <div class="footer__content center">
      <div class="footer__info">
        <logo></logo>
        <p class="footer__info__p">Objectively transition extensive data rather than cross
          functional solutions. Monotonectally syndicate multidisciplinary materials before go
          forward benefits. Intrinsicly syndicate an expanded array of processes and
          cross-unit partnerships.</p>
        <p class="footer__info__p">Efficiently plagiarize 24/365 action items and focused
          infomediaries. Distinctively seize superior initiatives for wireless technologies.
          Dynamically optimize.</p>
      </div>
      <div class="footer__menu">
        <h4 class="footer__menu__h4">COMPANY</h4>
        <ul class="footer__menu__menu">
          <li class="footer__menu__list"><router-link to="/" class="footer__menu__link">
            Home</router-link></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">Shop</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">About</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">How It Works
          </a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">Contact</a></li>
        </ul>
      </div>
      <div class="footer__menu">
        <h4 class="footer__menu__h4">INFORMATION</h4>
        <ul class="footer__menu__menu">
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Tearms & Condition</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Privacy Policy</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            How to Buy</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            How to Sell</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Promotion</a></li>
        </ul>
      </div>
      <div class="footer__menu">
        <h4 class="footer__menu__h4">SHOP CATEGORY</h4>
        <ul class="footer__menu__menu">
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Men</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Women</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Child</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Apparel</a></li>
          <li class="footer__menu__list"><a href="#" class="footer__menu__link">
            Brows All</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer_bottom__content center">
        <div class="footer__rights">© 2020 Brand All Rights Reserved.</div>
        <socialLinks></socialLinks>
      </div>
    </div>
  </footer>

</template>

<script>
import socialLinks from '@/components/top/blocks/SocialLinks.vue';
import logo from '@/components/top/blocks/Logo.vue';

export default {
  name: 'Footer',
  components: {
    socialLinks,
    logo,
  },
};
</script>

<style scoped>

</style>
