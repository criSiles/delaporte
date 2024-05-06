<template>
  <section id="header">
    <HamburgerComponent />
    <div class="header_logo">
      <img src="/src/assets/LogoDelaporte.png" alt="Delaporte logo" />
    </div>
    <ul class="social_icons">
      <!-- TODO:  -->
      <!-- <li>
                <font-awesome-icon icon="fa-brands fa-spotify" />
              </li> -->

      <!-- The X icon doesn't work -->
      <li>
        <i class="fab fa-twitter"></i>
      </li>
      <li>
        <i class="fab fa-instagram"></i>
      </li>
      <li>
        <i class="fab fa-facebook"></i>
      </li>
      <li>
        <i class="fab fa-spotify"></i>
      </li>
      <li>
        <i class="fab fa-youtube"></i>
      </li>
      <!-- <li>
          <i class="fa fa-envelope"></i>
        </li> -->
    </ul>
  </section>
</template>

<script setup>
import HamburgerComponent from '@/components/delaporte/HamburgerComponent.vue'

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
  color: #fff;
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>
