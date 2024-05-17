<template>
  <section id="tour">
    <router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">
      <h1 class="title">Tour</h1>
    </router-link>
    <p>
      Delaporte es un grupo que se caracteriza por ofrecer espectáculos en directo llenos de energía
      y pasión. A lo largo de su carrera, han recorrido numerosos escenarios de todo el mundo,
      compartiendo su música con miles de seguidores. Si quieres disfrutar de su directo, no te
      pierdas las fechas de su próxima gira.
    </p>
    <p class="concerts">
      <a href="https://linktr.ee/delaportemusic">Próximos conciertos</a>
    </p>
  </section>
</template>
<style>
#tour {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem 4rem;
  font-family: 'Roboto', sans-serif;
  border-top: 0.5px solid grey;
}

#tour p {
  font-size: 1.2rem;
  line-height: 1.5;
}

#tour .concerts {
  margin-top: 2rem;
  text-align: center;
}
</style>
