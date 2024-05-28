<template>
  <section id="contact">
    <router-link class="nav-links" :to="{ path: '/', hash: '#contact' }">
      <h1 class="title">Contacto</h1>
    </router-link>
    <p>
      Para contactar con Delaporte, puedes hacerlo a través de su página web oficial, donde
      encontrarás toda la información necesaria para ponerte en contacto con ellos. También puedes
      seguirlos en sus redes sociales, donde comparten información sobre sus próximos conciertos,
      lanzamientos y novedades.
    </p>
  </section>
</template>

<style>
#contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem 4rem;
  font-family: 'Roboto', sans-serif;
  border-top: 0.5px solid grey;
  padding-top: 3rem;
}

#contact p {
  font-size: 1.2rem;
  line-height: 1.5;
}

#contact .concerts {
  margin-top: 2rem;
  text-align: center;
}

#contact a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: bold;
}

#contact a:hover {
  color: var(--text-secondary);
}
</style>
