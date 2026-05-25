export type DocumentCategory = 'survey' | 'practical' | 'essay'

export interface CourseDocument {
  id: string
  title: string
  subtitle: string
  category: DocumentCategory
  path: string
  unit: 1 | 2 | 3
}

export const documents: CourseDocument[] = [
  {
    id: 'survey-1-v1',
    title: 'Cuestionario 1',
    subtitle: 'LFT y LFDA (Versión 1)',
    category: 'survey',
    path: '/s8gi-repo/documents/surveys/S8GI - Cuestionario 1 (Versión 1).pdf',
    unit: 1,
  },
  {
    id: 'survey-1-v2',
    title: 'Cuestionario 1',
    subtitle: 'LFT y LFDA (Versión 2)',
    category: 'survey',
    path: '/s8gi-repo/documents/surveys/S8GI - Cuestionario 1 (Versión 2).pdf',
    unit: 1,
  },
  {
    id: 'survey-2',
    title: 'Cuestionario 2',
    subtitle: 'Transferencia de tecnología',
    category: 'survey',
    path: '/s8gi-repo/documents/surveys/S8GI - Cuestionario 2.pdf',
    unit: 1,
  },
  {
    id: 'practical-1',
    title: 'Práctica 1',
    subtitle: 'Investigación guiada a la propiedad intelectual',
    category: 'practical',
    path: '/s8gi-repo/documents/practicals/S8GI - Práctica 1.pdf',
    unit: 1,
  },
  {
    id: 'practical-2',
    title: 'Práctica 2',
    subtitle: 'Transferencia del conocimiento',
    category: 'practical',
    path: '/s8gi-repo/documents/practicals/S8GI - Práctica 2.pdf',
    unit: 1,
  },
  {
    id: 'essay-1',
    title: 'Ensayo 1',
    subtitle: 'Propiedad intelectual',
    category: 'essay',
    path: '/s8gi-repo/documents/essays/S8GI - Ensayo 1.pdf',
    unit: 1,
  },
  {
    id: 'practical-5',
    title: 'Práctica 5',
    subtitle: 'Innovación tecnológica',
    category: 'practical',
    path: '/s8gi-repo/documents/practicals/S8GI - Práctica 5.pdf',
    unit: 2,
  },
  {
    id: 'essay-p6',
    title: 'Práctica 6',
    subtitle: 'Estado actual sobre innovación tecnológica',
    category: 'essay',
    path: '/s8gi-repo/documents/essays/S8GI - Práctica 6.pdf',
    unit: 2,
  },
  {
    id: 'essay-p7',
    title: 'Práctica 7',
    subtitle: 'Estudio de caso internacional',
    category: 'essay',
    path: '/s8gi-repo/documents/essays/S8GI - Práctica 7.pdf',
    unit: 2,
  },
  {
    id: 'essay-p8',
    title: 'Práctica 8',
    subtitle: 'Estudio de caso nacional',
    category: 'essay',
    path: '/s8gi-repo/documents/essays/S8GI - Práctica 8.pdf',
    unit: 3,
  },
  {
    id: 'essay-p9',
    title: 'Práctica 9',
    subtitle: 'Estudio de caso local (Ensayo)',
    category: 'essay',
    path: '/s8gi-repo/documents/essays/S8GI - Práctica 9 Ensayo.pdf',
    unit: 3,
  },
  {
    id: 'practical-9',
    title: 'Práctica 9',
    subtitle: 'Estudio de caso local (Reporte)',
    category: 'practical',
    path: '/s8gi-repo/documents/practicals/S8GI - Práctica 9.pdf',
    unit: 3,
  },
]
