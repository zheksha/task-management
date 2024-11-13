import React, { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import TodoItem from './TodoItem'
import type { FilterType, ITodo } from './todo.types'
import { Category } from './todo.types'
import { mockTodos } from './todo.mock'

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(mockTodos)
  const [newTodo, setNewTodo] = useState<string>('')
  const [category, setCategory] = useState<Category>(Category.Other)
  const [filter, setFilter] = useState<FilterType>('all')

  interface IKeyLabel<T> {
    value: T
    label: string
  }

  const filterButtons: IKeyLabel<FilterType>[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ]

  const categories: IKeyLabel<Category>[] = Object.entries(Category).map(
    ([key, value]) => ({
      value: key as Category, // type casting
      label: value,
    })
  )

  const addTodo = (e: FormEvent): void => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: !false,
          category,
          createdAt: new Date(),
        },
      ])
      setNewTodo('')
      setCategory(Category.Other)
    }
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    if (filter === 'active') return !todo.completed
    return true
  })

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Todo List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-grow"
            placeholder="Add a new todo..."
          />
          <Select
            value={category}
            onValueChange={(value: Category) => setCategory(value)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit">Add</Button>
        </form>

        {/* Filters* */}
        <div className="flex gap-2 mb-6">
          {filterButtons.map((btn) => (
            <Button
              key={btn.value}
              size="sm"
              onClick={() => setFilter(btn.value)}
              variant={filter === btn.value ? 'default' : 'outline'}
            >
              {btn.label}
            </Button>
          ))}
        </div>

        {/* Todos */}
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          )
        })}

        {filteredTodos.length === 0 && (
          <div className="mt-4 text-center text-sm text-gray-500 py-5">
            No todos found. Please add some tasks to get started!
          </div>
        )}

        {todos.length > 0 && (
          <div className="mt-4 text-right text-sm text-gray-500 py-5">
            {todos.filter((todo) => !todo.completed).length} items left to
            complete the list
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TodoApp
