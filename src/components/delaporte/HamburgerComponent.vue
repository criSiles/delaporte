<template>
  <div id="menu">
    <ul
      id="menu-items"
      :style="{ transform: !isCheckboxChecked ? 'translateX(0)' : 'translateX(140%)' }"
    >
      <li>
        <router-link class="nav-links" :to="{ path: '/', hash: '#bio' }">Biografía</router-link>
      </li>
      <li>
        <router-link class="nav-links" :to="{ path: '/', hash: '#music' }">Música</router-link>
      </li>
      <li><router-link class="nav-links" :to="{ path: '/', hash: '#tour' }">Tour</router-link></li>
      <li>
        <router-link class="nav-links" :to="{ path: '/', hash: '#shop' }">Tienda</router-link>
      </li>
      <li>
        <router-link class="nav-links" :to="{ path: '/', hash: '#contact' }">Contacto</router-link>
      </li>
    </ul>
    <div id="hamburger" class="menu-container menu-size">
      <input
        id="menu-checkbox"
        class="absolute menu-size"
        type="checkbox"
        v-model="isCheckboxChecked"
      />
      <div id="hamburger-lines" class="absolute menu-size">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheckboxChecked: false
    }
  }
}
</script>
<style>
#menu {
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
}
#menu-items {
  background-color: var(--bg-secondary);
  height: 100vh;
  width: 100%;
  padding-top: 10rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  top: 0rem;
  right: 138.5vw;
  z-index: 2;
}
#menu-items li {
  list-style: none;
}
.nav-links {
  text-decoration: none;
  list-style: none;
  margin-right: 1rem;
  font-size: 2rem;
  color: #fff;
}

.nav-links:hover {
  text-decoration: none;
  color: #b53033;
}

#menu-checkbox {
  display: inline-block;
  cursor: pointer;
  opacity: 0;
  z-index: 4;
}

input[id='menu-checkbox']:checked ~ #hamburger-lines .line1 {
  transform: rotate(45deg);
}

input[id='menu-checkbox']:checked ~ #hamburger-lines .line2 {
  transform: scaleY(0);
}

input[id='menu-checkbox']:checked ~ #hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.menu-container {
  margin: auto;
  position: relative;
}

.menu-size {
  width: 1rem;
  height: 1rem;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

#hamburger-lines {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  position: absolute;
  z-index: 3;
}

#hamburger-lines .line {
  display: block;
  height: 0.15rem;
  width: 100%;
  border-radius: 0.625rem;
  background: #fff;
}

#hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

#hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

#hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}
</style>
