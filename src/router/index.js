import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductsList.vue";
import UserCart from "../views/UserCart.vue";
import ShopAdmin from "../views/ShopAdmin.vue";

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

  {
    path: "/admin",
    component: ShopAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
