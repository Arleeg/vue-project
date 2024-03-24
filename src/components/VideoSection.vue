<template>
  <div class="video-container relative">
    <div class="youtube-overlay absolute">
      <h1>YouTube</h1>
    </div>

    <video loop autoplay muted>
      <source src="/src/img/Etna-Cine.mp4" type="video/mp4" />
      Il tuo browser non supporta il tag video.
    </video>
  </div>
</template>

<style scoped>
.video-container {
  width: 100%; /* Imposta la larghezza del contenitore al 100% della larghezza del viewport */
  height: 60vh; /* Imposta l'altezza del contenitore a 60vh */
  margin: auto; /* Centra il video */
  overflow: hidden; /* Nasconde il contenuto che sporge */
  display: flex; /* Utilizza flexbox per centrare il video */
  justify-content: center; /* Centra orizzontalmente il video nel contenitore */
  align-items: center; /* Centra verticalmente il video nel contenitore */
  position: relative; /* Imposta il contenitore come riferimento per il posizionamento assoluto */
}
video {
  width: 100%; /* Il video si adatta alla larghezza del contenitore */
  height: 60vh; /* Imposta l'altezza del video a 60vh */
  object-fit: cover; /* Copre l'area del contenitore, permettendo il ritaglio del video */
}
.youtube-overlay {
  position: absolute; /* Posiziona la scritta in modo assoluto all'interno del contenitore */


  left: 60px; /* Posiziona la scritta a sinistra nel contenitore */
  color: rgb(237, 237, 237); /* Imposta il colore del testo a bianco */
  font-size: 3rem; /* Imposta la dimensione del font */
  font-weight: bold; /* Rende il testo in grassetto */
  text-shadow: 2px 2px 4px #000000; /* Aggiunge ombre nere al testo */
}
</style>
