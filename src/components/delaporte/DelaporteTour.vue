<template>
  <section id="tour">
    <router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">
      <h1 class="title">Tour</h1>
    </router-link>
    <div class="concert-row">
      <div class="concert-date subtitle">Fecha</div>
      <div class="concert-city subtitle">Ciudad</div>
      <div class="concert-venue subtitle">Lugar</div>
      <div class="concert-tickets subtitle">Entradas</div>
    </div>
    <div class="concerts-container">
      <div v-for="concert in concertsData" :key="concert.id" class="concert-row">
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
              class="unable-btn tickets-btn"
              @click.prevent="showPastConcertMessage(concert.id)"
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

// Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIRESTORE_SDK_KEY)

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Initialize Firestore database
const db = getFirestore(app)

// Reactive state for concerts data
const concertsData = ref([])

// Reactive state for showing messages for past concerts
const showMessage = ref({})

// Function to fetch concerts data from Firestore
async function fetchConcerts() {
  const querySnapshot = await getDocs(collection(db, 'concerts'))
  concertsData.value = querySnapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    .sort((a, b) => Number(a.id) - Number(b.id))
}

const getTicketLink = (concert) => {
  return concert['tickets-link']
}

// Function to handle click on past concert's buy button
function showPastConcertMessage(concertId) {
  showMessage.value[concertId] = true
  // TODO: Delete setTimeout, make it like before
  setTimeout(() => {
    showMessage.value[concertId] = false
  }, 1000)
}

// Fetch concerts data when component is mounted
onMounted(fetchConcerts)
</script>
<style>
#tour {
  min-width: 100%;
  height: auto;
  padding: var(--padding-medium) var(--padding-small);
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid grey;
  margin-bottom: var(--margin-large);
}

.concerts-container {
  display: flex;
  flex-direction: column;
}

.concert-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: var(--margin-small);
}

.concert-date,
.concert-city,
.concert-venue,
.concert-tickets {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
  font-size: 1.2rem;
  opacity: 0.97;
}

.tickets-btn {
  width: 8rem;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  opacity: 0.97;
  padding: var(--padding-small) var(--padding-medium);
  background-color: var(--background-primary);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
}

.able-btn:hover {
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  cursor: pointer;
}

.unable-btn:hover {
  cursor: not-allowed;
  color: var(--color-secondary);
}

/* TODO: I don't like the effect that does, fix it */
.message {
  color: var(--color-secondary);
  font-size: 0.8rem;
  margin-top: var(--margin-xsmall);
  animation: fadeOut 2s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}

@media screen and (max-width: 780px) {
  .concert-venue {
    display: none;
  }

  .concert-date,
  .concert-city,
  .concert-tickets {
    margin-top: 0;
    white-space: nowrap;
    font-size: 0.9rem;
  }
  .tickets-btn {
    max-width: 5.5rem;
    font-size: 1rem;
    padding: var(--padding-small);
  }
  .message {
    font-size: 0.7rem;
  }
}
</style>
