export interface IpDocument {
  title: string
  path: string
}

export interface RegistrationDetail {
  label: string
  value: string
}

export interface Project {
  name: string
  description: string
  registration: RegistrationDetail[]
  documents: IpDocument[]
}

export const project: Project = {
  name: 'Madeat',
  description:
    'Madeat es una plataforma web colaborativa de recetas de cocina con funcionalidades de red social. Permite publicar, descubrir y forkear recetas con ingredientes, pasos detallados e información nutricional. Incluye sistema de calificaciones, comentarios anidados, libros de recetas personales, planificador semanal de comidas y generación automática de lista de compras. Desarrollada con Node.js, Hono, React, Vite y MongoDB.',
  registration: [
    {
      label: 'Clasificación',
      value: 'Obra de cómputo · Ciencias de la ingeniería y tecnología',
    },
    {
      label: 'Autoría',
      value: 'Obra original · 1 autor · Campus Tijuana',
    },
    {
      label: 'Estado del trámite',
      value: 'Expediente entregado en Departamento de PI UABC · En proceso ante INDAUTOR',
    },
  ],
  documents: [],
}
