<template>
  <div>
    <ul v-for="product in products" :key="product.id">
      <li>
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          // image:
          //   "https://upload.wikimedia.org/wikipedia/commons/6/6d/Gongga_Snow_Mountain_Cloud_On_Foot_Mountaineer.jpg",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e6/Wall_tent_in_the_snow_elk_mountain_tents.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 20px 0;
  border: 1px solid #ccc;
  padding: 10px;
}

img.product-image {
  width: 640px;
  height: 426px;
  object-fit: cover;
}
</style>
