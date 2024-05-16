<template>
  <section id="home">
    <img class="gif" :src="gifPath" :style="{ transform: `scale(${scaleFactor})` }" />
  </section>
</template>

<script>
export default {
  props: {
    gifPath: String
  },
  data() {
    return {
      scaleFactor: 1
    }
  },
  mounted() {
    //  window is the global object in a browser context, representing the window containing the DOM document
    // addEventListener and removeEventListener are methods JS methods, where 'scroll' is the event type and 'handleScroll' is the event handler
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll is a method that changes the scale of the gif based on the window's scroll position
    handleScroll() {
      const MAX_SCROLL = 2400
      const scale = Math.max(0, (MAX_SCROLL - window.scrollY) / MAX_SCROLL)
      this.scaleFactor = scale
    }
  }
}
</script>

<style>
#home {
  margin-top: 3rem;
}
.gif {
  margin-top: 0rem;
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 1rem 4rem;
  /* transition: transform 0.2s; */
}
</style>
