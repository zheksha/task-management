import TodoApp from '@/components/apps/TodoApp/TodoApp'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <div>Dashboard</div>
      case 'todoApp':
        return <TodoApp />
      default:
        return <div>Page not found</div>
    }
  }
  return (
    <div className="bg-background">
      <div className="fixed top-0 left-0 w-64 z-40">
        <div className="p-6">
          <h1>My Applications</h1>
          <nav>
            <button onClick={() => setCurrentPage('dashboard')}>
              Dashboard
            </button>
            <button onClick={() => setCurrentPage('todoApp')}>Todo App</button>
          </nav>
        </div>
      </div>

      {renderContent()}
    </div>
  )
}

export default Sidebar
