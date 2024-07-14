import { createStore } from "vuex";
import productsModule from "./modules/products.js";
import cartModule from "./modules/cart.js";

export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  modules: {
    products: productsModule,
    cart: cartModule,
  },
});
