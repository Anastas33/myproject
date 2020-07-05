<template>
  <div class="footer__social">
    <ul class="footer__social__links">
      <li class="footer__social__links__list" v-for="socialLink of socialLinks" :key="socialLink">
        <a href="#" class="footer__social__links__link">
          <span :class="socialLink"></span>
          </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  data() {
    return {
      socialLinks: ['icon-facebook', 'icon-twitter', 'icon-linkedin', 'icon-pinterest-p',
        'icon-google-plus'],
    };
  },
};
</script>

<style scoped>

</style>
