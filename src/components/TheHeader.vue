<template>
  <header>
    <h1>VueShop</h1>
    <nav>
      <ul>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
    <div>
      <button>Login</button>
    </div>
  </header>
</template>

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
</style>
