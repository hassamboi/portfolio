const express = require('express')
const router = express.Router()
const { createBlog, getBlogs } = require('../controllers/blogController')
const protect = require('../middleware/authMiddleware')

router.post('/', protect, createBlog)
router.get('/', getBlogs)

module.exports = router
