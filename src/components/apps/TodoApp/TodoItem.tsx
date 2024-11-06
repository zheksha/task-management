import React from 'react'
import { CheckCircle, Circle, Trash2 } from 'lucide-react'
import type { ITodo } from './todo.types'

interface ITodoItemProps {
  todo: ITodo
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { todo } = props
  console.log(todo)
  return (
    <div
      className={`flex items-center justify-between p-3 mb-1 rounded-lg border ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        {/** Toggle Button */}
        <button className="text-gray-500 hover:text-gray-800">
          {todo.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>

        {/** Text of the Todo */}
        <div className="flex flex-col">
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.text}
          </span>
          <span className="text-xs text-gray-500">
            {todo.category} - {todo.createdAt.toLocaleDateString()}
          </span>
        </div>
      </div>

      {/** Delete button */}
      <button className="text-gray-500 hover:text-red-500 transition-colors">
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  )
}

export default TodoItem
