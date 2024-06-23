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
      products: this.products,
      addProductToCart: this.addProductToCart,
      cart: this.cart,
    };
  },

  data() {
    return {
      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",

          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e6/Wall_tent_in_the_snow_elk_mountain_tents.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
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
