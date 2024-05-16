<template>
  <section id="header">
    <HamburgerComponent />
    <div class="header_logo">
      <img :src="logoPath" alt="Delaporte logo" />
    </div>
    <ul class="social_icons">
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
import HamburgerComponent from '@/components/delaporte/HamburgerComponent.vue'

defineProps({
  logoPath: String,
  twitterPath: String,
  instagramPath: String,
  facebookPath: String,
  spotifyPath: String,
  youtubePath: String
})
</script>
<style>
#header {
  background-color: var(--bg-secondary);
  color: #fff;
  padding: 1rem 4rem;
  min-height: 66px;
  width: 100%;
  height: 66px;
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
  margin-left: 5.5rem;
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
</style>
