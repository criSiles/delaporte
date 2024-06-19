<template>
  <section id="tour">
    <router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">
      <h1 class="title">Tour</h1>
    </router-link>
    <div class="concert-row">
      <div class="concert-date subtitle">fecha</div>
      <div class="concert-city subtitle">Ciudad</div>
      <div class="concert-venue subtitle">lugar</div>
      <div class="concert-tickets subtitle">entradas</div>
    </div>
    <div class="concerts-container">
      <div v-for="concert in concertsData.concerts" :key="concert.id" class="concert-row">
        <div class="concert-date">{{ concert.date }}</div>
        <div class="concert-city">{{ concert.city }}</div>
        <div class="concert-venue">{{ concert.venue }}</div>
        <div class="concert-tickets">
          <a :href="getTicketLink(concert)">
            <button v-if="!concert.past" :class="{ 'able-btn': true, 'tickets-btn': true }">
              Comprar
            </button>
            <button
              v-else
              :class="{ 'unable-btn': true, 'tickets-btn': true }"
              @click.prevent="handleButtonClick(concert.id)"
            >
              Comprar
            </button>
            <div v-if="showMessage[concert.id]" class="message">Concierto pasado</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

console.log(import.meta.env.VITE_FIRESTORE_SDK_KEY)

const serviceAccount = JSON.parse(import.meta.env.VITE_FIRESTORE_SDK_KEY)

console.log(serviceAccount)

const app = initializeApp(serviceAccount)

const db = getFirestore(app)

const concertsData = ref({ concerts: [] })
const showMessage = ref({})

async function readDocuments() {
  const snapshot = await getDocs(collection(db, 'concerts'))

  if (snapshot.empty) {
    console.log('No matching documents.')
    return
  }

  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data())
  })
}

const getTicketLink = (concert) => {
  return concert['tickets-link']
}

const handleButtonClick = (concertId) => {
  showMessage.value[concertId] = !showMessage.value[concertId]
}

onMounted(async () => {
  const response = await fetch('/data/concertsDb.json')
  const data = await response.json()
  concertsData.value = data
  data.concerts.forEach((concert) => {
    showMessage.value[concert.id] = false
  })
  readDocuments().catch(console.error)
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
  flex-direction: column;
}

.concert-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
}

.concert-date,
.concert-city,
.concert-venue,
.concert-tickets {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  opacity: 0.97;
}

.tickets-btn {
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

  .concert-venue {
    display: none;
  }

  .concert-date,
  .concert-city,
  .concert-tickets {
    margin-top: 0;
    white-space: nowrap;
    font-size: 1rem;
  }
  .tickets-btn {
    max-width: 5.5rem;
    font-size: 1rem;
    padding: 0.4rem;
  }
  .message {
    font-size: 0.7rem;
  }
}
</style>
