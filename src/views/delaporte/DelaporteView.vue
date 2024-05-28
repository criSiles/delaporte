<template>
  <DelaporteHome :gifPath="gifPath" />
  <DelaporteHeader
    :logoPath="logoPath"
    :twitterPath="twitterPath"
    :instagramPath="instagramPath"
    :facebookPath="facebookPath"
    :spotifyPath="spotifyPath"
    :youtubePath="youtubePath"
  />
  <DelaporteMusic
    :album1="album1"
    :album2="album2"
    :album3="album3"
    :album4="album4"
    :album5="album5"
    :spotifyPathAlbum1="spotifyPathAlbum1"
    :spotifyPathAlbum2="spotifyPathAlbum2"
    :spotifyPathAlbum3="spotifyPathAlbum3"
    :spotifyPathAlbum4="spotifyPathAlbum4"
    :spotifyPathAlbum5="spotifyPathAlbum5"
    :spotifyPath="spotifyPath"
    :youtubePath="youtubePath"
  />
  <DelaporteTour />

  <DelaporteBio
    :bioText="bioText"
    :delaportePhoto1="delaportePhoto1"
    :delaportePhoto2="delaportePhoto2"
    :delaportePhoto3="delaportePhoto3"
    :delaportePhoto4="delaportePhoto4"
  />
  <DelaporteShop />
  <DelaporteContact
    :mailInfo="mailInfo"
    :mailManagement="mailManagement"
    :mailHiring="mailHiring"
  />
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

// BIO
const bioText = `<p>Delaporte es un dúo hispano-italiano afincado en Madrid, formado por Sandra Delaporte y Sergio Salvi. Hoy en día están considerados una de las mejores bandas de pop electrónico en España. Su música es una mezcla de pop, electrónica y ritmos urbanos, aunque ha ido moviéndose más hacia el techno.</p>
<br><p>La discografía del grupo compone de varios álbumes, EPs y sencillos lanzados a lo largo de los años. Comenzaron en 2017 con su primer EP <b>One</b>, que incluía seis temas entre inglés y español. En 2018 sacaron su segundo EP <b>Uno</b> con canciones tan transcendentales para su carrera como <b>Un Jardín</b> y <b>Cariñito</b>. En 2019, lanzaron su primer álbum titulado <b>Como Anoche</b>, con el sencillo <b>Azul marino</b> como presentación, el cual obtuvo un notable éxito. Su siguiente álbum fue <b>Las Montañas</b>, lanzado en 2020. En 2021 pudimos escuchar dos discos increíbles, <b>Titanas</b> lleno de colaboraciones con mujeres del panorama musical actual en España y <b>Abril</b> en el que podemos descubrir canciones tan potentes como <b>Droga Dura</b>. Finalmente en 2024 lanzaron el álbum <b>Aqui y Ahora</b> con un tono más techno y que anima a bailar.</p>
<br> <p>Delaporte ha mantenido una producción constante y ha demostrado una evolución en su estilo musical a lo largo de su discografía. Su directo se puede describir como eneretizante e increiblemente acogedor.</p>`

const delaportePhoto1 = '/src/assets/lengua.jpg'
const delaportePhoto2 = '/src/assets/tumbados.jpg'
const delaportePhoto3 = '/src/assets/sonriendo.jpg'

// MUSIC

const album1 = '/src/assets/delaporte-como-anoche.jpeg'
const album2 = '/src/assets/delaporte-las-montanas.jpg'
const album3 = '/src/assets/delaporte-titanas.jpeg'
const album4 = '/src/assets/delaporte-abril.jpg'
const album5 = '/src/assets/delaporte-aqui-ahora.jpg'
const spotifyPathAlbum1 =
  'https://open.spotify.com/intl-es/album/0RIKn3aqDcZQWcJR2kTBvB?si=mwRHAefZQBmETN5Yqy3PFw'
const spotifyPathAlbum2 =
  'https://open.spotify.com/intl-es/album/1vLTjn72rGfaaR6AnoVxUj?si=Kqpi2ifSSAeOWYgAsi2ejA'
const spotifyPathAlbum3 =
  'https://open.spotify.com/intl-es/album/3IwETqVjASYVgJX0roCgHd?si=17uVUbhqT6aLYDit-RWdAA'
const spotifyPathAlbum4 =
  'https://open.spotify.com/intl-es/album/1SDB8j1wY6xzKSAGASJKWB?si=qCnuww-GS1KYZFn-1Tz-wA'
const spotifyPathAlbum5 =
  'https://open.spotify.com/intl-es/album/1jphrfgmheLuAI0T9E1SG4?si=PtzbIb03Rmy7R4xFk1lFCw'

// CONTACT
const mailInfo = 'delaporte@delaporte.es'
const mailManagement = 'dpereze@planetevents.es'
const mailHiring = 'efernandezd@planetevents.es'
</script>
