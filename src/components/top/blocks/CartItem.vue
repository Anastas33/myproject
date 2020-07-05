<template>
  <tr>
    <td class="table__td">
      <a href="#"><img class="table__img" :src="cartItem.image" :alt="cartItem.id_product"></a>
      <a class="table__prod__name" href="#">{{ cartItem.product_name }}</a>
      <p class="table__prod__desc">Color: <span class="table__prod__span">
        {{ cartItem.color }}</span> <br>
        Size: <span class="table__prod__span">{{ cartItem.size }}</span>
      </p>
    </td>
    <td class="table__td">$ {{ cartItem.price }}</td>
    <td class="table__td">
      <label>
        <input class="table__input" type="number" min="1" v-model="cartItem.quantity">
      </label>
    </td>
    <td class="table__td">FREE</td>
    <td class="table__td">$ {{ cartItem.price * cartItem.quantity }}</td>
    <td class="table__td"><buttonDeleteFromCart :cartItem="cartItem"></buttonDeleteFromCart></td>
  </tr>
</template>

<script>
import buttonDeleteFromCart from '@/components/top/blocks/ButtonDeleteFromCart.vue';

export default {
  name: 'CartItem',
  props: ['cartItem'],
  components: {
    buttonDeleteFromCart,
  },
};
</script>

<style scoped>

</style>
