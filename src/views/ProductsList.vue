<template>
  <section>
    <ul>
      <product-item
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :description="product.description"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
export default {
  inject: ["products"],
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
