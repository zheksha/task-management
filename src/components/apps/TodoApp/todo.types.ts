export enum Category {
  Personal = 'Personall',
  Work = 'Work',
  School = 'School',
  Other = 'Other',
}

export type FilterType = 'all' | 'active' | 'completed'

export interface ITodo {
  id: number
  text: string
  completed: boolean
  category: Category
  createdAt: Date
}
