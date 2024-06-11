<template>
  <section id="shop">
    <router-link class="nav-links" :to="{ path: '/', hash: '#shop' }">
      <h1 class="title">Tienda</h1>
    </router-link>
    <p>
      La tienda oficial de Delaporte está en proceso pero mientras podrás encontrar todo tipo de
      merchandising relacionado con el grupo, como camisetas, sudaderas, chubasqueros y mucho más en
      el siguiente enlace:
    </p>
    <p class="shop_link">
      <a href="https://onstage.es/578-delaporte">Merchandasing</a>
    </p>
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
  margin-bottom: 3rem;
}
#shop p {
  padding-top: 3rem;
  font-size: 1.2rem;
  line-height: 1.5;
}

#shop .shop_link {
  margin-top: 2rem;
  text-align: center;
}

@media screen and (max-width: 780px) {
  #shop p {
    font-size: 1rem;
  }
}
</style>
