import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    makeCompleted: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.completed === true) {
            item.completed = false
          } else {
            item.completed = true
          }
        }
      })
    },
  },
})

export const { saveTodo, makeCompleted } = todoSlice.actions
export const selectTodoList = (state) => state.todos.todoList
export default todoSlice.reducer
