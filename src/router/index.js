import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductsList.vue";
import UserCart from "../views/UserCart.vue";
import ShopAdmin from "../views/ShopAdmin.vue";
import store from "../store/index.js";

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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.userIsAuthenticated) {
      next("/products");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
