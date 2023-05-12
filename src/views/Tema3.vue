<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Principios básicos de #[em Solidity]
    
    .row.justify-content-center.align-items-center.BGIMG04.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 #[em Solidity] es un lenguaje de alto nivel, orientado a contratos y de tipo estático para implementar contratos inteligentes en la plataforma #[em Ethereum], con el cual pueden generarse los contratos inteligentes bajo la red de #[em Ethereum], Su sintaxis es muy similar a la de lenguajes muy conocidos como C++ o #[em Javascript].
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")
    
    .h5.text-center.mb-5 Las siguientes son algunas características del lenguaje de programación #[em Solidity]:

    ImagenInfografica.color-acento-botones.mb-4(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/img02.svg')

      .BGR03.p-3(x="25%" y="12%" numero="1")
        .h5.texto-secundario.mb-2 1. Lenguaje
        p.mb-0 #[em Solidity] es un tipo de lenguaje orientado a objetos (OO) como C++ y C#.
      .BGR03.p-3(x="29%" y="31%" numero="2")
        .h5.texto-secundario.mb-2 2. Diseño y desarrollo de aplicaciones
        p.mb-0 Fue diseñado específicamente para desarrollar aplicaciones para la red #[em Ethereum]. Por lo que sólo corre en la #[em blockchain Ethereum] o derivadas compatibles.
      .BGR03.p-3(x="33%" y="50%" numero="3")
        .h5.texto-secundario.mb-2 3. Código fuente
        p.mb-0 Una ventaja que posee este lenguaje es que el código fuente de los programas que son realizados con el mismo puede ser accedido públicamente desde la #[em blockchain]. Incluso estando en #[em bytecode], es posible descompilarlo y obtener una muestra bastante clara del código fuente original.
      .BGR03.p-3(x="29%" y="69%" numero="4")
        .h5.texto-secundario.mb-2 4. Herencia y elementos complejos
        p.mb-0 #[em Solidity] soporta la herencia y la herencia múltiple, dotándolo de una gran flexibilidad a la hora de programar elementos complejos.
      .BGR03.p-3(x="25%" y="88%" numero="5")
        .h5.texto-secundario.mb-2 5. Bibliotecas
        p.mb-0 Este lenguaje también proporciona una serie de bibliotecas muy útiles que facilitan la programación de los contratos inteligentes, haciendo que el código sea reutilizable y más sencillo de mantener.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Expresiones
    
    p.mb-5 Los contratos en #[em Solidity] son semejantes a las clases de lenguajes orientados a objetos. Pueden contener declaraciones del tipo de variables de estado, funciones, modificadores de función, además de eventos, structs y enums. Algunas de las sintaxis más utilizadas en estos contratos son (ver figura 17):

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 17
          span Expresiones más usadas en #[em Solidity]
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/img03.svg")
    
    p A continuación, se encontrará una explicación detallada de cada una de estas expresiones, se invita a revisar el siguiente recurso educativo, en donde se explica lo correspondiente a las Variables:

    .BG11.p-4.mb-5(data-aos="fade-right")
      SlyderE
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Variables de estado
            p Variables cuyos valores se almacenan permanentemente en un almacenamiento de contrato. 
          .col-lg-8.order-lg-2.order-1.mb-lg-0.mb-4
            .BGB03.p-2
              .h5.text-center.mb-0 Definición y uso de variables de estado
            .BG06.p-4
              p.texto-celeste.mb-0 pragma solidity <span style="color:#FFF !important">^</span><span style="color:#BDCDA6 !important">0.5.0</span>;
                <br> contract <span style="color:#5573C6 !important">SolidityTest</span> <span style="color:#9D76B7 !important">&#123;</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> storedData<span style="color:#FFF !important">;</span>      <span style="color:#678F4E !important">//Definición variable de estado</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">constructor</span><span style="color:#9D76B7 !important">()</span> <span style="color:#84C0E2 !important">public</span> <span style="color:#9D76B7 !important">&#123;</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;storedData = 10<span style="color:#FFF !important">;</span>   <span style="color:#678F4E !important">//Uso de variable de estado</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
                <br> <span style="color:#9D76B7 !important">&#125;</span>

        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Variables locales
            p Variables cuyos valores están presentes hasta que la función se está ejecutando. 
          .col-lg-8.order-lg-2.order-1.mb-lg-0.mb-4
            .BGB03.p-2
              .h5.text-center.mb-0 Definición y uso de variables locales
            .BG06.p-4
              p.texto-celeste.mb-0 pragma solidity <span style="color:#FFF !important">^</span><span style="color:#BDCDA6 !important">0.5.0</span>;
                <br> contract <span style="color:#5573C6 !important">SolidityTest</span> <span style="color:#9D76B7 !important">&#123;</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> storedData; <span style="color:#678F4E !important">//Definición variable de estado</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">constructor</span><span style="color:#9D76B7 !important">()</span> <span style="color:#84C0E2 !important">public</span> <span style="color:#9D76B7 !important">&#123;</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;storedData <span style="color:#FFF !important">=</span> 10<span style="color:#FFF !important">;</span>   
                <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#5573C6 !important">function</span> <span style="color:#BDCDA6 !important">getResult</span><span style="color:#9D76B7 !important">()</span> <span style="color:#BDCDA6 !important">public view returns</span><span style="color:#9D76B7 !important">(</span>uint<span style="color:#9D76B7 !important">)</span><span style="color:#9D76B7 !important">&#123;</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> a <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">1</span><span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">//Definición de variable local</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> b <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">2</span><span style="color:#FFF !important">;</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> result <span style="color:#FFF !important">=</span> a <span style="color:#FFF !important">+</span> b<span style="color:#FFF !important">;</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">return</span> result<span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">//Uso de variable local</span>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
                <br><br> <span style="color:#9D76B7 !important">&#125;</span>

        .row.justify-content-center
          .col-lg-3.order-lg-1.order-2
            .h4 Variables globales
            p Existen variables especiales en el espacio de nombres global utilizado para obtener información sobre la cadena de bloques, como se puede apreciar en la siguiente tabla. 
          .col-lg-9.order-lg-2.order-1.mb-lg-0.mb-4
            .tabla-b.color-acento-contenido.mb-4
              table
                thead
                  tr
                    th(style="background-color: #DEFAFD; width: 37.5%; font-size: 18px").text-center Nombre de variable global
                    th(style="background-color: #DEFAFD; width: 62.5%; font-size: 18px").text-center Devuelve
                tbody
                  tr
                    th(style="background-color: #FFF") Blochash (uint blockNumber) returns (bytes 32)
                    td(style="background-color: #FFF") Hash del bloque dado: solo funciona para los bloques más recientes, excluyendo los actuales,
                  tr
                    th(style="background-color: #F6FEFF") block.coinbase (address payable)
                    td(style="background-color: #F6FEFF") Dirección actual del minero de bloques
                  tr
                    th(style="background-color: #FFF") block. difficulty (uint)
                    td(style="background-color: #FFF") Dificultad del bloque actual
                  tr
                    th(style="background-color: #F6FEFF") block.gaslimit (uint)
                    td(style="background-color: #F6FEFF") Límite de gas del bloque de corriente
                  tr
                    th(style="background-color: #FFF") block.number (uint)
                    td(style="background-color: #FFF") Número de bloque actual
                  tr
                    th(style="background-color: #F6FEFF") block.timestamp (uint)
                    td(style="background-color: #F6FEFF") Marca de tiempo de bloque actual como segundos desde la época de unix
                  tr
                    th(style="background-color: #FFF") gasleft() returns (uint256)
                    td(style="background-color: #FFF") Gas restante
                  tr
                    th(style="background-color: #F6FEFF") msg.data (bytes calldata)
                    td(style="background-color: #F6FEFF") Datos de llamada completos
                  tr
                    th(style="background-color: #FFF") msg.sender (address payable)
                    td(style="background-color: #FFF") Remitente del mensaje (persona que llama actualmente)
                  tr
                    th(style="background-color: #F6FEFF") msg.sig (bytes4)
                    td(style="background-color: #F6FEFF") Primeros cuatro bytes de los datos de llamada (identificador de función)
                  tr
                    th(style="background-color: #FFF") msg.value (uint)
                    td(style="background-color: #FFF") Número de wei enviados con el mensaje
                  tr
                    th(style="background-color: #F6FEFF") now (uint)
                    td(style="background-color: #F6FEFF") Marca de tiempo de bloque actual
                  tr
                    th(style="background-color: #FFF") tx.gasprice (uint)
                    td(style="background-color: #FFF") Precio del gas de la transacción
                  tr
                    th(style="background-color: #F6FEFF") tx.origin (address payable)
                    td(style="background-color: #F6FEFF") Remitente de la transacción

    .tarjeta-avatar-b.mb-5(data-aos="fade-right")
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema3/img04.svg')
      .tarjeta.color-secundario.ps-5.p-4
        .h5.ms-5 Como todo lenguaje de programación, presenta algunas recomendaciones en el momento de declarar variables, algunas de estas son:
        ul.lista-ul--color.ms-5
          li(style="margin-bottom: 2px;")
            i.fas.fa-cube(style="color: #FFD800")
            | No utilizar ninguna de las palabras clave reservadas de #[em Solidity] como nombre de variable.
          li(style="margin-bottom: 2px;")
            i.fas.fa-cube(style="color: #FFD800")
            | Los nombres de las variables de solidez no deben comenzar con un numeral (0-9). Deben comenzar con una letra o un carácter de subrayado. Por ejemplo, 123test es un nombre de variable no válido, pero _123test es válido.
          li(style="margin-bottom: 2px;")
            i.fas.fa-cube(style="color: #FFD800")
            | Los nombres de las variables distinguen entre mayúsculas y minúsculas. Por ejemplo, Nombre y nombre son dos variables diferentes.     
     
    .mb-4
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Alcance de las variables
    
    p El alcance de las variables locales se limita a la función en la que se definen, pero las variables de estado pueden tener tres tipos de ámbitos.

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.BG02.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.text-white.me-3
                i.fas.fa-caret-down.fa-2x.text-white.me-3
              h4.mb-0.text-white Public
            p.text-white.mb-0 Permite acceder a las variables de estado público tanto internamente como a través de mensajes. Para una variable de estado público.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.BG02.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.text-white.me-3
                i.fas.fa-caret-down.fa-2x.text-white.me-3
              h4.mb-0.text-white Internal
            p.text-white.mb-0 Solo permite el acceso a las variables de estado interno desde el contrato actual o el contrato derivado de él sin usar esto.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img07.svg' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.BG02.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.text-white.me-3
                i.fas.fa-caret-down.fa-2x.text-white.me-3
              h4.mb-0.text-white Private
            p.text-white.mb-0 Estas variables sólo pueden ser accedidas internamente desde el contrato actual que están definidas no en el contrato derivado del mismo.

    .h5.text-center.mb-5 La siguiente imagen da claridad frente a la definición y uso de alcance de las variables, establecido anteriormente (ver figura 18):
    
    .BGIMG05.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 18
            span Definición y uso de alcance de las variables
          
          .BGB03.p-2(data-aos="fade-right")
            .h5.text-center.mb-0 Definición y uso de alcance de las variables
          .BG06.p-4(data-aos="fade-right")
            p.texto-celeste.mb-0 pragma solidity <span style="color:#FFF !important">^</span><span style="color:#BDCDA6 !important">0.5.0</span>;
              <br> contract <span style="color:#5573C6 !important">C</span> <span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#BDCDA6 !important">uint</span> <span style="color:#BDCDA6 !important">public</span> data <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">30</span><span style="color:#FFF !important">;</span>
              <br><br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#BDCDA6 !important">uint</span> internal iData<span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">10</span><span style="color:#FFF !important">;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#5573C6 !important">function</span> x<span style="color:#9D76B7 !important">()</span> <span style="color:#BDCDA6 !important">public</span> <span style="color:#5573C6 !important">returns</span> <span style="color:#9D76B7 !important">(</span><span style="color:#BDCDA6 !important">uint</span><span style="color:#9D76B7 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; data <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">3</span><span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">// internal access</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#9D76B7 !important">return</span> data<span style="color:#FFF !important">;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#9D76B7 !important">&#125;</span>
              <br><br> <span style="color:#9D76B7 !important">&#125;</span>
              <br> contract <span style="color:#5573C6 !important">Caller</span> <span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#BDCDA6 !important">C</span> c <span style="color:#FFF !important">=</span> new <span style="color:#5573C6 !important">C</span><span style="color:#9D76B7 !important">()</span><span style="color:#FFF !important">;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#5573C6 !important">function</span> f<span style="color:#9D76B7 !important">()</span> <span style="color:#BDCDA6 !important">public</span> view <span style="color:#5573C6 !important">returns</span> <span style="color:#9D76B7 !important">(</span><span style="color:#BDCDA6 !important">uint</span><span style="color:#9D76B7 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#9D76B7 !important">return</span> c<span style="color:#FFF !important">.</span><span style="color:#BDCDA6 !important">data</span><span style="color:#9D76B7 !important">()</span><span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">//external access</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
              <br><br> <span style="color:#9D76B7 !important">&#125;</span>
              <br> contract <span style="color:#5573C6 !important">D</span> is <span style="color:#5573C6 !important">C</span> <span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#5573C6 !important">function</span> y<span style="color:#9D76B7 !important">()</span> <span style="color:#BDCDA6 !important">public</span> <span style="color:#5573C6 !important">returns</span> <span style="color:#9D76B7 !important">(</span><span style="color:#BDCDA6 !important">uint</span><span style="color:#9D76B7 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iData <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">3</span><span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">// internal access</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#9D76B7 !important">return</span> iData<span style="color:#FFF !important">;</span>
              <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#5573C6 !important">function</span> getResult<span style="color:#9D76B7 !important">()</span> <span style="color:#BDCDA6 !important">public</span> view <span style="color:#5573C6 !important">returns</span><span style="color:#9D76B7 !important">(</span><span style="color:#BDCDA6 !important">uint</span><span style="color:#9D76B7 !important">)</span><span style="color:#9D76B7 !important">&#123;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#BDCDA6 !important">uint</span> a <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">1</span><span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">// local variable</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#BDCDA6 !important">uint</span> b <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">2</span><span style="color:#FFF !important">;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#BDCDA6 !important">uint</span> result <span style="color:#FFF !important">=</span> a <span style="color:#FFF !important">+</span> b<span style="color:#FFF !important">;</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#9D76B7 !important">return</span> storedData<span style="color:#FFF !important">;</span> <span style="color:#678F4E !important">//access the state variable</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
              <br> <span style="color:#9D76B7 !important">&#125;</span>
    
    p Otra expresión a tener en cuenta son los #[strong Operadores]. Los operadores como su nombre lo indica, permiten realizar operaciones y asignaciones de valor entre variables, por ejemplo, en la siguiente expresión 5 + 7 es igual a 12. Aquí 5 y 7 se llaman operandos y ‘+’ se llama el operador. 
    p.mb-5 #[em Solidity] soporta diferentes tipos de operadores que se explican a continuación:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR04" data-aos="zoom-in")
      .row.justify-content-center(titulo="Operadores aritméticos")
        p #[em Solidity] admite los siguientes operadores aritméticos, Supongamos que la variable A tiene 10 y la variable B tiene 20, entonces revisemos la siguiente tabla de operadores aritméticos para ver cómo se comportan cada uno de ellos.
        .tabla-b.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Operador
                th(style="background-color: #DEFAFD; width: 50%; font-size: 18px").text-center Descripción y ejemplo
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px").text-center Ejemplo
            tbody
              tr
                th(style="background-color: #FFFFFF;") + Adición
                td(style="background-color: #FFFFFF;") Suma dos operandos
                td(style="background-color: #FFFFFF;") (A + N) = 30
              tr
                th(style="background-color: #F6FEFF;") - Resta
                td(style="background-color: #F6FEFF;") Resta el segundo operando del primero
                td(style="background-color: #F6FEFF;") (A - B) = -10
              tr
                th(style="background-color: #FFFFFF;") X Multiplicación
                td(style="background-color: #FFFFFF;") Multiplica ambos operandos
                td(style="background-color: #FFFFFF;") (A * B) = 200
              tr
                th(style="background-color: #F6FEFF;") / División
                td(style="background-color: #F6FEFF;") Dividir el numerador por el denominador
                td(style="background-color: #F6FEFF;") (B / A) = 2
              tr
                th(style="background-color: #FFFFFF;") % Mod.
                td(style="background-color: #FFFFFF;") Genera el resto de una división entera
                td(style="background-color: #FFFFFF;") (B % A) = 0
              tr
                th(style="background-color: #F6FEFF;") ++ Incremento
                td(style="background-color: #F6FEFF;") Aumenta un valor entero en uno
                td(style="background-color: #F6FEFF;") (A++) = 11
              tr
                th(style="background-color: #FFFFFF;") -- Decremento
                td(style="background-color: #FFFFFF;") Disminuye un valor entero en uno
                td(style="background-color: #FFFFFF;") (A--) = 9

      .row.justify-content-center(titulo="Operadores de comparación")
        p #[em Solidity] admite los siguientes operadores de comparación, Supongamos que la variable A contiene 10 y la variable B contiene 20, entonces, entonces revisemos la siguiente tabla de operadores de comparación para ver cómo se comportan cada uno de ellos.
        .tabla-b.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Operador
                th(style="background-color: #DEFAFD; width: 50%; font-size: 18px").text-center Descripción y ejemplo
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px").text-center Ejemplo
            tbody
              tr
                th(style="background-color: #FFFFFF;") == Igual
                td(style="background-color: #FFFFFF;") Comprueba si el valor de dos operandos es igual o no, en caso afirmativo, entonces la condición se convierte en verdadera.
                td(style="background-color: #FFFFFF;") (A == B) no es verdadero
              tr
                th(style="background-color: #F6FEFF;") ¡= No es igual
                td(style="background-color: #F6FEFF;") Comprueba si el valor de dos operandos es igual o no, si los valores no son iguales, entonces la condición se convierte en verdadera.
                td(style="background-color: #F6FEFF;") (A != B) es verdadero
              tr
                th(style="background-color: #FFFFFF;") &gt; Mayor que
                td(style="background-color: #FFFFFF;") Comprueba si el valor del operando izquierdo es mayor que el valor del operando derecho, en caso afirmativo, entonces la condición se convierte en verdadera.
                td(style="background-color: #FFFFFF;") (A &gt; B) no es verdadero
              tr
                th(style="background-color: #F6FEFF;") &lt; Menor que
                td(style="background-color: #F6FEFF;") Comprueba si el valor del operando izquierdo es menor que el valor del operando derecho, en caso afirmativo, entonces la condición se convierte en verdadero.
                td(style="background-color: #F6FEFF;") (A &lt; B) es verdadero
              tr
                th(style="background-color: #FFFFFF;") &gt;= Mayor o igual que
                td(style="background-color: #FFFFFF;") Comprueba si el valor del operando izquierdo es mayor o igual que el valor del operando derecho, en caso afirmativo, entonces la condición se convierte en verdadera.
                td(style="background-color: #FFFFFF;") (A &gt;=&lt;= B) no es verdadero
              tr
                th(style="background-color: #F6FEFF;") &lt;= Menor o Igual que
                td(style="background-color: #F6FEFF;") Comprueba si el valor del operando izquierdo es menor o igual que el valor del operando derecho, en caso afirmativo, entonces la condición se convierte en verdadera.
                td(style="background-color: #F6FEFF;") (A &lt;= B) es verdadero
      .row.justify-content-center(titulo="Operadores de lógicos")
        p #[em Solidity] admite los siguientes operadores lógicos, Supongamos que la variable A contiene 10 y la variable B contiene 20, entonces, entonces revisemos la siguiente tabla de operadores lógicos para ver cómo se comportan cada uno de ellos.
        .tabla-b.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Operador
                th(style="background-color: #DEFAFD; width: 50%; font-size: 18px").text-center Descripción y ejemplo
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px").text-center Ejemplo
            tbody
              tr
                th(style="background-color: #FFFFFF;") &amp;&amp; AND Lógico
                td(style="background-color: #FFFFFF;") Si ambos operandos son distintos de cero, entonces la condición se vuelve verdadera.
                td(style="background-color: #FFFFFF;") (A &amp;&amp; B) es verdadero
              tr
                th(style="background-color: #F6FEFF;") || OR Lógico
                td(style="background-color: #F6FEFF;") Si alguno de los dos operandos es distinto de cero, entonces la condición se convierte en verdadera.
                td(style="background-color: #F6FEFF;") (A || B) es verdadero
              tr
                th(style="background-color: #FFFFFF;") ! NOT Lógico
                td(style="background-color: #FFFFFF;") Invierte el estado lógico de su operando. Si una condición es true, el operador Lógico NOT la hará false.
                td(style="background-color: #FFFFFF;") !(A &gt; B) no es verdadero
      .row.justify-content-center(titulo="Operadores <em>bitwise</em>")
        p #[em Solidity] admite los siguientes operadores #[em bitwise], Supongamos que la variable A contiene 2 y la variable B contiene 3, entonces, entonces revisemos la siguiente tabla de operadores #[em bitwise] para ver cómo se comportan cada uno de ellos.
        .tabla-b.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Operador
                th(style="background-color: #DEFAFD; width: 50%; font-size: 18px").text-center Descripción y ejemplo
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px").text-center Ejemplo
            tbody
              tr
                th(style="background-color: #FFFFFF;") &amp; #[em Bitwise] AND
                td(style="background-color: #FFFFFF;") Realiza una operación booleana AND en cada bit de sus argumentos enteros.
                td(style="background-color: #FFFFFF;") (A &amp; B) = 2
              tr
                th(style="background-color: #F6FEFF;") | #[em Bitwise] OR
                td(style="background-color: #F6FEFF;") Realiza una operación OR booleana en cada bit de sus argumentos enteros.
                td(style="background-color: #F6FEFF;") (Un | B) = 3
              tr
                th(style="background-color: #FFFFFF;") ^ #[em Bitwise] XOR
                td(style="background-color: #FFFFFF;") Realiza una operación OR exclusiva booleana en cada bit de sus argumentos enteros. Exclusivo OR significa que el operando uno es verdadero o el operando dos es verdadero, pero no ambos.
                td(style="background-color: #FFFFFF;") (A ^ B) = 1
              tr
                th(style="background-color: #F6FEFF;") ~ #[em Bitwise] Not
                td(style="background-color: #F6FEFF;") Es un operador unario y opera invirtiendo todos los bits en el operando.
                td(style="background-color: #F6FEFF;") (~B) = -4
              tr
                th(style="background-color: #FFFFFF;") &lt;&lt; desplazamiento a la izquierda
                td(style="background-color: #FFFFFF;") Mueve todos los bits de su primer operando a la izquierda por el número de lugares especificados en el segundo operando. Los nuevos bits se llenan de ceros. Desplazar un valor dejado por una posición equivale a multiplicarlo por 2, desplazar dos posiciones es equivalente a multiplicar por 4, y así sucesivamente.
                td(style="background-color: #FFFFFF;") (A &lt;&lt; 1) = 4
              tr
                th(style="background-color: #F6FEFF;") &gt;&gt; desplazamiento a la derecha
                td(style="background-color: #F6FEFF;") Operador binario de desplazamiento a la derecha. El valor del operando izquierdo se mueve a la derecha por el número de bits especificado por el operando derecho.
                td(style="background-color: #F6FEFF;") (A &gt;&gt; 1) = 1
              tr
                th(style="background-color: #FFFFFF;") &gt;&gt;&gt; desplazamiento a la derecha con cero
                td(style="background-color: #FFFFFF;") Este operador es como el operador &gt;&gt;, excepto que los bits desplazados a la izquierda son siempre cero.
                td(style="background-color: #FFFFFF;") (A &gt;&gt;&gt; 1) = 1

      .row.justify-content-center(titulo="Operadores de asignación")
        p #[em Solidity] admite los siguientes operadores de asignación, revisemos la siguiente tabla de operadores #[em bitwise] para ver cómo se comportan cada uno de ellos.
        .tabla-b.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Operador
                th(style="background-color: #DEFAFD; width: 50%; font-size: 18px").text-center Descripción y ejemplo
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px").text-center Ejemplo
            tbody
              tr
                th(style="background-color: #FFFFFF;") = Asignación simple
                td(style="background-color: #FFFFFF;") Asigna valores del operando del lado derecho al operando del lado izquierdo.
                td(style="background-color: #FFFFFF;") C = A + B asignará el valor de A + B a C
              tr
                th(style="background-color: #F6FEFF;") += Agregar y asignar
                td(style="background-color: #F6FEFF;") Agrega el operando derecho al operando izquierdo y asigna el resultado al operando izquierdo.
                td(style="background-color: #F6FEFF;") C += A es equivalente a C = C + A
              tr
                th(style="background-color: #FFFFFF;") -= Restar y asignar
                td(style="background-color: #FFFFFF;") Resta el operando derecho del operando izquierdo y asigna el resultado al operando izquierdo.
                td(style="background-color: #FFFFFF;") C -= A es equivalente a C = C - A
              tr
                th(style="background-color: #F6FEFF;") *= Multiplicar y Asignar
                td(style="background-color: #F6FEFF;") Multiplica el operando derecho con el operando izquierdo y asigna el resultado al operando izquierdo.
                td(style="background-color: #F6FEFF;") C *= A es equivalente a C = C * A
              tr
                th(style="background-color: #FFFFFF;") /= Dividir y asignar
                td(style="background-color: #FFFFFF;") Divide el operando izquierdo con el operando derecho y asigna el resultado al operando izquierdo.
                td(style="background-color: #FFFFFF;") C /= A es equivalente a C = C/A
              tr
                th(style="background-color: #F6FEFF;") %= Módulos y Asignación
                td(style="background-color: #F6FEFF;") Toma el módulo usando dos operandos y asigna el resultado al operando izquierdo.
                td(style="background-color: #F6FEFF;") C %= A es equivalente a C = C %
      .row.justify-content-center(titulo="Operador condicional")
        p El operador condicional primero evalúa una expresión para un valor verdadero o falso y, a continuación, ejecuta una de las dos instrucciones dadas en función del resultado de la evaluación.
        .tabla-b.color-acento-contenido.mb-4
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 40%; font-size: 18px").text-center Operador
                th(style="background-color: #DEFAFD; width: 60%; font-size: 18px").text-center Descripción y ejemplo
            tbody
              tr
                th(style="background-color: #FFFFFF;") ? : (Condicional )
                td(style="background-color: #FFFFFF;") ¿Si la condición es verdadera? Entonces valor X : De lo contrario valor Y

    p.mb-5 En relación a los #[strong Tipos de valor], el lenguaje de programación ofrece una amplia gama de tipos de datos con los cuales se almacena información temporalmente mientras se encuentra en ejecución un contrato inteligente, a continuación, se puede ver la tabla 2 de tipos de datos aceptados.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2
      span Tipos de datos

    .tabla-b.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        caption.text-center Nota. <a style="font-weight= 400">SENA (2022).</a>
        thead
          tr
            th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Tipo
            th(style="background-color: #DEFAFD; width: 40%; font-size: 18px").text-center Tipo
            th(style="background-color: #DEFAFD; width: 40%; font-size: 18px").text-center Valores
        tbody
          tr
            th(style="background-color: #F6FEFF") Booleano
            td(style="background-color: #F6FEFF") bool
            td(style="background-color: #F6FEFF") verdadero/falso.
          tr
            th(style="background-color: #FFFFFF") Entero
            td(style="background-color: #FFFFFF") int/uint
            td(style="background-color: #FFFFFF") Enteros con y sin signo de diferentes tamaños.
          tr
            th(style="background-color: #F6FEFF") Entero
            td(style="background-color: #F6FEFF") int8 a int256
            td(style="background-color: #F6FEFF") Firmado int de 8 bits a 256 bits. int256 es lo mismo que int.
          tr
            th(style="background-color: #FFFFFF") Entero
            td(style="background-color: #FFFFFF") uint8 a uint256
            td(style="background-color: #FFFFFF") Int sin firmar de 8 bits a 256 bits. uint256 es lo mismo que uint.
          tr
            th(style="background-color: #F6FEFF") Números de puntos fijos
            td(style="background-color: #F6FEFF") fijo/no fijo
            td(style="background-color: #F6FEFF") Números de punto fijos firmados y sin firmar de diferentes tamaños.
          tr
            th(style="background-color: #FFFFFF") Números de puntos fijos
            td(style="background-color: #FFFFFF") fixedMxN
            td(style="background-color: #FFFFFF") Número de punto fijo firmado donde M representa el número de bits tomados por tipo y N representa los puntos decimales. M debe ser divisible por 8 y va de 8 a 256. N puede ser de 0 a 80. fixed es igual que fixed128x18.
          tr
            th(style="background-color: #F6FEFF") Números de puntos fijos
            td(style="background-color: #F6FEFF") ufixedMxN
            td(style="background-color: #F6FEFF") Número de punto fijo sin signo donde M representa el número de bits tomados por tipo y N representa los puntos decimales. M debe ser divisible por 8 y va de 8 a 256. N puede ser de 0 a 80. ufixed es lo mismo que ufixed128x18.

    .h5.mb-5 Adicional, existe un tipo predefinido tipo #[em address], el cual permite almacenar una cadena de 20 bytes de longitud que representa una dirección de #[em Ethereum]
    
    .BGM12.px-md-5.px-4.py-4.my-4
      .row.justify-content-center.mb-5
        .col-lg-8
          .BGB03.p-2(data-aos="fade-right")
            .h5.text-center.mb-0 Declaración y uso de una variable de tipo address
          .BG06.p-4.mb-4(data-aos="fade-right")
            p.texto-celeste.mb-0 address x <span style="color:#FFF !important">=</span> 0x212;
              <br> address myAddress <span style="color:#FFF !important">=</span> <span style="color:#5573C6 !important">this</span><span style="color:#FFF !important">;</span>
              <br> <span style="color:#9D76B7 !important">if</span> <span style="color:#F4A338 !important">(</span>x<span style="color:#FFF !important">.</span><span style="color:#BDCDA6 !important">balance</span> <span style="color:#FFF !important">&lt;</span> <span style="color:#BDCDA6 !important">10</span> <span style="color:#9D76B7 !important">&amp;&amp;</span> myAddress<span style="color:#FFF !important">.</span><span style="color:#BDCDA6 !important">balance</span> <span style="color:#FFF !important">&gt;</span><span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">10</span><span style="color:#F4A338 !important">)</span> x<span style="color:#FFF !important">.</span><span style="color:#BDCDA6 !important">transfer</span><span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">10</span><span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
          .BG07.p-2
            p.text-center.mb-0 #[strong Nota]. SENA (2022).
    
      p Por último se encuentra #[strong #[em Array]]; los arreglos al igual que en los demás lenguajes de programación, son estructuras de datos, que almacenan una colección de elementos del mismo tipo.
      p.mb-5 Para la declaración de un array en #[em Solidity], se debe especificar el tamaño es decir la cantidad de elementos que contendrá y el tipo de dato, así:
      .h5.text-center.texto-secundario.mb-5 type arrayName [ arraySize ];
      p Por ejemplo, para declarar una matriz de 10 elementos denominada balance de tipo uint
      
      .row.justify-content-center.mb-5
        .col-lg-8
          .BGB03.p-2(data-aos="fade-right")
            .h5.text-center.mb-0 Declaración de un array de tipo uint de 10 posiciones
          .BG06.p-4.mb-4(data-aos="fade-right")
            p.texto-celeste.mb-0 <span style="color:#BDCDA6 !important">uint</span> balance<span style="color:#F4A338 !important">[</span><span style="color:#BDCDA6 !important">10</span><span style="color:#F4A338 !important">]</span><span style="color:#FFF !important">;</span>
      
      .h5.text-center.mb-5 Si se desea declarar una matriz de tamaño dinámico en #[em Solidity], se debe especificar el tipo de elementos de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-lg-8
          .BGB03.p-2(data-aos="fade-right")
            .h5.text-center.mb-0 Declaración de un array de tamaño dinámico
          .BG06.p-4.mb-4(data-aos="fade-right")
            p.texto-celeste.mb-0 <span style="color:#BDCDA6 !important">uint</span><span style="color:#F4A338 !important">[ ]</span> memory a <span style="color:#FFF !important">=</span> <span style="color:#5573C6 !important">new</span> <span style="color:#BDCDA6 !important">uint</span><span style="color:#F4A338 !important">[ ](</span><span style="color:#BDCDA6 !important">7</span><span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
      
      .h5.text-center.mb-5 Ahora bien, si se requiere acceder a una posición para leer o escribir un dato, se puede acceder invocando la posición que se desea trabajar, así:
      .row.justify-content-center.mb-5
        .col-lg-8
          .BGB03.p-2(data-aos="fade-right")
            .h5.text-center.mb-0 Lectura de una posición de un array
          .BG06.p-4.mb-4(data-aos="fade-right")
            p.texto-celeste.mb-0 <span style="color:#BDCDA6 !important">uint</span> salary <span style="color:#FFF !important">=</span> balance<span style="color:#F4A338 !important">[</span><span style="color:#BDCDA6 !important">2</span><span style="color:#F4A338 !important">]</span><span style="color:#FFF !important">;</span>
    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Estructuras de control 
    
    .BGIMG02.px-md-5.px-4.py-4.my-4
      .row.justify-content-center
        .col-lg-8(data-aos="fade-right")
          p Las estructuras de control dentro de un lenguaje de programación, permiten establecer la toma de decisiones a partir del cumplimiento de condiciones, entre las estructuras de control se puede encontrar:
          p #[strong If-else]: esta estructura de control permite tomar decisiones a partir del cumplimiento de condiciones específicas y con comportamiento definido, presenta las siguientes formas de declararse (ver figura 19):
          .row.justify-content-center
            .col-lg-10
              LineaTiempoD.color-secundario
                p.text-small(numero="1" titulo="Instrucción if") Esta es la instrucción de control fundamental que permite al lenguaje de programación tomar decisiones y ejecutar instrucciones condicionalmente.
                p.text-small(numero="2" titulo="If … else") La instrucción 'if... else' es la siguiente forma de controlar la instrucción de control y que permite al lenguaje de programación ejecutar instrucciones de una manera más controlada.
                p.text-small(numero="3" titulo="If … else if… ") Esta declaración es una forma avanzada de si... de lo contrario, permite al lenguaje de programación tomar una decisión correcta a partir de varias condiciones.
        .col-lg-4.col-8(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido
            h5 Figura 19
            span Instrucción if else
          figure
            img(src="@/assets/curso/tema3/img08.svg")
    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Estructuras repetitivas  
    
    TabsB.color-secundario.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="For" :icono="require('@/assets/curso/tema3/img09.svg')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p Esta estructura de control iterativa, nos permite ejecutar de manera repetitiva un bloque de instrucciones, conociendo previamente un valor de inicio, un tamaño de paso y un valor final para el ciclo, y su declaración está compuesta por los siguientes 3 elementos.
            ul.lista-ul--color
              li
                i.fas.fa-cube(style="color: #FFD800;")
                | <a style="font-weight: 900">La inicialización de bucle</a>: donde inicializamos nuestro contador a un valor inicial. La instrucción de inicialización se ejecuta antes de que comience el bucle.
              li
                i.fas.fa-cube(style="color: #FFD800;")
                | <a style="font-weight: 900">La declaración de prueba</a>: que probará si una condición dada es verdadera o no. Si la condición es verdadera, entonces se ejecutará el código dado dentro del bucle, de lo contrario el control saldrá del bucle.
              li
                i.fas.fa-cube(style="color: #FFD800;")
                | <a style="font-weight: 900">La instrucción de iteración</a>: En la que puede aumentar o disminuir el contador.
            p.mb-0 Estos elementos se agregan en una línea al inicio de bucle separados por punto y coma.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img10.svg")
      .py-4.py-md-5(titulo="While" :icono="require('@/assets/curso/tema3/img11.svg')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Esta también es una estructura cíclica, que nos permite ejecutar sentencias de manera repetitiva sin necesidad de tener un valor inicial o final, esta estructura no depende de valores numéricos, sino de valores booleanos, es decir continúa con su ciclo mientras una condición sea verdadera, en caso contrario terminará, a continuación, vamos a ver el flujo de la estructura while.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img12.svg")
      .py-4.py-md-5(titulo="Do" :icono="require('@/assets/curso/tema3/img13.svg')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p El ciclo do... while trabaja de manera similar al ciclo while con la excepción que la comprobación de condición ocurre al final del bucle. Esto significa que el bucle siempre se ejecutará al menos una vez, incluso si la condición es falsa.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img14.svg")
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .BGB03.p-2(data-aos="fade-right")
          .h5.text-center.mb-0 Uso de estructuras de control de #[em solidity] en un contrato inteligente
        .BG06.p-4.mb-4(data-aos="fade-right")
          p.texto-celeste.mb-0 pragma solidity <span style="color:#FFF !important">^</span><span style="color:#BDCDA6 !important">0.5.0</span><span style="color:#FFF !important">;</span>
            <br> contract <span style="color:#5573C6 !important">SolidityTest</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> storedData<span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;constructor<span style="color:#F4A338 !important">()</span> <span style="color:#BDCDA6 !important">public</span><span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;storedData <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">10</span><span style="color:#FFF !important">;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#5573C6 !important">function</span> getResult<span style="color:#F4A338 !important">()</span> <span style="color:#BDCDA6 !important">public view</span> returns<span style="color:#F4A338 !important">(</span>string memory<span style="color:#F4A338 !important">)</span><span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> a <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">1</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> b <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">2</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> result <span style="color:#FFF !important">=</span> a <span style="color:#FFF !important">+</span> b<span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">return</span> integerToString<span style="color:#F4A338 !important">(</span>result<span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#5573C6 !important">function</span> integerToString<span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">uint</span> _i<span style="color:#F4A338 !important">)</span> <span style="color:#BDCDA6 !important">internal</span> pure
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;returns <span style="color:#F4A338 !important">(</span>string memory<span style="color:#F4A338 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">if</span> <span style="color:#F4A338 !important">(</span>_i <span style="color:#FFF !important">==</span> <span style="color:#BDCDA6 !important">0</span><span style="color:#F4A338 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">return</span> <span style="color:#F4A338 !important">"</span><span style="color:#BDCDA6 !important">0</span><span style="color:#F4A338 !important">"</span><span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> j <span style="color:#FFF !important">=</span> _i<span style="color:#BDCDA6 !important">;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> len<span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">while</span> <span style="color:#F4A338 !important">(</span>true<span style="color:#F4A338 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;len++<span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j <span style="color:#FFF !important">/=</span> <span style="color:#BDCDA6 !important">10</span><span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">if</span><span style="color:#F4A338 !important">(</span>j<span style="color:#FFF !important">==</span><span style="color:#BDCDA6 !important">0</span><span style="color:#F4A338 !important">)</span><span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<span style="color:#BDCDA6 !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">bytes</span> memory bstr <span style="color:#FFF !important">=</span> <span style="color:#5573C6 !important">new</span> <span style="color:#BDCDA6 !important">bytes</span><span style="color:#F4A338 !important">(</span>len<span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> k <span style="color:#FFF !important">=</span> len <span style="color:#FFF !important">-</span> <span style="color:#BDCDA6 !important">1</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">while</span> <span style="color:#F4A338 !important">(</span>_i <span style="color:#FFF !important">!=</span> <span style="color:#BDCDA6 !important">0</span><span style="color:#F4A338 !important">)</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bstr<span style="color:#F4A338 !important">[</span>k<span style="color:#FFF !important">--</span><span style="color:#F4A338 !important">]</span> <span style="color:#FFF !important">=</span> byte<span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">uint8</span><span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">48</span> <span style="color:#FFF !important">+</span> _i <span style="color:#FFF !important">%</span> <span style="color:#BDCDA6 !important">10</span><span style="color:#F4A338 !important">))</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_i <span style="color:#FFF !important">/=</span> <span style="color:#BDCDA6 !important">10</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">return</span> string<span style="color:#F4A338 !important">(</span>bstr<span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> <span style="color:#9D76B7 !important">&#125;</span>
        
    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .BGR08.p-3
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-5
              img(src="@/assets/curso/temas/img04.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 #[em Solidity]
                  p.text-white.mb-0 Es así como las estructuras repetitivas, pueden ayudar a implementar controles, validaciones y establecer el flujo del proceso y de la información en la construcción de un contrato inteligente, para conocer más sobre la sintaxis del lenguaje el sitio oficial de la documentación de #[em solidity]:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://solidity-es.readthedocs.io/es/latest/index.html" target="_blank")
                    span(style="color: #000; font-weight: 400") Ir a sitio web
                    i.fas.fa-link(style="color: #000")
    
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Funciones
    
    p Una función es un fragmento del código reutilizable al que se puede llamar en cualquier parte del programa. Esto elimina la necesidad de escribir el mismo código una y otra vez, facilitando su modularidad.
    p En el siguiente recurso se explican los pasos requeridos para llevar a cabo este proceso:

    .BGIMG06.px-md-5.px-4.py-4.my-4
      .row.justify-content-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h5.mb-5 Como establecer las funciones
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta(style="background-color: #8628A5")
                span 1
              | El primer paso es realizar la definición, la cual se elabora haciendo uso de la palabra clave #[em function], enseguida del nombre el cual debe ser único. 
            li 
              .lista-ol--cuadro__vineta(style="background-color: #8628A5")
                span 2
              | Posteriormente vendrán los parámetros, estos son opcionales.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #8628A5")
                span 3
              | Finalmente, el bloque de instrucciones.
        .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img15.svg")
    
    p Una vez se defina la función, la invoca desde algún lugar del programa, tan solo con citar el nombre de la función y cargar los parámetros en caso de ser necesarios y hayan sido implementados en dicha función.
    p.mb-5 A continuación, se puede ver un ejemplo de una declaración de una función que suma dos y retorna el resultado, este puede ser recibido y asignado en una variable que debe tener el mismo tipo de dato que la función.

    .row.justify-content-center.mb-5
      .col-lg-8
        .BGB03.p-2(data-aos="fade-right")
          .h5.text-center.mb-0 Ejemplo de definición y uso de una función en #[em solidity]
        .BG06.p-4.mb-4(data-aos="fade-right")
          p.texto-celeste.mb-0 pragma solidity <span style="color:#FFF !important">^</span><span style="color:#BDCDA6 !important">0.5.0</span><span style="color:#FFF !important">;</span>
            <br> contract <span style="color:#5573C6 !important">Test</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#5573C6 !important">function</span> sumaNumeros<span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">uint</span> A<span style="color:#FFF !important">,</span> <span style="color:#BDCDA6 !important">uint</span> B<span style="color:#F4A338 !important">)</span> <span style="color:#BDCDA6 !important">public view</span> returns<span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">uint</span><span style="color:#F4A338 !important">)</span><span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> result <span style="color:#FFF !important">=</span> <span style="color:#F4A338 !important">(</span>A <span style="color:#FFF !important">+</span> B<span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">return</span> result<span style="color:#FFF !important">;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>   
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> numeroUno <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">5</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> numeroDos <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">3</span><span style="color:#FFF !important">;</span>
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> suma <span style="color:#FFF !important">=</span> <span style="color:#BDCDA6 !important">0</span><span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;suma <span style="color:#FFF !important">=</span> sumaNumeros<span style="color:#F4A338 !important">(</span>numeroUno<span style="color:#FFF !important">,</span> numeroDos<span style="color:#F4A338 !important">)</span><span style="color:#FFF !important">;</span>
            <br> <span style="color:#9D76B7 !important">&#125;</span>
    
    p.mb-5 La devolución de datos en una función es opcional, es decir no es necesario implementarlo si no se requiere, además #[em Solidity] permite crear funciones que retornen más de un valor, aunque esto debe de estar declarado en la función inicial.

    .row.justify-content-center.mb-5
      .col-lg-8
        .BGB03.p-2(data-aos="fade-right")
          .h5.text-center.mb-0 Ejemplo de definición y uso de una función que retorna 2 valores en #[em solidity]
        .BG06.p-4.mb-4(data-aos="fade-right")
          p.texto-celeste.mb-0 pragma solidity <span style="color:#FFF !important">^</span><span style="color:#BDCDA6 !important">0.5.0</span><span style="color:#FFF !important">;</span>
            <br> contract <span style="color:#5573C6 !important">Test</span> <span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;function operaciones <span style="color:#F4A338 !important">()</span> <span style="color:#BDCDA6 !important">public view</span> returns<span style="color:#F4A338 !important">(</span><span style="color:#BDCDA6 !important">uint</span> product, <span style="color:#BDCDA6 !important">uint</span> sum<span style="color:#F4A338 !important">)</span><span style="color:#9D76B7 !important">&#123;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> a <span style="color:#FFF !important">=</span> 1<span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">uint</span> b <span style="color:#FFF !important">=</span> 2<span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product <span style="color:#FFF !important">=</span> a <span style="color:#FFF !important">*</span> b<span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum <span style="color:#FFF !important">=</span> a <span style="color:#FFF !important">+</span> b<span style="color:#FFF !important">;</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">&#125;</span>
            <br> <span style="color:#9D76B7 !important">&#125;</span>
    
    p Es así como se puede implementar una estructura modular de operaciones dentro del contrato inteligente que permita optimizar el código y aprovechar los recursos generados.
    
    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .BGR08.p-3
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-5
              img(src="@/assets/curso/temas/img04.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 #[em Functions]
                  p.text-white.mb-0 Si se desea profundizar más en los conceptos revisados anteriormente, se invita a consultar el siguiente enlace, en donde se podrá informar acerca de cómo generar funciones en la documentación oficial del lenguaje de programación:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://docs.soliditylang.org/en/v0.8.12/contracts.html#functions" target="_blank")
                    span(style="color: #000; font-weight: 400") Ir a sitio web
                    i.fas.fa-link(style="color: #000")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
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
