export default {
  global: {
    componenteFormativo: 'Construcción y despliegue de contratos inteligentes',
    descripcionCurso:
      'Mediante el presente componente, se brindarán los conceptos y recomendaciones necesarias para la creación de un contrato inteligente sobre una red de <em>blockchain</em>, haciendo uso de herramientas y lenguajes de programación especializados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Construcción de contratos inteligentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición, características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Limitaciones de contratos inteligentes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructura del contrato',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plataforma Ethereum',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'EVM Ethereum Virtual Machine',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instalación y Configuración',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios básicos de <em>Solidity</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Expresiones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructuras de control',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructuras repetitivas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Funciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desplegar contratos inteligentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Entorno de prueba y desarrollo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Entorno de ejecución',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Construcción contratos inteligentes',
      referencia:
        'Solidity. (2022). <em>Introducción a los contratos inteligentes.</em>',
      tipo: 'Página web',
      link: 'https://docs.soliditylang.org',
    },
    {
      tema: 'Construcción contratos inteligentes',
      referencia: 'Solidity (2022), <em>Solidity Documentation.</em>',
      tipo: 'Manual electrónico',
      link: 'https://solidity-es.readthedocs.io/es ',
    },
    {
      tema: 'Instalación y Configuración',
      referencia:
        'Remix IDE. (2022). <em>Welcome to Remix’s documentation.</em>',
      tipo: 'Manual electrónico',
      link: 'https://remix-ide.readthedocs.io/en/latest ',
    },
    {
      tema: 'Instalación y Configuración',
      referencia: 'Ganache. (2022). <em>Ganache documentation.</em>',
      tipo: 'Manual electrónico',
      link: 'https://trufflesuite.com/docs/ganache',
    },
  ],
  glosario: [
    {
      termino: 'Compilador',
      significado:
        'Programa que traduce un lenguaje de programación a un lenguaje comprensible por una máquina.',
    },
    {
      termino: 'Constante',
      significado:
        'Palabra que permite almacenar información de manera permanente mientras se ejecute un programa, sin posibilidad de actualizarlo.',
    },
    {
      termino: '<em>Deploy</em>',
      significado:
        'Opción que permite desplegar un contrato inteligente dentro de una red de <em>blockchain</em>, para obtener su dirección de identificación.',
    },
    {
      termino: 'Función',
      significado:
        'Conjunto de código de instrucciones de un lenguaje de programación, que puede ser invocado desde otro lugar del mismo proyecto, algunas funciones pueden regresar valores o no.',
    },
    {
      termino: 'Variable',
      significado:
        'Es una palabra que representa un objeto y que su valor puede variar de acuerdo al tipo de información que recibe.',
    },
    {
      termino: '<em>Workspace</em>',
      significado:
        'Es un espacio de trabajo en donde se almacenarán los archivos de un proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arroyo Guardeño, D. Díaz Vico, J. & Hernández Encinas, L. (2019). <em>Blockchain</em>. Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111431 ',
    },
    {
      referencia:
        'Fuentes Blanco, E. A. (2022). <em>Contratos inteligentes: un análisis teórico desde la autonomía privada en el ordenamiento jurídico colombiano.</em> 1. Editorial Unimagdalena.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/214513',
    },
    {
      referencia: '<em>Ganache</em>. (2022). <em>Ganache documentation</em>.',
      link: 'https://trufflesuite.com/docs/ganache',
    },
    {
      referencia:
        'LogRocker (2021) <em>Writing smart contracts with Solidity</em>',
      link: 'https://blog.logrocket.com/writing-smart-contracts-solidity',
    },
    {
      referencia:
        'MINTIC. (2022) <em>Guía de referencia de <em>blockchain</em> para la adopción e implementación de proyectos en el estado colombiano.</em>',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf',
    },
    {
      referencia:
        'ByBT Learn. (Septiembre 15, 2021), <em>¿Qué son los contratos inteligentes en blockchain y cómo funcionan?</em>',
      link:
        'https://learn.bybit.com/es/blockchain/what-are-smart-contracts-in-blockchain-how-do-they-work/',
    },
    {
      referencia:
        'Remix IDE. (2022). <em>Welcome to Remix’s documentation</em>.',
      link: 'https://remix-ide.readthedocs.io/en/latest',
    },
    {
      referencia:
        'Shashank (2019). <em>What are Smart Contracts? A Beginner’s Guide To Smart Contracts</em>.',
      link: 'https://www.edureka.co/blog/smart-contracts/',
    },
    {
      referencia: 'Solidity (2022), <em>Solidity Documentation</em>.',
      link: 'https://solidity-es.readthedocs.io/es',
    },
    {
      referencia:
        'Tudela, L (2019) <em>Arquitectura blockchain para la securización de dispositivos iot mediante smart contracts</em>.',
      link: 'http://castor.det.uvigo.es:8080/xmlui/handle/123456789/345',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal Gutiérrez',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Liliana Victoria Morales Gualdron',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando José Peña Hidalgo	Experto Temático',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca, Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'María Inés Machado López	Diseñador instruccional',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Norte de Santander. Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable del equipo de desarrollo curricular',
          centro:
            'Regional Santander. Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Virtual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego ',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Castaño Pérez Leyson Fabian',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
