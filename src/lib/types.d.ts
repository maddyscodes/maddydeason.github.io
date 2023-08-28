export interface Projects {
  title: string
  startDate: string
  endDate?: string
  skills: Array<string>
  description: string
  url?: string
  urlText?: string
  image?: string
  imageAlt?: string
  isFeatured: boolean
}

export interface Socials {
  name: string
  url: string
}

export type Theme = 'system' | 'light' | 'dark'