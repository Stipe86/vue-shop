export default {
  namespaced: true,
  state() {
    return {
      items: [],
      quantity: 0,
      total: 0,
    };
  },
  getters: {
    items(state) {
      return state.items;
    },
    quantity(state) {
      return state.quantity;
    },
    total(state) {
      return state.total.toFixed(2);
    },
  },

  mutations: {
    addProductToCart(state, payload) {
      const indexNotFoundInArrayReturnedValue = -1;

      const indexOfTheProductInCartArray = state.items.findIndex(
        (product) => product.id === payload.id
      );

      if (indexOfTheProductInCartArray === indexNotFoundInArrayReturnedValue) {
        const newItem = {
          id: payload.id,
          image: payload.image,
          title: payload.title,
          price: payload.price,
          quantity: 1,
        };

        state.items.push(newItem);
      } else {
        state.items[indexOfTheProductInCartArray].quantity++;
      }

      state.quantity++;
      state.total += payload.price;
    },

    removeProductFromCart(state, payload) {
      const productId = payload.productId;
      const productFromCartIndex = state.items.findIndex(
        (product) => product.id === productId
      );

      const productData = state.items[productFromCartIndex];

      state.total -= productData.price * productData.quantity;
      state.quantity -= productData.quantity;
      state.items.splice(productFromCartIndex, 1);
    },
  },

  actions: {
    addProductToCart(context, payload) {
      const productId = payload.id;
      const products = context.rootGetters["products/products"];
      const product = products.find((product) => product.id === productId);
      context.commit("addProductToCart", product);
    },

    removeProductFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
};
