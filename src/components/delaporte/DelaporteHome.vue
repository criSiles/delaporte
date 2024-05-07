<template>
  <img class="gif" :src="gifPath" />
</template>

<script>
export default {
  props: {
    gifPath: String
  }
}
</script>

<style>
.gif {
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 1rem 4rem;
}
</style>
