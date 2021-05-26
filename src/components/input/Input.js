import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todos/todoSlice'
import './Input.css'

function Input() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const addTodo = (event) => {
    event.preventDefault()
    console.log(`Add ${input}`)
    dispatch(
      saveTodo({
        title: input,
        completed: false,
        id: new Date(),
      }),
    )
  }
  return (
    <form className="input">
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>GO</button>
    </form>
  )
}

export default Input
