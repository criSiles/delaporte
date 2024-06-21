<template>
  <section id="shop">
    <router-link class="nav-links" :to="{ path: '/', hash: '#shop' }">
      <h1 class="title">Tienda</h1>
    </router-link>
    <p class="merch-p-1">
      Delaporte tiene una gran variedad de productos de merchandising. A continuación, te mostramos
      algunos de los productos más vendidos:
    </p>
    <div class="shop-container">
      <a v-for="product in productsData.products" :key="product.id" :href="product.url">
        <div class="shop-item">
          <!-- <h3 class="subtitle">{{ product.title }}</h3> -->
          <img :src="product.imgSrc" :alt="product.title" />
        </div>
      </a>
    </div>
    <p class="merch-p-2">Para ver todos los productos entra en la tienda oficial:</p>
    <a href="https://onstage.es/578-delaporte">
      <button class="btn"><i class="fas fa-shopping-cart btn_icon"></i>Tienda</button>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const productsData = ref({ products: [] })

onMounted(async () => {
  const response = await fetch('/data/productsDb.json')
  const data = await response.json()
  productsData.value = data
})
</script>
<style>
#shop {
  width: 100%;
  height: auto;
  padding: var(--padding-medium) var(--padding-large);
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid grey;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: var(--margin-large);
}

.shop-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: var(--margin-medium);
  margin-top: var(--margin-small);
}

.shop-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--margin-medium) var(--margin-small);
}

.shop-item img {
  width: 155px;
  height: 155px;
  padding: var(--padding-large) var(--padding-large);
  border: 1px solid var(--color-secondary);
  border-radius: 6px;
}

.shop-item img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.merch-p-2 {
  margin-bottom: var(--margin-small);
}
@media screen and (max-width: 780px) {
  .shop-container {
    display: none;
  }
  .merch-p-1 {
    display: none;
  }
}
</style>
