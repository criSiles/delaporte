<template>
  <section id="bio">
    <router-link class="nav-links" :to="{ path: '/', hash: '#bio' }"
      ><h1 class="title">Biografía</h1>
    </router-link>
    <p class="text-container" v-html="props.bioText"></p>
    <div class="img-container">
      <img
        :srcset="srcsetLengua"
        sizes="(max-width: 256px) 256px, (max-width: 910px) 910px, (max-width: 1290px) 1290px, (max-width: 1580px) 1580px, (max-width: 1820px) 1820px, 100vw"
        alt="Sandra sticking her tongue out at Sergio"
        loading="lazy"
      />
      <img
        :srcset="srcsetTumbados"
        sizes="(max-width: 256px) 256px, (max-width: 910px) 910px, (max-width: 1290px) 1290px, (max-width: 1580px) 1580px, (max-width: 1820px) 1820px, 100vw"
        alt="Sandra and Sergio laying down"
        loading="lazy"
      />
      <img
        :srcset="srcsetSonriendo"
        sizes="(max-width: 256px) 256px, (max-width: 910px) 910px, (max-width: 1290px) 1290px, (max-width: 1580px) 1580px, (max-width: 1820px) 1820px, 100vw"
        alt="Sandra and Sergio smiling"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['bioText'])
import { ref } from 'vue'

const srcsetLengua = ref(
  `/photos/lengua-256x192.avif 256w,
  /photos/lengua-910x683.avif 910w,
  /photos/lengua-1290x968.avif 1290w,
  /photos/lengua-1580x1185.avif 1580w,
  /photos/lengua-1820x1365.avif 1820w
  `
)

const srcsetTumbados = ref(`
  /photos/tumbados-256x192.avif 256w,
  /photos/tumbados-910x683.avif 910w,
  /photos/tumbados-1290x968.avif 1290w,
  /photos/tumbados-1580x1185.avif 1580w,
  /photos/tumbados-1820x1365.avif 1820w
`)

const srcsetSonriendo = ref(`
  /photos/sonriendo-256x192.avif 256w,
  /photos/sonriendo-910x683.avif 910w,
  /photos/sonriendo-1290x968.avif 1290w,
  /photos/sonriendo-1580x1185.avif 1580w,
  /photos/sonriendo-1820x1365.avif 1820w
`)
</script>

<style>
#bio {
  width: 100%;
  height: auto;
  padding: var(--padding-medium) var(--padding-xlarge);
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid grey;
  margin-bottom: var(--margin-large);
}

.text-container {
  margin: var(--margin-small) 0;
}

.img-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}

.img-container img {
  width: 95%;
  height: auto;
  margin: var(--margin-small) 0;
}

@media screen and (max-width: 780px) {
  #bio {
    padding: var(--padding-medium) var(--padding-large);
  }
  .img-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .img_container img {
    width: 100%;
  }
}
</style>
