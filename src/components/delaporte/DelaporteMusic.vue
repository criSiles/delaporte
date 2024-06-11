<template>
  <section id="music">
    <router-link class="nav-links" :to="{ path: '/', hash: '#music' }">
      <h1 class="title">Música</h1>
    </router-link>
    <ul class="discography_gallery">
      <li class="album_container">
        <a :href="spotifyPathAlbum1">
          <img class="album_image" :src="album1" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum2">
          <img class="album_image" :src="album2" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum3">
          <img class="album_image" :src="album3" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum4">
          <img class="album_image" :src="album4" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="spotifyPathAlbum5">
          <img class="album_image" :src="album5" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
    </ul>
    <div class="video_container">
      <VideoPlayer
        videoUrl="https://www.youtube.com/watch?v=cErpuQKIt4M&ab_channel=DelaporteVEVO"
      />
      <VideoPlayer
        videoUrl="https://www.youtube.com/watch?v=GwDzuKRen_8&ab_channel=DelaporteVEVO"
      />
      <VideoPlayer
        videoUrl="https://www.youtube.com/watch?v=9ShtaVkL9VU&ab_channel=DelaporteVEVO"
      />
    </div>
    <div class="buttons_container">
      <a :href="spotifyPath">
        <button class="btn"><i class="fab fa-spotify btn_icon"></i>Spotify</button>
      </a>
      <a :href="youtubePath">
        <button class="btn"><i class="fab fa-youtube btn_icon"></i>Youtube</button>
      </a>
    </div>
  </section>
</template>

<script setup>
import VideoPlayer from '@/components/delaporte/VideoPlayer.vue'

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
  spotifyPathAlbum5: String,
  spotifyPath: String,
  youtubePath: String
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
  padding-top: 3rem;
}

.discography_gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding-top: 1rem; */
}

.album_container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex: 1 1 17%;
  margin: 1rem;
}

.album_container a {
  text-decoration: none;
}

.album_image {
  width: 100%;
  height: auto;
  margin: 1rem 0;
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

.video_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.buttons_container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.btn {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-secondary);
  border-radius: 5px;
  max-width: 8rem;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  cursor: pointer;
}

.btn_icon {
  margin-right: 0.5rem;
}

.btn:hover {
  opacity: 0.8;
}

@media screen and (max-width: 780px) {
  .discography_gallery {
    justify-content: center;
    padding-left: 0;
  }

  .album_container {
    flex: 1 1 100%;
  }
}
</style>
