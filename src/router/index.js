import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductsList.vue";
import UserCart from "../views/UserCart.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    component: ProductList,
  },

  {
    path: "/cart",
    component: UserCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
