<template>
  <section id="bio">
    <router-link class="nav-links" :to="{ path: '/', hash: '#bio' }"
      ><h1 class="title">Biografía</h1>
    </router-link>
    <div class="text_container" v-html="bioText"></div>
    <div class="img_container">
      <img :src="delaportePhoto1" alt="Sandra sticking her tongue out at Sergio" />
      <img :src="delaportePhoto2" alt="Sandra and Sergio laying down" />
      <img :src="delaportePhoto3" alt="Sandra and Sergio smiling" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  delaportePhoto1: String,
  delaportePhoto2: String,
  delaportePhoto3: String,
  delaportePhoto4: String,
  bioText: String
})
</script>

<style>
#bio {
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

.text_container {
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.img_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}
.img_container img {
  width: 95%;
  height: auto;
  margin: 1rem 1rem;
}

@media screen and (max-width: 780px) {
  .img_container {
    grid-template-columns: repeat(1, 1fr);
  }
  .text_container {
    font-size: 1rem;
  }

  .img_container img {
    width: 100%;
  }
}
</style>
