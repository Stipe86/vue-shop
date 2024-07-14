<template>
  <header>
    <h1>
      <router-link to="/">VueShop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <span class="cart__counter">{{ cartQuantity }}</span>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLoggedIn" @click="login">Login</button>
      <button v-else @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters["cart/quantity"];
    },
    isLoggedIn() {
      return this.$store.getters.userIsAuthenticated;
    },
  },

  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}

.cart__counter {
  padding: 0.15rem 1.25rem;
  background-color: #45006d;
  color: white;
  margin: 0 0.75rem;
  border-radius: 30px;
}
</style>
