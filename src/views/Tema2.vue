<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plataforma Ethereum
    
    .row.justify-content-center.align-items-center.BGIMG03.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 La arquitectura de #[em blockchain] de Ethereum es una de las más grandes y de las más utilizadas en proyectos de aplicaciones y contratos inteligentes sobre #[em blockchain], su nivel de innovación y que ha dispuesto las herramientas necesarias para que la comunidad de desarrolladores y usuarios puedan hacer uso de la misma de manera fácil, su propuesta de Ethereum Virtual Machine (EVM) brinda una máquina virtual con la cual puede dar inicio al desarrollo y construcción de proyectos bajo esta plataforma. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img01.png")
      
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 EVM Ethereum Virtual Machine
    
    p.mb-5 Es importante comprender inicialmente ¿qué es una máquina virtual?, consiste en un elemento compuesto por aplicaciones de #[em software] que realiza la emulación de un dispositivo real, aprovechando los recursos #[em hardware] de un dispositivo para servir diferentes sistemas o aplicaciones, como se puede apreciar en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5
          span Máquinas Físicas vs Máquinas Virtuales
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img02.svg")
          figcaption.text-center Nota. <a style="font-weight: 400">SENA (2022).</a>
    
    p.mb-5 Una máquina virtual tiene la capacidad de emular todas las funciones de un computador normal y esta va de acuerdo con los recursos de la maquina principal y de la distribución de recursos que le sean asignados, como son: ajustes de procesamiento, memoria RAM, almacenamiento, tráfico, entre otros más. Gracias a esto, puede ejecutar aplicaciones específicas sin dificultar el desarrollo normal de las demás máquinas virtuales.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-lg-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img03.jpg')})`}" data-aos="fade-right"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Ethereum Virtual Machine (EVM), es una máquina con #[em software] diseñado para emular un mecanismo con funciones y capacidades que posibilitan el desarrollo de actividades relacionadas con la red de #[em blockchain] de Ethereum.
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img04.png")
      .col-lg-8(data-aos="fade-left")
        p Esta máquina virtual posibilita el desarrollo de aplicaciones, ya que está construida en el lenguaje especializado de alto nivel llamado Solidity. A través de este lenguaje de programación se facilita la creación de contratos inteligentes. En primer lugar, se transforma el código Solidity a los códigos de operación (OP_CODES) y luego a un #[em bytecode]. Este #[em bytecode] se ejecuta por parte de la EVM para realizar las operaciones especificadas en un contrato inteligente. Esto hace que la EVM pueda funcionar como un computador de verdad, ejecutando desde las más sencillas hasta las más complejas operaciones.
        p.mb-0 A continuación, se presentan algunas de las características más relevantes de la EVM:
  
    ImagenInfografica.color-acento-botones.mb-4(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img05.svg')

      .BGR03.p-3(x="14%" y="67.5%" numero="1")
        .h5.texto-secundario.mb-2 1. Ayuda a proporcionar un alto nivel de seguridad
        p.mb-0 Al ser una máquina virtual con limitaciones en las instrucciones y en la forma en cómo se ejecutan, EVM es capaz de ejecutar códigos no confiables sin consecuencias desastrosas.
      .BGR03.p-3(x="18.7%" y="38.5%" numero="2")
        .h5.texto-secundario.mb-2 2. EVM es una construcción completamente descentralizada
        p.mb-0 Cada nodo dentro de la red Ethereum ejecuta una copia de esta máquina virtual en conjunto y sincronía con el resto de nodos que forman la red. Esto garantiza que las instrucciones dadas las EVM se ejecuten siempre y cuando exista al menos un nodo en activo. Esto permite el acceso a dicho sistema desde cualquier parte del mundo, resistiendo la censura y garantizando el acceso a los recursos de la red. Además, no requiere de la participación de terceros, tampoco pueden ser modificadas ni alteradas.
      .BGR03.p-3(x="39.2%" y="14%" numero="3")
        .h5.texto-secundario.mb-2 3. La EVM permite el desarrollo de una mayor cantidad de aplicaciones
        p.mb-0 Permite que éstas puedan ejecutarse sobre una misma red #[em blockchain], sin afectar otras operaciones. Lo vemos claramente en el funcionamiento de las DApps de Ethereum y su explosión de desarrollo hasta la actualidad.
      .BGR03.p-3(x="81.7%" y="38.5%" numero="4")
        .h5.texto-secundario.mb-2 4. EVM es capaz de hacer realidad a los #[em smart contracts] o contratos inteligentes de #[em Turing] completo
        p.mb-0 Estas son programaciones específicas e invariables que pueden ejecutarse y hacerse cumplir por sí mismos, de una manera autónoma y automática.
      .BGR03.p-3(x="86.2%" y="67.5%" numero="5")
        .h5.texto-secundario.mb-2 5. La EVM posee la capacidad de ejecutar una serie de códigos de operación u OP_CODES bien definidos
        p.mb-0 Fuera de estos códigos la EVM no es capaz de realizar absolutamente nada. Pero para que esta ejecución sea posible, dichos OP_CODES deben transformarse en #[em bytecode] o código máquina. Esto permite que EVM tenga un mayor rendimiento en la realización de operaciones en comparación con aproximaciones como las de #[em Bitcoin].

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Instalación y Configuración

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La red de Ethereum está abierta a la creación de nuevos nodos, además posibilita agregarse a la red de bloques, si es de nuestro interés, tan solo se debe hacer uso de sus herramientas para realizar un enlace, a continuación, se debe revisar cómo se realiza la creación de un nodo para la red Ethereum.
        p Para explicar la instalación y configuración básica de una red de bloques basada en Ethereum, se debe utilizar la solución Ganache, la cual es una aplicación que permite implementar un entorno de pruebas y simulación de una red basada en Ethereum. Se debe realizar la instalación como se explica a continuación.      
        p.mb-0 Para obtener Ganache, se debe dirigir a su página oficial: <a style="color: #8628A5" href="https://trufflesuite.com/ganache/" target="_blank">https://trufflesuite.com/ganache/</a> y descargar la versión para Windows que se presenta por defecto, también se puede encontrar el instalador de la aplicación para otros sistemas operativos como Mac y Linux (ver figura 6).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img06.svg')
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 6
          span Página oficial para descargar la aplicación Ganache
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img07.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://trufflesuite.com/ganache/" target="_blank">https://trufflesuite.com/ganache/</a>

    p.mb-5 Se descargará un paquete de instalación, al cual basta con darle doble clic para iniciar su instalación, así se iniciará una interfaz para abrir el asistente de instalación de Windows (ver figura 7).


    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 7
          span Lanzamiento de la instalación de Ganache
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img08.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de </a><a style="color: #8628A5" href="https://trufflesuite.com/ganache/" target="_blank">https://trufflesuite.com/ganache/</a>

    p Se puede dejar marcada la opción de “Iniciar cuando esté listo” para que se realice el inicio tan pronto se termine la instalación.
    p.mb-5 A continuación, se abrirá la interfaz de Ganache y la primera vez, solicitará la confirmación para compartir información con #[em Google Analytics]; se puede dejar marcado para apoyar el proyecto y hacer clic en el botón “#[em Continue]”.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8
          span Primer inicio de la aplicación Ganache
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img09.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    p.mb-5 A continuación, se presentará la ventana de los #[em workspaces], en la cual, se puede seleccionar la opción New Workspace y hacer clic en la flecha para desplegar las opciones; se debe elegir la opción Ethereum y finalmente en el botón New Workspace, como se muestra en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 9
          span Selección del tipo de #[em workspace] a crear
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img10.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    p.mb-5 Posteriormente, se continúa con las opciones para personalizar el #[em workspace], en la primera pestaña de Workspace, se debe ingresar el nombre del espacio de trabajo, como se muestra en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 10
          span Ingreso del nombre del espacio de trabajo
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img11.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p En la pestaña Server se puede personalizar el servicio para la conexión a la red #[em blockchain], en la cual es posible configurar:
          ul.lista-ul--color
            li
              i.fas.fa-cube(style="color: #FFD800;")
              p.mb-0 <a style="font-weight: 900">Hostname</a>: selección de las interfaces de red por las que se necesita la conexión a la red #[em blockchain], si es el caso que otros dispositivos requieran conectarse a la red, se debe seleccionar “0.0.0.0 All Interfaces”.
            li
              i.fas.fa-cube(style="color: #FFD800;")
              p.mb-0 <a style="font-weight: 900">Port Number</a>: número del puerto TCP que permitirá la conexión remotamente.
            li
              i.fas.fa-cube(style="color: #FFD800;")
              p.mb-0 <a style="font-weight: 900">Network ID</a>: número de identificador de la red #[em blockchain].
            li
              i.fas.fa-cube(style="color: #FFD800;")
              p.mb-0 <a style="font-weight: 900">Automine</a>: para establecer si se realizara el auto minado.
            li
              i.fas.fa-cube(style="color: #FFD800;")
              p.mb-0 <a style="font-weight: 900">Error on Transaction Failure</a>: presenta mensajes de error cuando una transacción no puede llevarse a cabo.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.p-2.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img12.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 11
          span Ingreso del nombre del espacio de trabajo
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img13.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    .row.justify-content-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img14.svg")
      .col-lg-10(data-aos="fade-left")
        p En la pestaña de cuentas y claves, se pueden configurar las cuentas que serán creadas en la red, y se establecen los siguientes parámetros, como se indica a continuación:
        ul.lista-ul--color
          li
            i.fas.fa-cube(style="color: #FFD800;")
            p.mb-0 <a style="font-weight: 900; color: #8628A5;">Account Default Balance.</a> Balance inicial en Ether de cada una de las cuentas
          li
            i.fas.fa-cube(style="color: #FFD800;")
            p.mb-0 <a style="font-weight: 900; color: #8628A5">Total, <a style="font-weight: 900">Accounts to Generate.</a></a> Cantidad de cuentas a crear
          li
            i.fas.fa-cube(style="color: #FFD800;")
            p.mb-0 <a style="font-weight: 900; color: #8628A5;">Autogenerate HD Mnemonic.</a> Seleccionar si se generará una llave privada o se le asignará una, en caso de seleccionar No. Se debe suministrar la llave.
          li
            i.fas.fa-cube(style="color: #FFD800;")
            p.mb-0 <a style="font-weight: 900; color: #8628A5;">Lock Accoounts.</a> Configura si las cuentas iniciarán en estado bloqueado.
    
    .h5.text-center.mb-5 En la siguiente imagen se muestra las cuentas requeridas para crear en la red, una vez se han tenido en cuenta los criterios indicados:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 12
          span Gestión de las cuentas para crear en la red
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img15.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    p.text-center En la pestaña Chain, se puede configurar el #[em hardfork] de la red, es decir sobre la versión base, así como los gastos por comisión Gas:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h3.text-center Gas Limit
              p.text-center.mb-0 Monto máximo por cada bloque o transacción, valor en Ether.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .text-white.p-4
              h3.text-center Gas Price
              p.text-center.mb-0 Precio por cada unidad de Gas, valor en WEI
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h3.text-center #[em HardFork]
              p.text-center.mb-0 Versión del #[em hardfork] para la red.

    .h5.text-center.mb-5 Esta configuración, se verá reflejada en el proceso que está llevando a cabo como se muestra en la figura a continuación:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 13
          span Configuración de la cadena y valor del Gas de comisión
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img19.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    .h5.text-center.mb-5 En la pestaña Advanced se pueden configurar los parámetros de logs y nuevamente configurar si se comparte información con Google Analytics, así:

    ImagenInfografica.color-acento-botones.mb-4(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img20.svg')

      .BG10.p-3(x="45%" y="50%" numero="1")
        p.text-white.mb-0 Determina si guardara los registros de log, si seleccionamos que si debemos indicar la ruta para su registro.
      .BG10.p-3(x="65%" y="50%" numero="2")
        p.text-white.mb-0 Permite logs con mayor detalle.
      .BG10.p-3(x="88%" y="50%" numero="3")
        p.text-white.mb-0 Configura si comparte información con #[em Google Analytics] o no.
  
    p.mb-5 Finalmente, cuando se haya realizado y revisado la configuración, se puede hacer clic en el botón Save Workspace, para iniciar el espacio de trabajo. Tal como se muestra en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 14
          span Configuración avanzada de la red y finalización de la configuración
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img21.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    p.mb-5 Una vez se haya culminado el proceso de configuración, se puede visualizar una interfaz del espacio de trabajo, sus cuentas y resumen de las transacciones realizadas, como se puede apreciar en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 15
          span Pantalla principal del espacio de trabajo configurado
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img22.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://trufflesuite.com/docs/ganache/quickstart/" target="_blank">https://trufflesuite.com/docs/ganache/quickstart/</a>

    .row.justify-content-center.mb-5
      .col-lg-10.BGR04
        .row.justify-content-center.align-items-center
          .col-lg-3.col-4.BGRS10.p-lg-5.p-4(data-aos="fade-right")
            img(src="@/assets/curso/tema2/img23.png")
          .col.p-4(data-aos="fade-left")
            p En esta aplicación Ganache se logra realizar simulaciones, pruebas, crear contratos inteligentes e incluso interconectar con otros servicios como billeteras para consultar el saldo, se invita a explorar. 
            p.mb-0 En caso de que el #[em hardware] con el que se cuenta no tenga las capacidades para que Ganache funcione, se podrá hacer uso de una aplicación web que permite probar los contratos inteligentes sin necesidad de instalaciones, esta se llama Remix Ethereum IDE y se puede acceder desde la url: <a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">https://remix.ethereum.org</a>  
  
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 16
          span Remix Ethereum IDE
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img24.jpg")
          figcaption.text-center Nota. <a style="font-weight: 400">Adaptado de </a><a style="color: #8628A5" href="https://remix.ethereum.org" target="_blank">Remix - Ethereum IDE</a>

    p Este IDE web, presenta una interfaz general de compilador, un explorador de archivos de cada proyecto y un área de trabajo en donde se puede codificar los proyectos, es muy fácil de usar e intuitivo, además permite crear cuentas con recursos de prueba, necesarios para el desarrollo.
    p Estas dos soluciones pueden ser muy útiles para desarrollar y probar los contratos inteligentes sin gastar recursos reales bajo una red de #[em blockchain].

</template>

<script>
export default {
  name: 'Tema2',
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
