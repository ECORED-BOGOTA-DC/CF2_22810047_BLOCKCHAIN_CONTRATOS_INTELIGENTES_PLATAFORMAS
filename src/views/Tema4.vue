<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Desplegar Contratos Inteligentes
    
    .row.justify-content-center.align-items-center.BGIMG04.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Los contratos inteligentes van a funcionar sobre redes de #[em blockchain] como las de #[em Ethereum], para todos los casos, cualquier consulta, envío de información o transacción va a requerir del uso de la red y de los gas o comisiones que ello conlleva, de acuerdo con esto, desarrollar un contrato inteligente necesitaría muchos recursos dada las pruebas y validaciones que se tienen que hacer antes de desplegar en una red oficial o de producción, para lograrlo, anteriormente se había presentado e instalado la plataforma de desarrollo denominada #[em Ganache], sobre la cual se puede  hacer las pruebas correspondientes antes de realizar su despliegue en una red oficial.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img01.png")
    
    p Con el fin de presentar el proceso de desarrollo y despliegue de un contrato inteligente, se parte de un contrato sencillo con una funcionalidad básica de sumar un valor a una variable declarada internamente, permitiendo consultar el valor final almacenado.

    .BGIMG05.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-8         
          .BGB03.p-2(data-aos="fade-right")
            .h5.text-center.mb-0 Modelo de contrato inteligente básico para pruebas
          .BG06.p-4(data-aos="fade-right")
            p.texto-verde.mb-2 //COMPILADOR
            p.text-white.mb-4 pragma solidity ^0.6.5;
            p.texto-verde.mb-4 //IMPORTAR OTROS CONTRATOS, INTERFACES O LIBRERIAS
            p.texto-verde.mb-2 //CUERPO DEL CONTRATO
            p.text-white.mb-4 contract PrimerContrato{
            p.texto-verde.mb-4 &nbsp;&nbsp;&nbsp;&nbsp;//LIBRERIAS
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//DECLARACION DE VARIABLES
            p.text-white.mb-4 &nbsp;&nbsp;&nbsp;&nbsp;uint private myValue;
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//EVENTOS
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//Registra los eventos del programa
            p.text-white.mb-4 &nbsp;&nbsp;&nbsp;&nbsp;event LogSetMyValue (uint _myNewValue, address _sender);
            p.texto-verde.mb-4 &nbsp;&nbsp;&nbsp;&nbsp;//MODIFICADORES
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//CONSTRUCTOR
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;constructor(uint _myValue) public {
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myValue = _myValue;
            p.text-white.mb-4 &nbsp;&nbsp;&nbsp;&nbsp;}
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//FUNCIONES
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//Lee el valor de la variable myValue
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;function getMyValue() public view returns (uint) {
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return myValue;
            p.text-white.mb-4 &nbsp;&nbsp;&nbsp;&nbsp;}
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;//Modifica el valor de la variable _myNewValue
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;function setMyValue( uint _myNewValue) public {
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myValue = _myNewValue;
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emit LogSetMyValue(myValue, msg.sender);
            p.text-white.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;}
            p.text-white.mb-2 }
    
    p.text-center A continuación, se revisa el proceso para desplegarlo en la red de pruebas y desarrollo, así como en una red de producción.
              
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Entorno de prueba y desarrollo
    
    p.mb-5 Para realizar la programación y teste del contrato inteligente en una red de pruebas, se puede hacer uso de la plataforma #[em Ganache] o también del IDE Remix de #[em Ethereum], para lo cual se debe dirigir a la URL: <a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">https://remix.ethereum.org</a>, en donde se podrá crear un #[em workspace] o espacio de trabajo para cada proyecto, por ejemplo, en la siguiente figura 20 se muestra cómo se crea un #[em workspace] denominado “SENA”.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 20
          span Creación de #[em  Workspace] en Remix #[em Ethereum] IDE
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img02.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>
    
    p.mb-5 Al crear este #[em workspace] genera una estructura de archivos base como se muestra en la siguiente figura 21, pero no es necesario seguirla o utilizarla:
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 21
          span Estructura de archivos de un #[em Workspace]
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img03.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>
    
    p.mb-5 A continuación, se procede a crear el primer archivo del contrato, para el  caso del ejemplo será el archivo denominado “PrimerContrato.sol” (ver figura 22). 
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 22
          span Creación de un archivo en el #[em Workspace]
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img04.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>
    
    p.mb-5 Ahora bien, dentro del archivo que se ha creado, se puede codificar el contrato inteligente, en este caso se va a pegar un contrato de prueba (ver figura 23).
    .BGM12.px-md-5.px-4.py-4.my-4
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 23
            span Codificación de un contrato inteligente
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/img05.jpg")
            figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>
    
    p.mb-5 Una vez se haya codificado el contrato inteligente, se puede ir a la opción de Compilación y seleccionar el entorno de compilación con el cual se va a ejecutar el contrato inteligente, entre la información a configurar se encuentra:
    
    ImagenInfografica.color-acento-botones.mb-4(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/img06.svg')

      .BG10.p-3(x="45%" y="50%" numero="1")
        p.text-white.mb-0 Entre las cuales podemos seleccionar versiones no muy recientes, como tampoco muy antiguas, esto debe ir en relación con la versión solicitada en la cabecera del contrato inteligente.
      .BG10.p-3(x="65%" y="50%" numero="2")
        p.text-white.mb-0 Seleccionar Solidity.
      .BG10.p-3(x="87%" y="50%" numero="3")
        p.text-white.mb-0 Seleccionar la opción “Auto compile”: esta opción permite compilar el código mientras se escribe.
        
    p.mb-5 Existen más opciones, pero no son relevantes para el ejercicio, así que se puede hacer clic en el botón de compilación, para validar el código (ver figura 24). 
    .BGIMG02.px-md-5.px-4.py-4.my-4
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 24
            span Opciones de compilación de un contrato inteligente
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/img04.jpg")
            figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>

    p Una vez realizada la compilación, si no se presentan problemas, se puede proceder a realizar el despliegue del contrato inteligente en nuestra red de pruebas, para ello, se procede a hacer clic en el botón de Compilación de #[em Solidity], en donde se pueden seleccionar algunos elementos necesarios para realizar el despliegue del contrato inteligente:
    
    ImagenInfografica.color-acento-botones(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/img08.svg')

      .BGR03.p-3(x="7.5%" y="58.8%" numero="1")
        .h5.texto-secundario.mb-2 1. #[em Enviroment]/ Entorno
        p.mb-0 Entorno de ejecución, dado que estamos haciendo pruebas, podremos hacer uso de la opción “Javascripc VM” en cualquiera de sus versiones, esto nos lleva a trabajar sobre redes de prueba y que podemos utilizar recursos no reales.
      .BGR03.p-3(x="14.3%" y="20.3%" numero="2")
        .h5.texto-secundario.mb-2 2. #[em Account]/ Cuenta
        p.mb-0 Este entorno nos proporciona una serie de cuentas, con recursos disponibles, pero este recurso será únicamente de prueba y no será útil en una red de #[em blockchain] real, podemos escoger cualquiera de las cuentas que cuente con saldo.
      .BGR03.p-3(x="76%" y="19.8%" numero="3")
        .h5.texto-secundario.mb-2 3. #[em Contract]/ Contrato
        p.mb-0 En esta opción vamos a seleccionar el archivo del contrato inteligente que acabamos de crear, para proceder con la compilación.
      .BGR03.p-3(x="76%" y="69.1%" numero="4")
        .h5.texto-secundario.mb-2 4. Inicialización de variables
        p.mb-0 Para este caso, vamos a inicializar la variable que utilizamos en cero “0”.
    
    p.mb-5 Finalmente se puede hacer clic en el botón “#[em Deploy]” con el cual se desplega el contrato seleccionado, y será visible dentro de la red (ver figura 25).
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 25
          span Despliegue del contrato sobre la red
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img09.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>
    
    p En la siguiente figura 26 se visualiza el contrato inteligente desplegado, con una dirección visible a través de la red, y con los métodos codificados en el ejemplo.
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 26
          span Consulta del contrato inteligente desplegado
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img10.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>
    
    p Como se observa, hacer uso de estas herramientas permite codificar, validar y testear los contratos inteligentes sin gastar recurso real, permitiendo corregir errores antes de llevarlos a una red de producción de #[em blockchain].
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Entorno de ejecución
    
    .row.justify-content-center.align-items-center
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Así como se realiza el despliegue de un contrato inteligente en una red de pruebas, también se puede hacer uso de una de producción, estas redes trabajan con la de #[em blockchain] e interactúan con otros contratos inteligentes y #[em DApps] para ofrecer y consumir información, obviamente esto conlleva a que cada transacción haga uso de sus redes y requerirá de una comisión o Gas para poder llevar a cabo la transacción.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Es importante tener presente que la tecnología #[em blockchain] es una tecnología en desarrollo y día a día están surgiendo cambios que pueden llevar a que los procedimientos cambien o los gastos por comisiones cambien su costo, por lo que al actualizarse esta tecnología y explorar las nuevas funcionalidades estas soluciones se pueden implementar en los entornos empresariales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img11.png')

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
