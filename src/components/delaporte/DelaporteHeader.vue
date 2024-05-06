<template>
  <section id="header">
    <HamburgerComponent />
    <div class="header_logo">
      <img :src="logoPath" alt="Delaporte logo" />
    </div>
    <ul class="social_icons">
      <!-- TODO:  -->
      <!-- <li>
                <font-awesome-icon icon="fa-brands fa-spotify" />
              </li> -->

      <!-- The X icon doesn't work -->
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
// TODO: Why this doesn't work?

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fab)

// export default {
//   components: {
//     FontAwesomeIcon
//   }
// }
</script>
<style>
#header {
  background-color: var(--bg-secondary);
  color: #fff;
  margin-top: 0.2rem;
  padding: 1rem;
  min-height: 66px;
  height: 66px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_logo img {
  width: 140px;
  max-height: 66px;
  margin-left: 5.5rem;
}

.social_icons {
  margin: 0;
  padding: 0;
  /* TODO: Why is not applying? When I wrote the a this turned to purple */
  color: #fff;
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>
