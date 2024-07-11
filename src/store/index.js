import { createStore } from "vuex";
import productsModule from "./modules/products.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products: productsModule,
  },
});
