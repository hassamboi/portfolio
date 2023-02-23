import axios from 'axios'

const API_URL = '/api/blogs/'

// get blogs
const getBlogs = async projectData => {
  const response = await axios.get(API_URL)
  return response.data
}

const blogsService = {
  getBlogs,
}

export default blogsService
