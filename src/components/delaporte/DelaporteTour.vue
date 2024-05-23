<template>
  <section id="tour">
    <router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">
      <h1 class="title">Tour</h1>
    </router-link>
    <table>
      <!-- <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup> -->
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Ciudad</th>
          <th>Recinto</th>
          <th>Entradas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01.11.2024</td>
          <td>Málaga</td>
          <td>Auditorio Municipal</td>
          <td>Comprar</td>
        </tr>
        <tr>
          <td>01.11.2024</td>
          <td>Málaga</td>
          <td>Auditorio Municipal</td>
          <td>Comprar</td>
        </tr>
        <tr>
          <td>01.11.2024</td>
          <td>Málaga</td>
          <td>Auditorio Municipal</td>
          <td>Comprar</td>
        </tr>
        <tr>
          <td>01.11.2024</td>
          <td>Málaga</td>
          <td>Auditorio Municipal</td>
          <td>Comprar</td>
        </tr>
        <tr>
          <td>01.11.2024</td>
          <td>Málaga</td>
          <td>Auditorio Municipal</td>
          <td>Comprar</td>
        </tr>
      </tbody>
    </table>
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

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 1rem;
}
</style>
