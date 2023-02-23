import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import projectsReducer from '../features/projects/projectsSlice'
import blogsReducer from '../features/blogs/blogsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
  },
})
