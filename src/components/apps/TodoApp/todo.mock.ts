import { type ITodo, Category } from './todo.types'

export const mockTodos: ITodo[] = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    category: Category.Personal,
    createdAt: new Date(),
  },
  {
    id: 2,
    text: 'Learn Next.js',
    completed: true,
    category: Category.Work,
    createdAt: new Date(),
  },
  {
    id: 3,
    text: 'Learn Node.js',
    completed: false,
    category: Category.School,
    createdAt: new Date(),
  },
]
