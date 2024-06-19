<template>
  <section id="shop">
    <router-link class="nav-links" :to="{ path: '/', hash: '#shop' }">
      <h1 class="title">Tienda</h1>
    </router-link>
    <p>
      Delaporte tiene una gran variedad de productos de merchandasing. A continuación, te mostramos
      algunos de los productos más vendidos:
    </p>
    <div class="shop-container">
      <a href="https://onstage.es/delaporte/1564-sudadera-delaporte-aqui-y-ahora-negra.html">
        <div class="shop-item">
          <h3 class="subtitle">Sudadera</h3>
          <img src="/photos/hoodie.svg" alt="hoodie" />
        </div>
      </a>
      <a href="https://onstage.es/delaporte/1562-camiseta-delaporte-estoy-aqui-y-ahora-negra.html">
        <div class="shop-item">
          <h3 class="subtitle">Camiseta</h3>
          <img src="/photos/shirt.svg" alt="t-shirt" />
        </div>
      </a>
      <a href="https://onstage.es/delaporte/1569-vinilo-aqui-y-ahora-delaporte.html">
        <div class="shop-item">
          <h3 class="subtitle">Vinilo</h3>
          <img src="/photos/cd.svg" alt="cd" />
        </div>
      </a>
      <a href="https://onstage.es/delaporte/1376-taza-delaporte.html">
        <div class="shop-item">
          <h3 class="subtitle">Taza</h3>
          <img src="/photos/mug.svg" alt="mug" />
        </div>
      </a>
      <a href="https://onstage.es/delaporte/1568-tote-bag-delaporte-aqui-y-ahora.html">
        <div class="shop-item">
          <h3 class="subtitle">Bolsa</h3>
          <img src="/photos/bag.svg" alt="bag" />
        </div>
      </a>
      <a href="https://onstage.es/delaporte/1375-botella-aluminio-delaporte.html">
        <div class="shop-item">
          <h3 class="subtitle">Botella</h3>
          <img src="/photos/bottle.svg" alt="bottle" />
        </div>
      </a>
      <a href="https://onstage.es/delaporte/1566-chubasquero-delaporte-aqui-y-ahora-negro.html">
        <div class="shop-item">
          <h3 class="subtitle">chubasquero</h3>
          <img src="/photos/raincoat.svg" alt="raincoat" />
        </div>
      </a>
    </div>
    <p>Para ver el resto de productos entra en la tienda oficial:</p>
    <a href="https://onstage.es/578-delaporte"
      ><button class="btn"><i class="fas fa-shopping-cart btn_icon"></i>Tienda</button></a
    >
  </section>
</template>

<style>
#shop {
  width: 100%;
  height: auto;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  border-top: 0.5px solid grey;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
}
#shop p {
  padding-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.5;
}

.shop-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-bottom: 2rem;
}

.shop-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  margin-top: 0rem;
}

.shop-item img {
  width: 155px;
  height: 155px;
  padding: 2rem 2rem;
  border: 1px solid var(--text-secondary);
  border-radius: 6px;
}

.shop-item img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-secondary);
  border-radius: 5px;
  max-width: 8rem;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.btn_icon {
  margin-right: 0.5rem;
}

.btn:hover {
  opacity: 0.8;
}

@media screen and (max-width: 780px) {
  #shop p {
    font-size: 1rem;
  }
}
</style>
