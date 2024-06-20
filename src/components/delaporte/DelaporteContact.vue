<template>
  <section id="contact">
    <router-link class="nav-links" :to="{ path: '/', hash: '#contact' }">
      <h1 class="title">Contacto</h1>
    </router-link>
    <div class="contact-mails">
      <div class="mail-container">
        <h2 class="subtitle">Información</h2>
        <div class="info-container">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailInfo }}">{{ mailInfo }}</a>
        </div>
      </div>
      <div class="mail-container">
        <h2 class="subtitle">Management</h2>
        <div class="info-container">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailManagement }}">{{ mailManagement }}</a>
        </div>
      </div>
      <div class="mail-container">
        <h2 class="subtitle">Contratación</h2>
        <div class="info-container">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailHiring }}">{{ mailHiring }}</a>
        </div>
      </div>
      <div class="mail-container">
        <h2 class="subtitle">Prensa</h2>
        <div class="info-container">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailPress }}">{{ mailPress }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  mailManagement: String,
  mailHiring: String,
  mailInfo: String,
  mailPress: String
})

let mailManagement = props.mailManagement
let mailHiring = props.mailHiring
let mailInfo = props.mailInfo
let mailPress = props.mailPress
</script>

<style>
#contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem 4rem;
  border-top: 0.5px solid grey;
  padding-top: 3rem;
  margin-bottom: 3rem;
}

.contact-mails {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 3rem;
}

.mail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: rgb(130, 130, 130) 0.1rem solid;
  padding: 0rem 1rem;
  margin-bottom: 2rem;
  min-width: 20rem;
  color: var(--text-primary);
}

.mail {
  display: flex;
  margin: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.mail:hover {
  color: var(--text-secondary);
}

@media screen and (max-width: 780px) {
  .contact-mails {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .info-container {
    min-width: 16rem;
  }
  .mail {
    font-size: 1rem;
  }
}
</style>
