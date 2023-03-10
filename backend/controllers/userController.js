const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // check if user is already registered
  const userRegistered = await User.findOne({ email })

  if (userRegistered) {
    res.status(400)
    throw new Error('User already registered')
  }

  // salt and hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({ name, email, password: hashedPassword })

  // respond with user data
  if (user) {
    res
      .status(201)
      .json({ _id: user.id, name: user.name, email: user.email, readBlogs: user.readBlogs, token: generateToken(user._id) })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // fetch user from db
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res
      .status(200)
      .json({ _id: user.id, name: user.name, email: user.email, readBlogs: user.readBlogs, token: generateToken(user._id) })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// @desc    Add blog to user's read blogs
// @route   POST /api/users/blogs/:id
// @access  Private
const readBlog = asyncHandler(async (req, res) => {
  if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400)
    throw new Error('Blog id not valid')
  }

  const user = await User.findByIdAndUpdate(req.user.id, { $addToSet: { readBlogs: req.params.id } }, { new: true })

  // respond with user data
  if (user) {
    res.status(201).json(user.readBlogs)
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// helper ftn to generate JWT
const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
  readBlog,
}
