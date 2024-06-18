<template>
  <section id="tour">
    <router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">
      <h1 class="title">Tour</h1>
    </router-link>
    <div class="concerts-container">
      <div class="dates">
        <h1 class="subtitle">Fechas</h1>
        <div v-for="concert in concertsData.concerts" :key="concert.id" class="concerts-list">
          <div>{{ concert.date }}</div>
        </div>
      </div>
      <div class="cities">
        <h1 class="subtitle">Ciudades</h1>
        <div v-for="concert in concertsData.concerts" :key="concert.id" class="concerts-list">
          <div class="cities">{{ concert.city }}</div>
        </div>
      </div>
      <div class="venues">
        <h1 class="subtitle">Lugar</h1>
        <div v-for="concert in concertsData.concerts" :key="concert.id" class="concerts-list">
          <div class="venues">{{ concert.venue }}</div>
        </div>
      </div>
      <div class="tickets-container">
        <h1 class="subtitle">Entradas</h1>
        <div v-for="concert in concertsData.concerts" :key="concert.id" class="concerts-list">
          <a :href="getTicketLink(concert)">
            <button v-if="!concert.past" :class="{ 'able-btn': true, 'tickets-btn': true }">
              Comprar
            </button>
            <button
              v-else
              :class="{ 'unable-btn': isButtonDisabled, 'tickets-btn': true }"
              @click.prevent="handleButtonClick"
            >
              Comprar
            </button>
            <div v-if="showMessage" class="message">Concierto pasado</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const concertsData = ref({ concerts: [] })
const showMessages = ref([])
const isButtonDisabled = ref(true)

const getTicketLink = (concert) => {
  return concert['tickets-link']
}

onMounted(async () => {
  const response = await fetch('/data/concertsDb.json')
  const data = await response.json()
  concertsData.value = data
  showMessages.value = data.concerts.map(() => false)
})
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

.dates,
.cities,
.venues {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex: 1 1 17%;
  margin-top: 1rem;
  color: var(--text-primary);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  opacity: 0.97;
  margin-top: 1rem;
}

.tickets-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex: 1 1 17%;
  margin-top: 1.1rem;
}

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

/* TODO: Align the buttons with the rest */
.tickets-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-primary);
  background-color: var(--background-primary);
  color: var(--text-primary);
  border-radius: 5px;
  width: 8rem;
  font-size: 1.2rem;
  opacity: 0.97;
  margin-top: 1rem;
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

  .venues {
    display: none;
  }
  .dates,
  .cities,
  .tickets {
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
