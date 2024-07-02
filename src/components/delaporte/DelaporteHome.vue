<template>
  <section id="home">
    <img
      class="gif"
      alt="Delaporte Aqui y Ahora gif"
      :srcset="srcset"
      :sizes="sizes"
      :style="{ transform: `scale(${scaleFactor})` }"
      loading="lazy"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      scaleFactor: 1,
      srcset: `
        photos/AquiAhoraGif-300x300.gif 300w,
        photos/AquiAhoraGif-790x790.gif 790w,
        photos/AquiAhoraGif-1080x1080.gif 1080w
      `,
      sizes: '(max-width: 300px) 300px, (max-width: 790px) 790px, (max-width: 1080px) 1080px, 100vw'
    }
  },
  created() {
    this.preloadGif(this.gifPath) // Call preloadGif method when component is created
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
    },
    preloadGif(gifPath) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = gifPath
      document.head.appendChild(link)
    }
  }
}
</script>

<style>
#home {
  margin-top: var(--margin-large);
}

.gif {
  width: 100%;
  max-width: 100%;
  height: auto;
  padding-top: var(--padding-medium);
}
</style>
