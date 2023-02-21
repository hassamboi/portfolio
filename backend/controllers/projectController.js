const asyncHandler = require('express-async-handler')
const Project = require('../models/projectModel')

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { title, description, technologies, area, repoURL, imageURL } = req.body

  if (!title || !description || !technologies || !area || !repoURL) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const project = await Project.create({ title, description, technologies, area, repoURL, imageURL })

  if (project) {
    res.status(201).json({ message: 'Project successfully created' })
  } else {
    res.status(400)
    throw new Error('Could not create the project')
  }
})

// @desc    Get projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find()
  res.status(200).json(projects)
})

module.exports = {
  createProject,
  getProjects,
}
