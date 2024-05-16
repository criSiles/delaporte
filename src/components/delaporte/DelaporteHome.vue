<template>
  <section id="home">
    <img
      class="gif"
      id="sticky-parallax-header"
      :src="gifPath"
      :style="{ transform: `scale(${scaleFactor})` }"
    />
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
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const maxScroll = 1200
      const scale = Math.max(0, (maxScroll - window.scrollY) / maxScroll)
      console.log(scrollY, scale)
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
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 1rem 4rem;
  transition: transform 0.5s;
}
</style>
