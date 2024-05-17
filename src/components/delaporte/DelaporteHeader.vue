<template>
  <section id="header">
    <HamburgerComponent />
    <div class="header_logo">
      <img :src="logoPath" alt="Delaporte logo" />
    </div>
    <button class="social_button" v-if="isMobile" @click="showIcons = !showIcons">
      <i class="fas fa-link"></i>
    </button>
    <ul class="social_icons" v-show="!isMobile || showIcons">
      <li>
        <a :href="twitterPath"><i class="fab fa-twitter"></i></a>
      </li>
      <li>
        <a :href="instagramPath"><i class="fab fa-instagram"></i></a>
      </li>
      <li>
        <a :href="facebookPath"><i class="fab fa-facebook"></i></a>
      </li>
      <li>
        <a :href="spotifyPath"><i class="fab fa-spotify"></i></a>
      </li>
      <li>
        <a :href="youtubePath"><i class="fab fa-youtube"></i></a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HamburgerComponent from '@/components/delaporte/HamburgerComponent.vue'

defineProps({
  logoPath: String,
  twitterPath: String,
  instagramPath: String,
  facebookPath: String,
  spotifyPath: String,
  youtubePath: String
})

const isMobile = ref(false)
const showIcons = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
<style>
#header {
  background-color: var(--bg-secondary);
  color: #fff;
  padding: 1rem 4rem;
  min-height: 64px;
  width: 100%;
  height: 64px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
}

.header_logo img {
  width: 140px;
  max-height: 66px;
}

.social_icons {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.social_icons li a {
  color: #fff;
}

.social_icons li a:hover {
  color: #b53033;
}

.social_button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-secondary);
  border: none;
  color: #fff;
}

@media (max-width: 600px) {
  .social_icons {
    margin-top: 10rem;
    margin-right: -2rem;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
