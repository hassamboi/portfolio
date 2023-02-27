import axios from 'axios'

const API_URL = '/api/blogs/'

// get blogs
const getBlogs = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// get blogs
const getBlog = async id => {
  const response = await axios.get(API_URL + `${id}`)
  return response.data
}

const blogsService = {
  getBlogs,
  getBlog,
}

export default blogsService
