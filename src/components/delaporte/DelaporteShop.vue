<template>
  <section id="shop">
    <h1 class="title">Tienda</h1>
    <p>
      En la tienda oficial de Delaporte podrás encontrar todo tipo de merchandising relacionado con
      el grupo, como camisetas, sudaderas, gorras, pósters y mucho más. Además, también podrás
      adquirir sus discos en formato físico y digital, así como entradas para sus próximos
      conciertos.
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
}
#shop p {
  font-size: 1.2rem;
  line-height: 1.5;
}

#shop .shop_link {
  margin-top: 2rem;
  text-align: center;
}

#shop a {
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
}

#shop a:hover {
  color: #b53033;
}
</style>
