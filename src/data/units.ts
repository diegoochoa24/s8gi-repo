export interface UnitTopic {
  number: string
  title: string
  subtopics?: string[]
}

export interface CourseUnit {
  number: 1 | 2 | 3
  title: string
  topics: UnitTopic[]
}

export const units: CourseUnit[] = [
  {
    number: 1,
    title: 'Propiedad intelectual',
    topics: [
      { number: '1.1', title: 'Definición de la propiedad intelectual' },
      { number: '1.2', title: 'Registro de derechos de autor' },
      { number: '1.3', title: 'Transferencia del conocimiento entre ciencia e industria' },
      { number: '1.4', title: 'Invenciones', subtopics: ['Patentes', 'Modelos de utilidad', 'Diseños industriales'] },
      { number: '1.5', title: 'Signos distintivos', subtopics: ['Registro de marca', 'Avisos comerciales'] },
      { number: '1.6', title: 'Organismos gubernamentales y estatales para el seguimiento de registro' },
    ],
  },
  {
    number: 2,
    title: 'Revolución industrial',
    topics: [
      { number: '2.1', title: 'Innovaciones antes de la revolución industrial' },
      { number: '2.2', title: 'Primera Revolución Industrial', subtopics: ['Antecedentes', 'Implicaciones'] },
      { number: '2.3', title: 'Segunda Revolución Industrial', subtopics: ['Antecedentes', 'Implicaciones'] },
      { number: '2.4', title: 'Tercera Revolución Industrial', subtopics: ['Antecedentes', 'Implicaciones'] },
      { number: '2.5', title: 'Cuarta Revolución Industrial', subtopics: ['Antecedentes', 'Implicaciones'] },
      { number: '2.6', title: 'Estado actual' },
    ],
  },
  {
    number: 3,
    title: 'Ecosistemas de innovación',
    topics: [
      { number: '3.1', title: 'Perspectiva de los ecosistemas de innovación' },
      {
        number: '3.2',
        title: 'Ecosistemas de innovación',
        subtopics: [
          'Sistemas complejos para la innovación',
          'Incentivos para la innovación',
          'Competitividad y escalamiento industrial',
          'Políticas de innovación',
          'Sistemas para la gestión del conocimiento',
        ],
      },
    ],
  },
]
