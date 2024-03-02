import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type TodoData = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type TodoState = {
  loading: boolean
  success: boolean
  error: boolean
  data: TodoData[]
}

const initialState: TodoState = {
  loading: false,
  success: false,
  error: false,
  data: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTodos.pending, (state) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(getTodos.fulfilled, (state, action) => {
      // Add user to the state array
      state.success = true
      state.error = false
      state.data = action.payload
    })
    builder.addCase(getTodos.rejected, (state) => {
      // Add user to the state array
      state.loading = false
      state.error = true
      state.success = false
    })
  },
})

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
})

// export const { increment } = todosSlice.actions
export default todosSlice.reducer
