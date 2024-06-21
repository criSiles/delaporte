<template>
  <section id="contact">
    <router-link class="nav-links" :to="{ path: '/', hash: '#contact' }">
      <h1 class="title">Contacto</h1>
    </router-link>
    <div class="contact-mails">
      <div class="mail-container">
        <h2 class="subtitle">Información</h2>
        <div class="info-container">
          <i class="fa fa-envelope mail-icon" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailInfo }}">{{ mailInfo }}</a>
        </div>
      </div>
      <div class="mail-container">
        <h2 class="subtitle">Management</h2>
        <div class="info-container">
          <i class="fa fa-envelope mail-icon" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailManagement }}">{{ mailManagement }}</a>
        </div>
      </div>
      <div class="mail-container">
        <h2 class="subtitle">Contratación</h2>
        <div class="info-container">
          <i class="fa fa-envelope mail-icon" aria-hidden="true"></i>
          <a class="mail" href="mailto:{{ mailHiring }}">{{ mailHiring }}</a>
        </div>
      </div>
      <div class="mail-container">
        <h2 class="subtitle">Prensa</h2>
        <div class="info-container">
          <i class="fa fa-envelope mail-icon" aria-hidden="true"></i>
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
  width: 100%;
  height: auto;
  padding: var(--padding-medium) var(--padding-large);
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid grey;
  margin-bottom: var(--margin-large);
}

.contact-mails {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
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
  padding: 0rem var(--padding-small);
  min-width: 16rem;
  max-width: 22rem;
  color: var(--color-primary);
}

.mail {
  display: flex;
  margin: var(--margin-small) 0;
}

.mail:hover {
  color: var(--color-secondary);
}

.mail-icon {
  margin-right: var(--margin-xsmall);
}

@media screen and (max-width: 780px) {
  .contact-mails {
    flex-direction: column;
    flex-wrap: nowrap;
  }
}
</style>
