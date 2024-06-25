<template>
  <section id="bio">
    <router-link class="nav-links" :to="{ path: '/', hash: '#bio' }"
      ><h1 class="title">Biografía</h1>
    </router-link>
    <p class="text-container" v-html="bioText"></p>
    <div class="img-container">
      <img :src="props.delaportePhoto1" alt="Sandra sticking her tongue out at Sergio" />
      <img :src="props.delaportePhoto2" alt="Sandra and Sergio laying down" />
      <img :src="props.delaportePhoto3" alt="Sandra and Sergio smiling" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  delaportePhoto1: String,
  delaportePhoto2: String,
  delaportePhoto3: String,
  bioText: String
})
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
