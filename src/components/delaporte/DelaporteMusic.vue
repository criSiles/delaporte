<template>
  <section id="music">
    <router-link class="nav-links" :to="{ path: '/', hash: '#music' }">
      <h1 class="title">Música</h1>
    </router-link>
    <ul class="discography_gallery">
      <li class="album_container">
        <a :href="spotifyPathAlbum1">
          <img class="album_image" :src="album1" />
          <i class="fab fa-spotify spotify_icon"></i
        ></a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum2">
          <img class="album_image" :src="album2" />
          <i class="fab fa-spotify spotify_icon"></i
        ></a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum3">
          <img class="album_image" :src="album3" />
          <i class="fab fa-spotify spotify_icon"></i
        ></a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum4">
          <img class="album_image" :src="album4" />
          <i class="fab fa-spotify spotify_icon"></i
        ></a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum5">
          <img class="album_image" :src="album5" />
          <i class="fab fa-spotify spotify_icon"></i
        ></a>
      </li>
    </ul>
  </section>
</template>
<script setup>
defineProps({
  album1: String,
  album2: String,
  album3: String,
  album4: String,
  album5: String,
  spotifyPathAlbum1: String,
  spotifyPathAlbum2: String,
  spotifyPathAlbum3: String,
  spotifyPathAlbum4: String,
  spotifyPathAlbum5: String
})
</script>
<style scoped>
#music {
  width: 100%;
  height: auto;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  border-top: 0.5px solid grey;
}

.discography_gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.album_container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}

.album_container a {
  text-decoration: none;
}

.album_image {
  width: 90%;
  height: 90%;
  margin: 1rem 1rem;
  z-index: 0;
}

.spotify_icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.album_image:hover {
  opacity: 0.5;
  cursor: pointer;
}

.album_container:hover .spotify_icon {
  display: flex;
  z-index: 1;
  color: var(--text-primary);
  font-size: 2rem;
}

@media screen and (max-width: 780px) {
  .discography_gallery {
    grid-template-rows: none;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>
