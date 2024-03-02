import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type TPost = {
  userId: number
  id: number
  title: string
  body: string
}

type TState = {
  loading: boolean
  success: boolean
  error: boolean
  data: TPost[]
}

const initialState: TState = {
  loading: false,
  success: false,
  error: false,
  data: [],
}

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loadPosts.pending, (state) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false
      state.success = true
      state.data = action.payload
    })

    builder.addCase(loadPosts.rejected, (state) => {
      // Add user to the state array
      state.loading = false
      state.error = true
    })
  },
})

// export const { increment } = postsSlice.actions
export default postsSlice.reducer
