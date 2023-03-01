const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, readBlog } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.post('/blogs/:id', protect, readBlog)

module.exports = router
