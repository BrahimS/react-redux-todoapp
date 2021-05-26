import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todos/todoSlice'
import Input from './components/input/Input'
import TodoItem from './components/todos/TodoItem'
import './App.css'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}>
              {todo.tite}
            </TodoItem>
          ))}
        </div>
        <Input />
      </div>
    </div>
  )
}

export default App
