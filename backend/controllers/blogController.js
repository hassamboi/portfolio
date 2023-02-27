const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModel')

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
  const { title, sections } = req.body

  if (!title || !sections) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const blog = await Blog.create({ title, sections })

  if (blog) {
    res.status(201).json({ message: 'Blog successfully created' })
  } else {
    res.status(400)
    throw new Error('Could not create the blog')
  }
})

// @desc    Get blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find()
  res.status(200).json(blogs)
})

// @desc    Get single blog
// @route   GET /api/blogs/:id
// @access  Public
const getBlog = asyncHandler(async (req, res) => {
  if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400)
    throw new Error('Blog id not valid')
  }

  const blog = await Blog.find({ id: req.params.id })
  res.status(200).json(blog)
})

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
}
