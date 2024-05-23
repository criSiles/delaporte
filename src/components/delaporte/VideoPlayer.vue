<template>
  <div class="video-container">
    <iframe
      :src="computedVideoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

// Define the props
const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  }
})

// Create a computed property to handle the video URL
const computedVideoUrl = computed(() => {
  // Ensure the URL is properly formatted for embedding
  const url = new URL(props.videoUrl)
  if (url.hostname === 'www.youtube.com' && url.pathname === '/watch') {
    const videoId = url.searchParams.get('v')
    return `https://www.youtube.com/embed/${videoId}`
  } else if (url.hostname === 'youtu.be') {
    const videoId = url.pathname.slice(1)
    return `https://www.youtube.com/embed/${videoId}`
  }
  return props.videoUrl
})
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
