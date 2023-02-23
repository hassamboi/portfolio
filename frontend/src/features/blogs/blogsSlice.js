import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import blogsService from './blogsService'

const initialState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get projects
export const getBlogs = createAsyncThunk('blogs/getAll', async (_, thunkAPI) => {
  try {
    return await blogsService.getBlogs()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getBlogs.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.blogs = action.payload
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = blogsSlice.actions
export default blogsSlice.reducer
