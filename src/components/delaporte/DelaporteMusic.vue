<template>
  <section id="music">
    <router-link class="nav-links" :to="{ path: '/', hash: '#music' }">
      <h1 class="title">Música</h1>
    </router-link>
    <ul class="discography_gallery">
      <li class="album_container">
        <a :href="props.spotifyPathAlbum1">
          <img class="album_image" :src="props.album1" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="props.spotifyPathAlbum2">
          <img class="album_image" :src="props.album2" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="props.spotifyPathAlbum3">
          <img class="album_image" :src="props.album3" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="props.spotifyPathAlbum4">
          <img class="album_image" :src="props.album4" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
      <li class="album_container">
        <a :href="props.spotifyPathAlbum5">
          <img class="album_image" :src="props.album5" />
          <i class="fab fa-spotify spotify_icon"></i>
        </a>
      </li>
    </ul>
    <div class="video_container">
      <VideoPlayer :videoUrl="videoUrl1" />
      <VideoPlayer :videoUrl="videoUrl2" />
      <VideoPlayer :videoUrl="videoUrl3" />
    </div>
    <div class="buttons_container">
      <a :href="props.spotifyPath">
        <button class="btn"><i class="fab fa-spotify btn_icon"></i>Spotify</button>
      </a>
      <a :href="props.youtubePath">
        <button class="btn"><i class="fab fa-youtube btn_icon"></i>Youtube</button>
      </a>
    </div>
  </section>
</template>

<script setup>
import VideoPlayer from '@/components/delaporte/VideoPlayer.vue'

const props = defineProps({
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
  youtubePath: String,
  videoUrl1: String,
  videoUrl2: String,
  videoUrl3: String
})
</script>

<style>
#music {
  width: 100%;
  height: auto;
  padding: var(--padding-medium) var(--padding-large);
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid grey;
  margin-bottom: var(--margin-large);
}

.discography_gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.album_container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex: 1 1 17%;
  margin: var(--margin-small);
}

.album_container a {
  text-decoration: none;
}

.album_image {
  width: 100%;
  height: auto;
  margin: var(--margin-small) 0;
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
  color: var(--color-primary);
  font-size: 2rem;
}

.video_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: var(--margin-medium) var(--margin-large);
}

.buttons_container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 780px) {
  .discography_gallery {
    justify-content: center;
    padding-left: 0;
  }

  .album_container {
    flex: 1 1 100%;
  }
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
