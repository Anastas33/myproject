<template>
  <div id="app">
    <div class="wrapper">
      <div class="top">
        <headerBlock></headerBlock>
        <navBlock></navBlock>
        <router-view/>
      <subscribe></subscribe>
      </div>
      <footerBlock></footerBlock>
    </div>
  </div>
</template>

<script>
import headerBlock from '@/components/top/Header.vue';
import navBlock from '@/components/top/Nav.vue';
import subscribe from '@/components/top/Subscribe.vue';
import footerBlock from '@/components/footer/Footer.vue';

export default {
  components: {
    headerBlock,
    navBlock,
    subscribe,
    footerBlock,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import './styles/style.scss';
  @import './assets/icomoon-v1.0/style.css';
</style>
