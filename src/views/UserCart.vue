<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: ${{ cart.total.toFixed(2) }}</h3>
    <!-- <ul>
      <li v-for="item in cart.items" :key="item.id">
        <div>
          <img :src="item.image" :alt="item.title" />
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <div class="item__data">
            <div>
              Price per Item: <strong>${{ item.price }}</strong>
            </div>
            <div>
              Quantity: <strong>{{ item.quantity }}</strong>
            </div>
          </div>
          <div class="item__total">
            Total: ${{ (item.price * item.quantity).toFixed(2) }}
          </div>
          <button @click="removeProduct(item.id)">Remove</button>
        </div>
      </li>
    </ul> -->

    <ul>
      <cart-item
        v-for="item in cart.items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import CartItem from "../components/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  inject: ["cart"],

  // methods: {
  //   removeProduct(productId) {
  //     this.removeProductFromCart(productId);
  //   },
  // },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
