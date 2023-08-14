export interface Projects {
  title: string
  skills: Array<string>
  description: string
  url?: string
  image?: string
  imageAlt?: string
  status: string
  isFeatured: boolean
}

export interface Socials {
  name: string
  url: string
}

export type Theme = 'system' | 'light' | 'dark'