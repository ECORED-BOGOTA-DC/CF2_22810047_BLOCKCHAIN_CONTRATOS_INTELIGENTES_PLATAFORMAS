<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Los contratos inteligentes ofrecen funcionalidades de intercambio de información a través de redes de #[em blockchain], estos contratos permiten extender las funcionalidades tanto de flexibilidad y seguridad de la información dado que se ejecutan bajo protocolos seguros propios de estas redes de #[em blockchain], heredando las bondades de confiabilidad, disponibilidad y autenticidad de la misma. Se debe observar la introducción al componente formativo en el siguiente video.

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
