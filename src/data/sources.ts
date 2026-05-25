export interface SourceReference {
  author: string
  title: string
  year?: number
  url?: string
}

export interface SourceGroup {
  id: string
  title: string
  references: SourceReference[]
}

export const sourceGroups: SourceGroup[] = [
  {
    id: 'legal',
    title: 'Legislación y marco legal',
    references: [
      {
        author: 'Cámara de Diputados del H. Congreso de la Unión',
        title: 'Ley Federal del Derecho de Autor',
        year: 2024,
        url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf',
      },
      {
        author: 'Cámara de Diputados del H. Congreso de la Unión',
        title: 'Ley Federal del Trabajo',
        year: 2024,
        url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf',
      },
      {
        author: 'Universidad Autónoma de Baja California',
        title: 'Reglamento de Propiedad Intelectual de la UABC',
        url: 'https://sriagral.uabc.mx/externos/abogadogeneral/Reglamentos/ReglamentosInstitucionales/20_Reg_Prop_Intelectual.pdf',
      },
      {
        author: 'Organización Mundial de la Propiedad Intelectual',
        title: 'Convenio de Berna para la Protección de las Obras Literarias y Artísticas',
        url: 'https://www.wipo.int/treaties/es/ip/berne/',
      },
    ],
  },
  {
    id: 'ip-transfer',
    title: 'Propiedad intelectual y transferencia de tecnología',
    references: [
      {
        author: 'Instituto Nacional del Derecho de Autor',
        title: 'Guía para el registro de programas de cómputo',
        year: 2025,
        url: 'https://www.indautor.gob.mx',
      },
      {
        author: 'Instituto Mexicano de la Propiedad Industrial',
        title: 'Propiedad Industrial en México: Patentes y Marcas',
        year: 2025,
        url: 'https://www.gob.mx/impi',
      },
      {
        author: 'WIPO',
        title: 'La vinculación universidad-empresa: el caso UNAM-IB Tech',
        year: 2024,
        url: 'https://www.wipo.int/ipadvantage/es/details.jsp?id=2601',
      },
      {
        author: 'Universidad Autónoma de Baja California',
        title: 'Coordinación de Vinculación e Innovación Tecnológica',
        year: 2024,
        url: 'https://www.uabc.mx/vinculacion/',
      },
      {
        author: 'González Sabater, J.',
        title: 'Manual de transferencia de tecnología y conocimiento',
        year: 2011,
      },
      {
        author: 'Jolly, V. K.',
        title: 'Commercializing New Technologies: Getting from Mind to Market',
        year: 1997,
      },
      {
        author: 'Organización Mundial de la Propiedad Intelectual',
        title: 'La transferencia de tecnología y la propiedad intelectual',
        year: 2023,
      },
      {
        author: 'Secretaría de Economía',
        title: 'Innovación y transferencia de tecnología en México: Retos y oportunidades',
        year: 2020,
      },
      {
        author: 'Zamora, A.',
        title: 'Modelos de transferencia de conocimiento en las instituciones de educación superior',
        year: 2014,
      },
    ],
  },
  {
    id: 'tech-history',
    title: 'Historia de la tecnología e ingeniería de software',
    references: [
      {
        author: 'IEEE Computer Society',
        title: 'Software Engineering Body of Knowledge (SWEBOK) V3.0',
        url: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering',
      },
      {
        author: 'Ceruzzi, P. E.',
        title: 'A History of Modern Computing',
        year: 2003,
      },
      {
        author: 'Isaacson, W.',
        title: 'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution',
        year: 2014,
      },
      {
        author: 'Naughton, J.',
        title: 'A Brief History of the Future: Origins of the Internet',
        year: 2016,
      },
      {
        author: 'Brooks, F. P.',
        title: 'The Mythical Man-Month: Essays on Software Engineering (Anniversary ed.)',
        year: 1995,
      },
      {
        author: 'Pressman, R. S., y Maxim, B. R.',
        title: "Software Engineering: A Practitioner's Approach (9th ed.)",
        year: 2020,
      },
      {
        author: 'Sommerville, I.',
        title: 'Software Engineering (9th ed.)',
        year: 2011,
      },
      {
        author: 'Tanenbaum, A. S., y Wetherall, D. J.',
        title: 'Computer Networks (5th ed.)',
        year: 2011,
      },
    ],
  },
  {
    id: 'innovation-global',
    title: 'Índices de innovación y organismos globales',
    references: [
      {
        author: 'WIPO',
        title: 'Global Innovation Index 2024: Unlocking the promise of social innovation',
        year: 2024,
        url: 'https://www.wipo.int/global_innovation_index/en/2024/',
      },
      {
        author: 'WIPO',
        title: 'Resumen Índice Mundial de Innovación 2025',
        year: 2025,
        url: 'https://www.wipo.int/web-publications/global-innovation-index-2025/assets/89507/global-innovation-index-2025-en.pdf',
      },
      {
        author: 'Conahcyt',
        title: 'Programas Nacionales Estratégicos (PRONACES)',
        year: 2024,
        url: 'https://conahcyt.mx/pronaces/',
      },
      {
        author: 'Chesbrough, H.',
        title: 'Open Innovation: The New Imperative for Creating and Profiting from Technology',
        year: 2003,
      },
      {
        author: 'Etzkowitz, H., y Leydesdorff, L.',
        title: 'The dynamics of innovation: From National Systems and "Mode 2" to a Triple Helix of university–industry–government relations',
        year: 2000,
      },
      {
        author: 'OECD',
        title: 'Oslo Manual 2018: Guidelines for Collecting, Reporting and Using Data on Innovation (4th ed.)',
        year: 2018,
      },
      {
        author: 'Anónimo',
        title: 'La innovación tecnológica en México',
      },
    ],
  },
  {
    id: 'geopolitics',
    title: 'Geopolítica tecnológica',
    references: [
      {
        author: 'Sehgal, A.',
        title: 'Geopolitics of Semiconductor Supply Chains: The Case of TSMC, US-China-Taiwan Relations, and the COVID-19 Crisis',
        year: 2023,
        url: 'https://digitalcollections.sit.edu/isp_collection/3592/',
      },
      {
        author: 'Lee, K. et al.',
        title: 'Geopolitics and the Changing Landscape of Global Value Chains and Competition in the Global Semiconductor Industry',
        year: 2024,
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S004016252400547X',
      },
      {
        author: 'Peters, M. A.',
        title: 'Semiconductors, Geopolitics and Technological Rivalry: The US CHIPS & Science Act 2022',
        year: 2022,
        url: 'https://doi.org/10.1080/00131857.2022.2124914',
      },
      {
        author: 'OECD',
        title: 'Measuring distortions in international markets: The semiconductor value chain',
        year: 2023,
      },
      {
        author: 'FUMEC / USAID',
        title: 'Mapa de Ruta: Oportunidades para el Nearshoring de Semiconductores en México',
        year: 2024,
      },
      {
        author: 'TecNM',
        title: 'El Tecnológico Nacional de México en el ecosistema de semiconductores',
        year: 2025,
        url: 'https://www.merida.tecnm.mx/wp-content/uploads/2025/04/Revista-·-Semiconductores.pdf',
      },
      {
        author: 'Wilson Center',
        title: 'Prosperidad compartida: del "Made in Mexico" al "Designed in North America"',
        url: 'https://www.wilsoncenter.org/sites/default/files/media/uploads/documents/ESP_EstudioMicroprocesadores.pdf',
      },
      {
        author: 'Instituto Mora / El Universal',
        title: 'Semiconductores, seguridad y reputación en la relación México-EE.UU.',
        year: 2025,
        url: 'https://www.eluniversal.com.mx/opinion/instituto-mora/semiconductores-seguridad-y-reputacion-en-la-relacion-mexico-eeuu/',
      },
      {
        author: 'Haywood, T. et al.',
        title: 'The United States–China "tech war": Decoupling and the case of Huawei',
        year: 2024,
        url: 'https://doi.org/10.1111/1758-5899.13352',
      },
      {
        author: 'ECIPE',
        title: 'How Huawei Weathered the Storm: Resilience, Market Conditions or Failed Sanctions?',
        year: 2024,
        url: 'https://ecipe.org/publications/how-huawei-weathered-the-storm-resilience-market-conditions-or-failed-sanctions/',
      },
      {
        author: 'Branstetter, L.',
        title: 'Export Controls and US-China Technology Competition',
        year: 2024,
        url: 'https://www.brookings.edu/wp-content/uploads/2024/07/20240701_Branstetter_Sanctions.pdf',
      },
      {
        author: 'Zhang, Z.',
        title: "Technology and geopolitics: The social construction of Huawei's 5G controversy in Europe",
        year: 2024,
        url: 'https://journals.sagepub.com/doi/10.1177/17427665241251448',
      },
      {
        author: 'Humanities and Social Sciences Communications',
        title: 'Standardization catch-up strategy of latecomer enterprises: a longitudinal case of Huawei',
        year: 2025,
        url: 'https://www.nature.com/articles/s41599-025-04464-0',
      },
      {
        author: 'EWADIRECT / AEMPS Proceedings',
        title: "Huawei's Corporate Strategy and Market Competition Analysis",
        year: 2024,
        url: 'https://www.ewadirect.com/proceedings/aemps/article/view/25547',
      },
      {
        author: 'WEPUB / TEBMR',
        title: "Analysing Huawei's International Trade Strategy and Innovation Under Sanctions",
        year: 2024,
        url: 'https://wepub.org/index.php/TEBMR/article/download/3461/3807/6933',
      },
      {
        author: 'ResearchGate',
        title: "A Study of Huawei's 5G Technology Innovation Ecosystem Based on Actor-Network Theory",
        year: 2024,
        url: 'https://www.researchgate.net/publication/381525744',
      },
      {
        author: 'Galicia-Haro, E. et al.',
        title: 'El efecto de la innovación en el desarrollo y crecimiento de México: una aproximación usando las patentes',
        year: 2022,
      },
      {
        author: 'Anónimo',
        title: 'Estudio comparativo del emprendimiento tecnológico en aplicaciones móviles en Japón, Corea y México',
      },
      {
        author: 'Merritt, H.',
        title: 'Análisis de las capacidades tecnológicas de Corea del Sur en electrónica y telecomunicaciones (1999-2019)',
      },
    ],
  },
  {
    id: 'mexico-software',
    title: 'Industria de software en México',
    references: [
      {
        author: 'Micheli, J., y Oliver, R.',
        title: 'Empresas de software en México y sus vínculos de desarrollo local',
        year: 2017,
        url: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0301-70362017000300037',
      },
      {
        author: 'Rivera, M. Á., Ranfla, A., y Bátiz, J. L.',
        title: 'Aprendizaje tecnológico en empresas de software en México. Cuatro territorios locales: Guadalajara, Tijuana, Mexicali y Distrito Federal',
        year: 2010,
      },
      {
        author: 'Hualde, A., y Díaz, C.',
        title: 'La industria del software en Baja California y Jalisco: dos experiencias contrastantes',
        year: 2010,
        url: 'https://www.colef.mx/noticia/la-industria-del-software-en-baja-california-y-jalisco-dos-experiencias-contrastantes/',
      },
      {
        author: 'Hualde, A., y Gomis, R.',
        title: 'Pymes de software en la frontera norte de México: desarrollo empresarial y construcción institucional de un clúster',
        year: 2007,
        url: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0301-70362007000300008',
      },
      {
        author: 'Hualde, A. (Coord.)',
        title: 'Pymes y sistemas regionales de innovación: un análisis de la industria del software en Baja California y Jalisco',
        year: 2010,
      },
      {
        author: 'Gomis, R., y López, I.',
        title: 'La generación de ventajas competitivas a partir de la adopción y la aplicación de las tecnologías de la información: el sector de la electrónica de la industria maquiladora de exportación en Tijuana',
        year: 2004,
      },
      {
        author: 'Rivera Vargas, P.',
        title: 'Innovación tecnológica y transformación digital en comunidades locales: implicaciones sociales y económicas',
        year: 2020,
      },
      {
        author: 'Osorio, L. Á.',
        title: 'Indicador compuesto de desarrollo sostenible del estado de Baja California',
        year: 2022,
        url: 'https://revistasinvestigacion.lasalle.mx/index.php/relais/article/view/1788',
      },
      {
        author: 'Secretaría de Economía',
        title: 'Programa para el Desarrollo de la Industria del Software (PROSOFT)',
        year: 2004,
      },
      {
        author: 'Secretaría de Economía',
        title: 'Programa para el Desarrollo de la Industria del Software (PROSOFT 2.0)',
        year: 2008,
      },
      {
        author: 'Secretaría de Economía',
        title: 'Programa de Desarrollo Innovador 2013-2018 (PRODEINN)',
        year: 2014,
      },
      {
        author: 'Secretaría de Economía',
        title: 'Programa para el Desarrollo de la Industria del Software (PROSOFT 3.0)',
        year: 2015,
      },
      {
        author: 'Consejo Nacional de Clusters de Software',
        title: 'Directorio de clusters de software y tecnologías de información en México',
        year: 2016,
      },
      {
        author: 'Startup Blink',
        title: 'Global startup ecosystem report 2024',
        year: 2024,
      },
      {
        author: 'Alcor BPO',
        title: 'Software development in Mexico: Projections for 2026',
        year: 2025,
        url: 'https://alcor-bpo.com/software-development-mexico/',
      },
      {
        author: 'Alcor BPO',
        title: 'Nearshore software development in Mexico 2025',
        year: 2025,
        url: 'https://alcor-bpo.com/everything-you-need-to-know-about-nearshore-software-development-in-mexico/',
      },
      {
        author: 'Distillery',
        title: '8 benefits of nearshore software development in Mexico',
        year: 2024,
        url: 'https://distillery.com/blog/nearshore-software-development-mexico/',
      },
      {
        author: 'Mobilunity',
        title: 'Nearshore software development in Mexico',
        year: 2025,
        url: 'https://mobilunity.com/blog/nearshore-software-development-mexico/',
      },
      {
        author: 'nCube',
        title: 'Mexico nearshore software development services',
        year: 2025,
        url: 'https://ncube.com/nearshoring-software-development-mexico',
      },
      {
        author: 'ScienceSoft',
        title: 'The 2025 guide to nearshore software development in Mexico',
        year: 2024,
        url: 'https://www.scnsoft.com/software-development/nearshore/mexico',
      },
      {
        author: 'South',
        title: 'Nearshore software development in Mexico: 2025 guide for U.S. companies',
        year: 2025,
        url: 'https://www.hireinsouth.com/post/nearshore-software-development-in-mexico-guide-for-u-s-companies',
      },
    ],
  },
  {
    id: 'bc-ecosystem',
    title: 'Ecosistema regional — Baja California',
    references: [
      {
        author: 'Alcor BPO',
        title: 'Software development in Tijuana: Potential of 100k talent pool',
        year: 2024,
        url: 'https://alcor.com/software-development-in-tijuana/',
      },
      {
        author: 'Nearshore Americas',
        title: 'As near as nearshore can be: Software development in Tijuana',
        year: 2019,
        url: 'https://nearshoreamericas.com/nearshore-software-development-tijuana/',
      },
      {
        author: 'SOFTKITECT',
        title: 'Empresa de desarrollo de software en Tijuana, Baja California [LinkedIn]',
        year: 2025,
        url: 'https://mx.linkedin.com/company/softkitect',
      },
      {
        author: 'Encora',
        title: 'About us',
        year: 2025,
        url: 'https://www.encora.com/about',
      },
      {
        author: 'Encora',
        title: 'Nearshore services in the Americas',
        year: 2025,
        url: 'https://www.encora.com/global-delivery/nearshore-americas',
      },
      {
        author: 'Encora',
        title: 'Encora achieves AWS DevOps Competency status',
        year: 2024,
        url: 'https://news.encora.com/news/aws-devops-competency-status',
      },
      {
        author: 'Encora',
        title: 'Encora surpasses 500 AWS certifications within a month',
        year: 2024,
        url: 'https://news.encora.com/news/encora-surpasses-500-aws-certifications-within-a-month',
      },
      {
        author: 'Encora',
        title: 'Innovate on the cloud with Encora + AWS',
        year: 2025,
        url: 'https://www.encora.com/partners/aws',
      },
      {
        author: 'AWS Marketplace',
        title: 'Encora managed services & support',
        year: 2025,
        url: 'https://aws.amazon.com/marketplace/pp/prodview-ff5vqfv4rso4u',
      },
      {
        author: 'ZoomInfo',
        title: 'Encora — company overview',
        year: 2025,
        url: 'https://www.zoominfo.com/c/encora/82888375',
      },
      {
        author: 'Glassdoor',
        title: 'Working at Encora',
        year: 2025,
      },
      {
        author: 'IdooGroup',
        title: 'Mobile application development Tijuana',
        year: 2025,
        url: 'https://www.idoogroup.com/en/',
      },
      {
        author: 'Ingeniería Pixel',
        title: 'Desarrollo de aplicaciones móviles en Tijuana',
        year: 2025,
        url: 'https://desarrollodeaplicacionesmoviles.com/en-tijuana/',
      },
      {
        author: 'SYCA Consultores',
        title: 'Desarrollo de software para empresas en Tijuana, Baja California',
        year: 2025,
        url: 'https://syca.com.mx/desarrollo-de-software/baja-california/tijuana/',
      },
    ],
  },
  {
    id: 'engineering-standards',
    title: 'Estándares y métricas de ingeniería de software',
    references: [
      {
        author: 'Forsgren, N., Humble, J., y Kim, G.',
        title: 'Accelerate: The science of lean software and DevOps',
        year: 2018,
      },
      {
        author: 'Google Cloud',
        title: 'DORA research program — 2024 State of DevOps Report',
        year: 2024,
        url: 'https://dora.dev/research/2024/dora-report/',
      },
      {
        author: 'Google Cloud',
        title: 'Four Keys — open source DORA metrics dashboard',
        year: 2024,
        url: 'https://github.com/GoogleCloudPlatform/fourkeys',
      },
      {
        author: 'Sleuth',
        title: 'DORA metrics: What they are and how to track them',
        year: 2025,
        url: 'https://www.sleuth.io/post/dora-metrics',
      },
      {
        author: 'LinearB',
        title: 'Engineering metrics and DORA',
        year: 2025,
        url: 'https://linearb.io/blog/dora-metrics',
      },
      {
        author: 'Datadog',
        title: 'Monitoring MTTR and deployment frequency',
        year: 2025,
        url: 'https://www.datadoghq.com',
      },
      {
        author: 'CMMI Institute',
        title: 'CMMI model overview — capability maturity model integration',
        year: 2023,
        url: 'https://cmmiinstitute.com',
      },
      {
        author: 'ISO',
        title: 'ISO/IEC 27001:2022 — Information security management systems',
        year: 2022,
        url: 'https://www.iso.org/standard/27001',
      },
      {
        author: 'ISO',
        title: 'ISO 9001:2015 — Quality management systems',
        year: 2015,
        url: 'https://www.iso.org/standard/62085.html',
      },
      {
        author: 'TopCertifier',
        title: 'CMMI certificación en México — servicios de consultoría y evaluación',
        year: 2024,
        url: 'https://www.iso-certification-mexico.com/servizi-certificazione-cmmi.html',
      },
    ],
  },
]
