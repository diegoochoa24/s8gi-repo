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

export const sourceGroups: SourceGroup[] = []
