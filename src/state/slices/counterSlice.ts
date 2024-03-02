import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const asyncInc = createAsyncThunk('counter/asyncInc', async () => {
  const response = await new Promise((resolve) => setTimeout(resolve, 2000))
  return response
})

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment(state, action: PayloadAction<{ nomre: number }>) {
      state.count += action.payload.nomre
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(asyncInc.fulfilled, (state) => {
      // Add user to the state array
      state.count += 1
    })
  },
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer
