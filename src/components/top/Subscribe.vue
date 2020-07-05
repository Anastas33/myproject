<template>
  <section class="subscribe">
    <div class="subscribe__content center">
      <div class="subscribe__left">
        <div class="photo">
          <img src="../../assets/photo.png" alt="photo">
        </div>
        <div class="photo__info">
          <p class="photo__info__p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
          <p class="photo__name">Bin Burhan</p>
          <p class="photo__place">Dhaka, Bd</p>
          <div class="subscribe__pagination">
            <a href="#" class="rectangle"></a>
            <a href="#" class="rectangle rectangle__active"></a>
            <a href="#" class="rectangle"></a>
          </div>
        </div>
      </div>
      <div class="subscribe__right">
        <div class="subscribe__text">
          <h4 class="subscribe__text__h4">Subscribe</h4>
          <p class="subscribe__text__p">FOR OUR NEWLETTER AND PROMOTION</p>
        </div>
        <form class="subscribe__form" action="#">
          <label>
            <input type="email" class="email" required placeholder="Enter Your Email">
          </label>
          <input type="submit" class="form__button" value="Subscribe">
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
};
</script>

<style scoped lang="scss">
  .subscribe {
    background-image: url(../../assets/2196.png), url(../../assets/subscribe__back.png);
  }
</style>
