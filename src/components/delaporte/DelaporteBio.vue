<template>
  <section id="bio">
    <router-link class="nav-links" :to="{ path: '/', hash: '#bio' }"
      ><h1 class="title">Biografía</h1>
    </router-link>
    <div class="bio_content">
      <div class="text_container" v-html="bioText"></div>
      <div class="img_container">
        <img :src="delaportePhoto1" />
        <img :src="delaportePhoto2" />
        <img :src="delaportePhoto3" />
      </div>
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
}

.img_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}
.img_container img {
  width: 60%;
  height: auto;
  margin: 1rem 1rem;
}

.text_container {
  font-size: 1.2rem;
  line-height: 1.5;
}

@media screen and (max-width: 780px) {
  .img_container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
