import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    filtered: [],
    cartItems: [],
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = [...data];
    },
    SET_FILTERED(state, data) {
      state.filtered = [...data];
    },
    SET_CART_ITEMS(state, data) {
      state.cartItems = [...data];
    },
    FILTER_PRODUCTS(state, data) {
      const regexp = new RegExp(data, 'i');
      state.filtered = state.products.filter((el) => regexp.test(el.product_name));
    },
    ADD_TO_CART(state, data) {
      const find = state.cartItems.find((el) => el.id_product === data.id_product);
      if (find) {
        find.quantity += 1;
      } else {
        const prod = { ...data, quantity: 1 };
        state.cartItems.push(prod);
      }
    },
    DELETE_FROM_CART(state, data) {
      const find = state.cartItems.find((el) => el.id_product === data.id_product);
      if (find.quantity > 1) {
        find.quantity -= 1;
      } else {
        state.cartItems.splice(state.cartItems.indexOf(find), 1);
      }
    },
    DELETE_FROM_CART_ALL(state) {
      state.cartItems = [];
    },
  },
  actions: {
    filterProducts({ commit }, data) {
      commit('FILTER_PRODUCTS', data);
    },
    fetchProducts({ commit }) {
      fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
        .then((result) => result.json())
        .then((data) => {
          commit('SET_PRODUCTS', data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      // commit('SET_PRODUCTS', [
      //   {
      //     id_product: 1,
      //     product_name: 'Mango People T-shirt',
      //     price: 51.00,
      //     image: '../assets/product__9.png',
      //     small_image: 'https://placehold.it/50x100',
      //     big_image: 'https://placehold.it/597x724',
      //     color: 'Red',
      //     size: 'M',
      //     material: 'COTTON',
      //     designer: 'BINBURHAN',
      //     collection: 'WOMEN COLLECTION',
      //     description: 'Moschino Cheap And Chic',
      //     full_description: `Compellingly actualize fully researched processes before proactive
      //       + outsourcing. Progressively syndicate collaborative architectures before
      //       + cutting-edge services. Completely visualize parallel core competencies rather
      //       + than exceptional portals.`,
      //   },
      //   {
      //     id_product: 2,
      //     product_name: 'Mango People T-shirt2',
      //     price: 52.00,
      //     image: 'https://placehold.it/200x150',
      //     small_image: 'https://placehold.it/50x100',
      //     big_image: 'https://placehold.it/597x724',
      //     color: 'Blue',
      //     size: 'XS',
      //     material: 'WOOL',
      //     designer: 'BINBURHAN',
      //     collection: 'WOMEN COLLECTION',
      //     description: 'Moschino Cheap And Chic',
      //     full_description: `Compellingly actualize fully researched processes before proactive
      //       + outsourcing. Progressively syndicate collaborative architectures before
      //       + cutting-edge services. Completely visualize parallel core competencies rather
      //       + than exceptional portals.`,
      //   },
      //   {
      //     id_product: 3,
      //     product_name: 'Mango People T-shirt3',
      //     price: 53.00,
      //     image: 'https://placehold.it/200x150',
      //     small_image: 'https://placehold.it/50x100',
      //     big_image: 'https://placehold.it/597x724',
      //     color: 'White',
      //     size: 'XL',
      //     material: 'SILK',
      //     designer: 'BINBURHAN',
      //     collection: 'WOMEN COLLECTION',
      //     description: 'Moschino Cheap And Chic',
      //     full_description: `Compellingly actualize fully researched processes before proactive
      //       + outsourcing. Progressively syndicate collaborative architectures before
      //       + cutting-edge services. Completely visualize parallel core competencies rather
      //       + than exceptional portals.`,
      //   },
      //   {
      //     id_product: 4,
      //     product_name: 'Mango People T-shirt4',
      //     price: 54.00,
      //     image: 'https://placehold.it/200x150',
      //     small_image: 'https://placehold.it/50x100',
      //     big_image: 'https://placehold.it/597x724',
      //     color: 'Black',
      //     size: 'XXL',
      //     material: 'VISCOSE',
      //     designer: 'BINBURHAN',
      //     collection: 'WOMEN COLLECTION',
      //     description: 'Moschino Cheap And Chic',
      //     full_description: `Compellingly actualize fully researched processes before proactive
      //       + outsourcing. Progressively syndicate collaborative architectures before
      //       + cutting-edge services. Completely visualize parallel core competencies rather
      //       + than exceptional portals.`,
      //   },
      // ]);
    },
    addToCart({ commit }, data) {
      commit('ADD_TO_CART', data);
    },
    deleteFromCart({ commit }, data) {
      commit('DELETE_FROM_CART', data);
    },
    deleteFromCartAll({ commit }) {
      commit('DELETE_FROM_CART_ALL');
    },
    fetchCartItems({ commit }) {
    //   const response = await fetch('');
    //   return response.json;
    //   fetch('../db/cartItems.json')
    //     .then((result) => result.json())
    //     .then((data) => {
    //       commit('SET_CART_ITEMS', {
    //         id_product: 2,
    //         product_name: 'Mango People T-shirt2',
    //         price: 52.00,
    //         image: 'https://placehold.it/200x150',
    //         color: 'Red',
    //         size: 'Xll',
    //         quantity: 3,
    //       });
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
      setTimeout(() => {
        commit('SET_CART_ITEMS', [{
          id_product: 2,
          product_name: 'Mango People T-shirt2',
          price: 52.00,
          image: 'https://placehold.it/200x150',
          smallImage: 'https://placehold.it/50x100',
          color: 'Red',
          size: 'Xll',
          quantity: 3,
        }]);
      }, 4500);
    },
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
  getters: {
    getFiltered(state) {
      return state.filtered;
    },
    getProducts(state) {
      return state.products;
    },
    getCartItems(state) {
      return state.cartItems;
    },
  },
  modules: {
  },
});
