import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox } from '@material-ui/core'
import { makeCompleted } from '../../features/todos/todoSlice'
import './TodoItem.css'

function TodoItem({ title, completed, id }) {
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(makeCompleted(id))
  }
  return (
    <div className="todo_item">
      <Checkbox
        checked={completed}
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {/* title */}
      <p className={completed && 'todo_item__completed'}>{title}</p>
    </div>
  )
}

export default TodoItem
