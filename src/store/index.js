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
      fetch('https://raw.githubusercontent.com/Anastas33/Homework/homework6/db/productItems.json')
        .then((result) => result.json())
        .then((data) => {
          commit('SET_PRODUCTS', data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart({ commit }, data) {
      commit('ADD_TO_CART', data);
    },
    deleteFromCart({ commit }, data) {
      commit('DELETE_FROM_CART', data);
    },
    deleteFromCartAll(context) {
      context.commit('DELETE_FROM_CART_ALL');
    },
    fetchCartItems({ commit }) {
      fetch('https://raw.githubusercontent.com/Anastas33/Homework/homework6/db/cartItems.json')
        .then((result) => result.json())
        .then((data) => {
          commit('SET_CART_ITEMS', data);
        })
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
  // для коммита
});
