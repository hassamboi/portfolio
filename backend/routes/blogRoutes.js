const express = require('express')
const router = express.Router()
const { createBlog, getBlogs, getBlog } = require('../controllers/blogController')
const protect = require('../middleware/authMiddleware')

router.post('/', protect, createBlog)
router.get('/', getBlogs)
router.get('/:id', getBlog)

module.exports = router
