<template>
  <section id="header">
    <div class="header_section start">
      <HamburgerComponent />
    </div>
    <div class="header_section center">
      <router-link :to="{ path: '/', hash: '#home' }">
        <div class="header_logo">
          <img :src="logoPath" alt="Delaporte logo" />
        </div>
      </router-link>
    </div>
    <div class="header_section end">
      <button
        class="social_button"
        v-if="isMobile"
        @click="showIcons = !showIcons"
        :style="{ 'margin-right': showIcons ? '1rem' : '0' }"
      >
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
    </div>
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
  // When the window is resized, run the checkMobile function
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
<style>
#header {
  background-color: var(--bg-primary);
  color: var(--text-primary);
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
.header_section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.header_section.start {
  justify-content: flex-start;
}

.header_section.center {
  justify-content: center;
}

.header_section.end {
  justify-content: flex-end;
}

.header_logo img {
  width: 140px;
  max-height: 66px;
  margin: auto;
}

.social_icons {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.social_icons li a {
  color: var(--text-primary);
}

.social_icons li a:hover,
.social_button:hover {
  color: var(--text-secondary);
}

.social_button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-primary);
  border: none;
  color: var(--text-primary);
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
