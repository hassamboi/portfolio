import axios from 'axios'

const API_URL = '/api/projects/'

// get projects
const getProjects = async projectData => {
  const response = await axios.get(API_URL)
  return response.data
}

const projectsService = {
  getProjects,
}

export default projectsService
