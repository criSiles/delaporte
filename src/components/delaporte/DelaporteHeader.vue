<template>
  <section id="header">
    <div class="header__container">
      <div class="header_nav">=</div>
      <div class="header__logo">
        <img src="/src/assets/LogoDelaporte.png" alt="Delaporte logo" />
      </div>
      <ul class="social_icons">
        <!-- TODO:  -->
        <!-- <li>
                <font-awesome-icon icon="fa-brands fa-spotify" />
              </li> -->

        <!-- The X icon doesn't work -->
        <!-- <li>
            <i class="fab fa-x-twitter"></i>
          </li> -->
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
        <li>
          <i class="fa fa-envelope"></i>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
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
<style scoped>
#header {
  background-color: var(--bg-secondary);
  color: #fff;
  padding: 1rem;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo img {
  width: 100px;
}

.social_icons {
  margin: 0;
  padding: 0;
  color: #fff;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
</style>
