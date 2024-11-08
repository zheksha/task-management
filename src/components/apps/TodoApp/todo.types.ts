export enum Category {
  Personal = 'Personal',
  Work = 'Work',
  School = 'School',
  Other = 'Other',
  MoreStuff = 'MoreStuff',
}

export type FilterType = 'all' | 'active' | 'completed'

export interface ITodo {
  id: number
  text: string
  completed: boolean
  category: Category
  createdAt: Date
}
