import { createStore } from "vuex";
import productsModule from "./modules/products.js";
import cartModule from "./modules/cart.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products: productsModule,
    cart: cartModule,
  },
});
