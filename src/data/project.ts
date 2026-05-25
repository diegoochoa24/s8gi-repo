export interface IpDocument {
  title: string
  path: string
}

export interface Project {
  name: string
  description: string
  documents: IpDocument[]
}

export const project: Project = {
  name: 'Madeat',
  description:
    'Madeat es una plataforma web colaborativa de recetas de cocina con funcionalidades de red social. Permite publicar, descubrir y forkear recetas con ingredientes, pasos detallados e información nutricional. Incluye sistema de calificaciones, comentarios anidados, libros de recetas personales, planificador semanal de comidas y generación automática de lista de compras. Desarrollada con Node.js, Hono, React, Vite y MongoDB.',
  documents: [],
}
