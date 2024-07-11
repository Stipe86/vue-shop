<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },

  provide() {
    return {
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      cart: this.cart,
    };
  },

  data() {
    return {
      cart: { items: [], quantity: 0, total: 0 },
    };
  },
  methods: {
    addProductToCart(selectedProductData) {
      const indexNotFoundInArrayReturnedValue = -1;

      const indexOfTheProductInCartArray = this.cart.items.findIndex(
        (product) => product.id === selectedProductData.id
      );

      if (indexOfTheProductInCartArray === indexNotFoundInArrayReturnedValue) {
        const newItem = {
          id: selectedProductData.id,
          image: selectedProductData.image,
          title: selectedProductData.title,
          price: selectedProductData.price,
          quantity: 1,
        };

        this.cart.items.push(newItem);
      } else {
        this.cart.items[indexOfTheProductInCartArray].quantity++;
      }

      this.cart.quantity++;
      this.cart.total += selectedProductData.price;

      this.cart.items.forEach((element) => console.log(element));
    },

    removeProductFromCart(productId) {
      const productFromCartIndex = this.cart.items.findIndex(
        (product) => product.id === productId
      );

      const productData = this.cart.items[productFromCartIndex];

      this.cart.total -= productData.price * productData.quantity;
      this.cart.quantity -= productData.quantity;
      this.cart.items.splice(productFromCartIndex, 1);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
