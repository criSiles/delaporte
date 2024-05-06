<template>
  <DelaporteHeader
    :logoPath="logoPath"
    :twitterPath="twitterPath"
    :instagramPath="instagramPath"
    :facebookPath="facebookPath"
    :spotifyPath="spotifyPath"
    :youtubePath="youtubePath"
  />
  <DelaporteHome :gifPath="gifPath" />
  <DelaporteBio />
  <DelaporteMusic />
  <DelaporteTour />
  <DelaporteShop />
  <DelaporteContact />
  <DelaporteFooter />
</template>

<script setup>
import DelaporteHeader from '@/components/delaporte/DelaporteHeader.vue'
import DelaporteHome from '@/components/delaporte/DelaporteHome.vue'
import DelaporteBio from '@/components/delaporte/DelaporteBio.vue'
import DelaporteMusic from '@/components/delaporte/DelaporteMusic.vue'
import DelaporteShop from '@/components/delaporte/DelaporteShop.vue'
import DelaporteTour from '@/components/delaporte/DelaporteTour.vue'
import DelaporteContact from '@/components/delaporte/DelaporteContact.vue'
import DelaporteFooter from '@/components/delaporte/DelaporteFooter.vue'

// HOME
const gifPath = '/src/assets/AquiAhoraGif.gif'

// HEADER
const logoPath = '/src/assets/LogoDelaporte.png'
const twitterPath = 'https://twitter.com/delaportemusic'
const instagramPath = 'https://www.instagram.com/delaporte.music/'
const facebookPath = 'https://www.facebook.com/delaportemusic/'
const spotifyPath =
  'https://open.spotify.com/artist/1GDip5phlxYzeZ36vnf9kJ?si=fhFG3X1oSJW9MV4Z_s042g&nd=1&dlsi=1ad5f987afc24492'
const youtubePath = 'https://www.youtube.com/channel/UCtXuLi6tQ4y50QxD3x19riQ'
</script>
