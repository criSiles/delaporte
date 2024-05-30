<template>
  <section id="tour">
    <router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">
      <h1 class="title">Tour</h1>
    </router-link>
    <!-- TODO: Make a v-for and fetch the data od a json DB -->
    <!-- TODO: Improve CSS to DRY -->
    <div class="concerts-container">
      <div class="dates-container">
        <h1 class="subtitle">Fechas</h1>
        <div class="concerts-list">13.04.24</div>
        <div class="concerts-list">03.05.24</div>
        <div class="concerts-list">17.05.24</div>
        <div class="concerts-list">24.05.24</div>
        <div class="concerts-list">07.06.24</div>
        <div class="concerts-list">09.06.24</div>
        <div class="concerts-list">21.06.24</div>
        <div class="concerts-list">29.06.24</div>
        <div class="concerts-list">05.07.24</div>
        <div class="concerts-list">06.07.24</div>
        <div class="concerts-list">12.07.24</div>
        <div class="concerts-list">20.07.24</div>
        <div class="concerts-list">26.07.24</div>
        <div class="concerts-list">0X.08.24</div>
        <div class="concerts-list">11.08.24</div>
        <div class="concerts-list">30.08.24</div>
        <div class="concerts-list">06.09.24</div>
        <div class="concerts-list">13.09.24</div>
        <div class="concerts-list">12.10.24</div>
      </div>

      <div class="cities-container">
        <h1 class="subtitle">Ciudades</h1>
        <div class="concerts-list">Bilbao</div>
        <div class="concerts-list">Murcia</div>
        <div class="concerts-list">Sevilla</div>
        <div class="concerts-list">Málaga</div>
        <div class="concerts-list">Palencia</div>
        <div class="concerts-list">Tenerife</div>
        <div class="concerts-list">Albacete</div>
        <div class="concerts-list">Torrelavega</div>
        <div class="concerts-list">Ciudad Real</div>
        <div class="concerts-list">Madrid</div>
        <div class="concerts-list">Barcelona</div>
        <div class="concerts-list">Benicassim</div>
        <div class="concerts-list">Benidorm</div>
        <div class="concerts-list">Zaragoza</div>
        <div class="concerts-list">Sonorama</div>
        <div class="concerts-list">Cáceres</div>
        <div class="concerts-list">Ebro</div>
        <div class="concerts-list">Granada</div>
        <div class="concerts-list">Murcia</div>
      </div>
      <div class="venues-container">
        <h1 class="subtitle">Lugar</h1>
        <div class="concerts-list">Zeidfest Gaztea</div>
        <div class="concerts-list">Warm Up Festival</div>
        <div class="concerts-list">Interestelar</div>
        <div class="concerts-list">Oh, See! Festival</div>
        <div class="concerts-list">Palencia Sonora</div>
        <div class="concerts-list">Tenerife Music Festival</div>
        <div class="concerts-list">Antorchas Festival</div>
        <div class="concerts-list">Música en Grande</div>
        <div class="concerts-list">Oasis Sound</div>
        <div class="concerts-list">Río Babel</div>
        <div class="concerts-list">Cruïlla Festival</div>
        <div class="concerts-list">FIB</div>
        <div class="concerts-list">Low Festival</div>
        <div class="concerts-list">Festival Amante</div>
        <div class="concerts-list">Sonorama Ribera</div>
        <div class="concerts-list">Naturalsonora</div>
        <div class="concerts-list">Ebrovisión</div>
        <div class="concerts-list">Granada Sound</div>
        <div class="concerts-list">HermosaFest</div>
      </div>
      <div class="tickets-container">
        <h1 class="subtitle">Entradas</h1>
        <div v-for="(show, index) in showMessages" :key="index">
          <button class="concerts-list btn unable-btn" @click="toggleMessage(index)">
            Comprar
          </button>
          <div v-if="show" class="message">Concierto pasado</div>
        </div>
        <a href="https://www.palenciasonora.com/entradas/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://www.entradas.com/artist/tenerife-music-festival/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://antorchasfestival.com/#entradas">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://musicaengrande.es/entradas-de-dia/sabado-29">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://fanmusicfest.com/content/oasis-sound-festival-2024">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://festivalriobabel.com/rio-babel-home/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a
          href="https://www.cruillabarcelona.com/es/artists/delaporte/?utm_source=webartista&utm_medium=publino&utm_term=fanartista&utm_content=delaporte&utm_campaign=ce24artistes"
        >
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://fiberfib.com/abonos/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://lowfestival.es/abonos/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://festivalamante.org/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://www.sonoramaribera.com/entradas/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://www.giglon.com/todos?idEvent=abono-festival-navalsonora-2024">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://ebrovision.com/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://granadasound.com/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
        <a href="https://www.hermosafest.com/">
          <button class="concerts-list btn able-btn">Comprar</button>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const showMessages = ref([false, false, false, false])

const toggleMessage = (index) => {
  showMessages.value[index] = !showMessages.value[index]
}
</script>

<style>
#tour {
  min-width: 100%;
  height: auto;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  border-top: 0.5px solid grey;
  margin-bottom: 3rem;
}

.concerts-container {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
}

.dates-container,
.cities-container,
.venues-container,
.tickets-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex: 1 1 17%;
  margin-top: 1rem;
}

/* TODO: Make the words be align at the left */
.concerts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex: 1 1 17%;
  color: var(--text-primary);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  opacity: 0.97;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-primary);
  background-color: var(--background-primary);
  color: var(--text-primary);
  border-radius: 5px;
  width: 8rem;
  font-size: 1.2rem;
  opacity: 0.97;
}

.able-btn:hover {
  background-color: var(--text-secondary);
  border: 1px solid var(--text-secondary);
  cursor: pointer;
}

.unable-btn:hover {
  cursor: not-allowed;
  color: var(--text-secondary);
}

.message {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-top: 0.5rem;
}

@media screen and (max-width: 780px) {
  .subtitle {
    font-size: 0.8rem;
  }
  .concerts-list {
    font-size: 1rem;
  }

  .venues-container {
    display: none;
  }
  .dates-container,
  .cities-container,
  .tickets-container {
    margin-top: 0;
    white-space: nowrap;
  }

  .btn {
    max-width: 5.5rem;
    font-size: 1rem;
    padding: 0.4rem;
  }

  .message {
    font-size: 0.7rem;
  }
}
</style>
