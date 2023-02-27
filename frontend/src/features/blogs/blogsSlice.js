import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import blogsService from './blogsService'

const initialState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get all blogs
export const getBlogs = createAsyncThunk('blogs/getAll', async (_, thunkAPI) => {
  try {
    return await blogsService.getBlogs()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// get a single blog
export const getBlog = createAsyncThunk('blogs/getOne', async (id, thunkAPI) => {
  try {
    return await blogsService.getBlog(id)
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
      .addCase(getBlog.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.blogs = action.payload
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = blogsSlice.actions
export default blogsSlice.reducer
