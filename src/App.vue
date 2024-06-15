<template>
  <ul v-for="product in products" :key="product.id">
    <product-item
      :image="product.image"
      :title="product.title"
      :price="product.price"
      :description="product.description"
    ></product-item>
  </ul>
</template>

<script>
import ProductItem from "./components/ProductItem.vue";

export default {
  components: {
    ProductItem,
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
    };
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

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
