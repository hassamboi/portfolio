import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import projectsService from './projectsService'

const initialState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get projects
export const getProjects = createAsyncThunk('projects/getAll', async (_, thunkAPI) => {
  try {
    return await projectsService.getProjects()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getProjects.pending, state => {
        state.isLoading = true
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.projects = action.payload
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = projectsSlice.actions
export default projectsSlice.reducer
