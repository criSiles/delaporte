<template>
  <section id="contact">
    <router-link class="nav-links" :to="{ path: '/', hash: '#contact' }">
      <h1 class="title">Contacto</h1>
    </router-link>
    <div class="contact-info-container">
      <p class="mail">
        <a :href="twitterPath"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="mailto:{{ mailHiring }}">{{ mailHiring }}</a>
      </p>
    </div>
    <div class="contact-info-container">
      <p class="mail">
        <a :href="twitterPath"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="mailto:{{ mailManagement }}">{{ mailManagement }}</a>
      </p>
    </div>
    <div class="contact-info-container">
      <p class="mail">
        <a :href="twitterPath"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="mailto:{{ mailInfo }}">{{ mailInfo }}</a>
      </p>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  mailManagement: String,
  mailHiring: String,
  mailInfo: String
})

let mailManagement = props.mailManagement
let mailHiring = props.mailHiring
let mailInfo = props.mailInfo
</script>

<style>
#contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem 4rem;
  font-family: 'Roboto', sans-serif;
  border-top: 0.5px solid grey;
  padding-top: 3rem;
}
.contact-info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: rgb(130, 130, 130) 0.1rem solid;
  padding: 1rem 0.5rem;
  margin: 2rem;
  width: fit-content;
}

.mail {
  display: flex;
}

#contact a:hover {
  color: var(--text-secondary);
}
</style>
