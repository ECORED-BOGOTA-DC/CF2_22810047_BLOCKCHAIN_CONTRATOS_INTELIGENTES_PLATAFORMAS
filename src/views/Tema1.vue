<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Construcción de contratos inteligentes
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 El proceso de construcción de un contrato inteligente requiere tener presente algunos conceptos importantes sobre su funcionamiento, herramientas tecnológicas, conceptos propios de las redes de #[em blockchain] y ciertos conocimientos básicos de programación preferiblemente de lenguajes de programación especializados como Solidity. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.png")
      
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Definición, características
    
    p Un contrato inteligente o #[em smart contract], como su nombre lo indica, es un contrato semejante al contrato ordinario, en donde se requiere  participar presencialmente, firmar o sellar, pero, ahora se cuenta con un mecanismo y agilidad que permite establecer acciones para una transacción, sin estar presente, bajo algunos controles y un bajo costo de transacción; para la creación de un contrato inteligente se hace uso de lenguajes de programación sobre los cuales se programan las reglas, condiciones y flujo de información para finalmente registrar dicha información sobre una red de #[em blockchain] (ver figura 1).

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.jpg')})`}" data-aos="fade-right"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 El término #[em smart contract] es asociado a contratos automatizados, lo cual es correcto. Pero, vale la pena aclarar que, si bien los orígenes del término y las intenciones de quien lo acuñó por primera vez quizás se centraron en permitir contratos automatizados, la implementación final sobre una red de #[em blockchain] los ubica más próximos a programas de computación de uso más o menos genérico, con la posibilidad de acceder a dinero (#[em tokens]) y con algunas restricciones y costos de ejecución.

      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1
          span Cómo funcionan los contratos inteligentes
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img03.svg")
          figcaption.text-center Nota. <a style="font-weight: 400">ByBT Learn. (Septiembre 15, 2021). </a> <a style="color: #8628A5" href="https://learn.bybit.com/es/blockchain/what-are-smart-contracts-in-blockchain-how-do-they-work/" target="_blank">¿Qué son los contratos inteligentes en #[em blockchain] y cómo funcionan?</a>

    p La inclusión de estos contratos inteligentes, en diferentes aplicaciones y soluciones de comercio electrónico, basadas en #[em blockchain], facilita actividades como (ver figura 2):

    .BGIMG02.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 2
            span Actividades beneficiadas con contratos inteligentes
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img04.svg")
    
    p Al comparar los contratos tradicionales y los contratos inteligentes, existe una marcada diferencia, lo cual es un punto de apoyo para tornar a esta tecnología, sin embargo, vale la pena recordar en qué se soporta esta diferencia y las principales ventajas que tiene (ver tabla 1):

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1
          span Contratos tradicionales vs. contratos inteligentes

        .tabla-b.color-acento-contenido.mb-4(data-aos="zoom-in")
          table
            caption.text-center Nota. <a style="font-weight= 400">Adaptado de Shashank (2019).</a>
            thead
              tr
                th(style="background-color: #DEFAFD; width: 20%; font-size: 18px").text-center Característica
                th(style="background-color: #DEFAFD; width: 40%; font-size: 18px").text-center Contratos inteligentes
                th(style="background-color: #DEFAFD; width: 40%; font-size: 18px").text-center Contratos tradicionales
            tbody
              tr
                th(style="background-color: #F6FEFF") Tiempo
                td(style="background-color: #F6FEFF") Se procesan en cuestión de minutos.
                td(style="background-color: #F6FEFF") Puede demorar entre 1 y 3 días el proceso.
              tr
                th(style="background-color: #FFF") Asignación
                td(style="background-color: #FFF") Las asignaciones se realizan de manera automática.
                td(style="background-color: #FFF") Las asignaciones se realizan de forma manual, lo cual puede llevar a equivocaciones.
              tr
                th(style="background-color: #F6FEFF") Fideicomiso
                td(style="background-color: #F6FEFF") Incorporar #[em blockchain] para validar que se cumpla la voluntad del fideicomitente y la autoridad competente, no es absolutamente necesario.
                td(style="background-color: #F6FEFF") La seguridad pactada para proteger el cumplimiento de acciones establecidas en el contrato y que se denomina fideicomiso es necesaria.
              tr
                th(style="background-color: #FFF") Costos
                td(style="background-color: #FFF") Se realiza por una fracción del costo de un contrato tradicional.
                td(style="background-color: #FFF") Los costos varían de acuerdo con el tipo de contrato, sin embargo, es un rubro a considerar siempre que se pacte un contrato tradicional.
              tr
                th(style="background-color: #F6FEFF") Firmas
                td(style="background-color: #F6FEFF") Las firmas se realizan de manera digital, por lo que el pacto se puede hacer entre personas que no estén presentes físicamente en un mismo lugar.
                td(style="background-color: #F6FEFF") Es requisito que las personas interesadas, estén presentes para llevar a cabo el registro de firmas ante notario público.
              tr
                th(style="background-color: #FFF") Soporte legal
                td(style="background-color: #FFF") No requiere de acompañamiento legal, puede tramitarse directamente por personas naturales.
                td(style="background-color: #FFF") Requiere el acompañamiento de un abogado, bien sea al redactar el contrato, o al llevarlo a registro.

    .mb-4
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Elementos de los contratos inteligentes
    
    .row.justify-content-center.mb-5
      .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
        p La principal diferencia entre estos elementos radica en la forma en que se aplican, dado que, en el contrato inteligente, el consentimiento de los interesados se manifiesta de forma electrónica.
        p Adicionalmente, los contratos inteligentes precisan de ciertos medios especiales para poder ejecutarse y también necesitan de la elaboración de definiciones concretas de los parámetros del contrato, ya que no se puede dar lugar a la subjetividad.
        .h5.mb-0 Los principales elementos o medios informáticos adicionales para el funcionamiento y ejecución de este tipo de contratos son:
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img05.svg')
    
    .BGM01.px-md-5.px-4.py-4.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img06.png')
        .col-lg-8
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Plataforma de acceso") Debe contar con una plataforma con acceso a tecnología de contabilidad distribuida y formada por varios nodos de red #[em blockchain].
            p.text-small(numero="2" titulo="Nodos <em>blockchain</em>") Estos nodos son ordenadores que custodian los registros, es decir “los libros contables”.
            p.text-small(numero="3" titulo="Lenguaje computacional") Es muy importante contar con un lenguaje computacional encriptado que sea adecuado.
            p.text-small(numero="4" titulo="Funciones <em>hashes</em>") Los mineros que son las propias personas que trabajan programando y sus #[em hardware] para autorizar la adición de los bloques de transacciones a la cadena de bloques. Realizando funciones <em>hashes</em> correspondientes al protocolo de consenso entre las partes.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Limitaciones de contratos inteligentes

    p Como se observó anteriormente, el campo de acción donde se pueden implementar contratos inteligentes es extenso, y se pueden abordar infinidad de proyectos para el intercambio de información de manera segura a través de redes de #[em blockchain].
    p.mb-5 Ahora bien, dada su aplicabilidad y la robustez generada por sus características, también se puede ver afectado por ciertas limitaciones o restricciones para su adopción, se debe revisar algunos casos en donde se puede presentar cierta limitación (ver figura 3):

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span Limitaciones de un contrato inteligente
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img07.svg")

    .h5.mb-5 En el siguiente recurso educativo, se podrá apreciar en detalle estas limitaciones generadas en los contratos inteligentes:
    
    ImagenInfografica.color-acento-botones(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img08.svg')

      .BGR03.p-3(x="22%" y="50%" numero="1")
        .h5.texto-secundario.mb-2 1. Flexibilidad
        p.mb-0 La ejecución basada en la lógica a menudo es un desafío para los bufetes de abogados. La creación de contratos tiene un elemento subjetivo y tiene un uso intencional de términos como "buena fe", "razonable" o "mejores esfuerzos para tener espacio para la flexibilidad". Este tipo de contrato es necesario cuando las partes quieren crear un contrato relacional en lugar de uno transaccional. En tales escenarios, los contratos inteligentes no ofrecen utilidad.
      .BGR03.p-3(x="32.5%" y="86%" numero="2")
        .h5.texto-secundario.mb-2 2. Ramificaciones legales
        p.mb-0 Dado que los contratos inteligentes reducen la dependencia de intermediarios y abogados, es imperativo que las partes involucradas sean conscientes de las ramificaciones legales del derecho público, privado, penal y mercantil.
      .BGR03.p-3(x="38.5%" y="25%" numero="3")
        .h5.texto-secundario.mb-2 3. Transacciones retrasadas
        p.mb-0 Hay casos en los que la tecnología demuestra ser una pesadilla en lugar de una bendición. Uno de estos casos es que la congestión en una red #[em blockchain] puede resultar en una transacción retrasada y, finalmente, impulsar el costo transaccional por encima del costo incurrido en los contratos tradicionales.
      .BGR03.p-3(x="51%" y="56%" numero="4")
        .h5.texto-secundario.mb-2 4. Dificultad de actualizar información
        p.mb-0 Cada contrato inteligente al desplegarse sobre una red de #[em blockchain] se propaga por todos sus nodos, y cualquier cambio en su versión desplegada es casi imposible, conllevando grandes dificultades actualizar o corregir alguna falla.
      .BGR03.p-3(x="65%" y="70%" numero="5")
        .h5.texto-secundario.mb-2 5. Posibilidad de generar vacíos o lagunas
        p.mb-0 De acuerdo con el concepto de buena fe, las partes se tratarán de manera justa y no obtendrán beneficios poco éticos de un contrato. Sin embargo, el uso de contratos inteligentes hace que sea difícil garantizar que los términos se cumplan de acuerdo con lo acordado.
      .BGR03.p-3(x="69%" y="32%" numero="6")
        .h5.texto-secundario.mb-2 6. Terceros
        p.mb-0 A pesar de que los contratos inteligentes buscan reducir la participación de terceros, no es posible eliminarlos. Los terceros asumen roles diferentes de los que asumen en los contratos tradicionales. Por ejemplo, no se necesitarán abogados para preparar contratos individuales; sin embargo, los desarrolladores los necesitarán para comprender los términos para crear códigos para contratos inteligentes.
      .BGR03.p-3(x="82%" y="70%" numero="7")
        .h5.texto-secundario.mb-2 7. Términos vagos
        p.mb-0 Dado que los contratos incluyen términos que no siempre se entienden, los contratos inteligentes no siempre pueden manejar términos y condiciones que son vagos.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Estructura de contrato 

    br
    .BGM04.px-md-5.px-4.py-4.my-5
      .row.justify-content-end.align-items-center
        .col-lg-5.col-10.img-01.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img08.png")
        .col-lg-6(data-aos="fade-left")
          p.mb-0 A diferencia de los contratos tradicionales, los contratos inteligentes son programas codificados en un lenguaje de programación especializado que se despliega sobre una red de #[em blockchain], por lo cual su codificación obedece a una estructura sugerida de un documento electrónico.
    <br><br>

    p.mb-5 No existe una estructura general definida por algún estándar, aunque sí hay algunos apartados importantes y obligatorios; en la siguiente imagen, se puede observar de forma general los apartados correspondientes de un contrato inteligente básico (ver figura 4):

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4
          span Estructura contrato inteligente básico
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img09.png")
    
    .h5.text-center El contrato inteligente básico, cuenta con apartados que le dan consistencias, estos son:

    .BGIMG02.px-md-5.px-4.py-4.my-5(data-aos="fade-right")
      TabsA.color-primario.mb-5
        .BGR05.p-4(titulo="Información de compilador")
          h4 Información de compilador
          p Declara la versión mínima del compilador del contrato que se debe utilizar, para este caso será la versión 0.6.5 o superior, en caso de utilizar una versión menor, podría causar problemas por compatibilidad.
          .BG06.p-4
            p.texto-verde.mb-2 //COMPILADOR
            p.texto-azul.mb-0 pragma Solidity <a style="color: #fff"> ^0.6.5;</a>
        .BGR05.p-4(titulo="Contratos, interfaces o librerías a importar")
          h4 Contratos, interfaces o librerías a importar
          p En este apartado se deben de especificar todos aquellos archivos de otros contratos, interfaces o librerías que son necesarias para que el contrato inteligente pueda funcionar, se debe agregar las líneas con la función import seguido de la ruta relativa del archivo a importar, como se muestra a continuación.
          .BG06.p-4
            p.texto-verde.mb-2 //IMPORTAR OTROS CONTRATOS, INTERFACES O LIBRERIAS
            p.texto-azul.mb-0 import <a style="color: #C78D76"> "./FuncionesSeguridad.sol"</a><a style="color: #fff">;</a>
        .BGR05.p-4(titulo="Cuerpo del contrato")
          h4 Cuerpo del contrato
          p En este espacio podremos programar la lógica de nuestro contrato inteligente, teniendo en cuenta que podremos incluir: librerías variables, eventos, modificadores, constructores y funciones personalizadas.
          .BG06.p-4
            p.texto-verde.mb-2 //CUERPO DEL CONTRATO
            p.texto-azul.mb-2 contract <a style="color: #fff"> PrimerContrato&#123;</a>
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp; //LIBRERIAS
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp; //DECLARACIÓN DE VARIABLES
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp; //EVENTOS
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp; //MODIFICADORES
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp; //CONSTRUCTOR
            p.texto-verde.mb-2 &nbsp;&nbsp;&nbsp;&nbsp; //FUNCIONES
            p.text-white.mb-0 &#125;

        .BGR05.p-4(titulo="Otros apartados a tener en cuenta")
          h4 Otros apartados a tener en cuenta
          p #[strong Funciones externas]: funciones almacenadas en archivos externos los cuales pueden extender las capacidades del contrato inteligente, o también podemos citar otros contratos.
          p #[strong Variables]: las variables de estado son variables cuyos valores se almacenan permanentemente en el almacenamiento contractual.
          p #[strong Eventos]: los eventos son interfaces de conveniencia con las instalaciones de registro de EVM.
          p.mb-0 #[strong Modificadores de funciones]: los modificadores de funciones se pueden utilizar para modificar la semántica de las funciones de forma declarativa, la sobrecarga, es decir, tener el mismo nombre modificador con diferentes parámetros, no es posible.

    .h5.text-center.mb-5 Al igual que las funciones, los modificadores se pueden anular, en el siguiente recurso se puede observar lo correspondiente al constructor:

    .h3.texto-primario.text-center Constructor

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Función opcional, declarada con la palabra clave que se ejecuta en el momento de creación del contrato, y en donde se puede ejecutar el código de inicialización del contrato.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img.w-75(src='@/assets/curso/tema1/img10.svg')
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
              img.w-75(src='@/assets/curso/tema1/img11.svg')
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
              p Antes de ejecutar el código del constructor, las variables de estado se inicializan a su valor especificado, si se inicializan en línea, o a su valor predeterminado si no se hace.
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Una vez ejecutado el constructor, el código final del contrato se implementa en la cadena de bloques.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img.w-75(src='@/assets/curso/tema1/img12.svg')
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
              img.w-75(src='@/assets/curso/tema1/img13.svg')
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
              p Este código incluye todas las funciones que forman parte de la interfaz pública y todas las funciones a las que se puede acceder desde allí a través de llamadas a funciones. No incluye el código del constructor ni las funciones internas a las que solo se llama desde el constructor.
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Si no hay ningún constructor, el contrato asumirá el constructor predeterminado.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img.w-75(src='@/assets/curso/tema1/img14.svg')
      .col-lg-10
        p Otro modificador, son las #[strong Funciones], estas son las unidades ejecutables de código. Se definen dentro de un contrato, pero también se pueden definir fuera de los contratos.
        p.mb-0 Las llamadas a funciones pueden ocurrir interna o externamente y tienen diferentes niveles de visibilidad hacia otros contratos. Las funciones aceptan parámetros y devuelven variables para pasar parámetros y valores entre ellas.

    .BGM09.px-md-5.px-4.py-4.my-4
      .row.justify-content-center
        .col-lg-10(data-aos="flip-up")
          .BGR08.p-3
            .row.justify-content-around.align-items-center
              .col-4.col-sm-3.col-lg-2.px-xl-5.px-md-2
                img(src="@/assets/curso/temas/img02.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.text-white.mb-1 Solidity
                    p.text-white.mb-0 Se puede encontrar más información sobre la estructura y sintaxis de un contrato inteligente construido con Solidity, en la página oficial, al que se puede acceder en el siguiente enlace:
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://docs.soliditylang.org" target="_blank")
                      span(style="color: #000; font-weight: 400") Ir a sitio web
                      i.fas.fa-link(style="color: #000")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
