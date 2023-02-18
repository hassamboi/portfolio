const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body

  if (!fullName || !email || !password) {
    res.status(400)
    throw new Error('Please fill in all the fields')
  }

  res.status(200).json({ message: 'Registered a user' })

  // check if user is already registered
  // salt and hash the password
  // store the data in database
  // respond with success status
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // fetch user from db
  // return 400 if no user found
  // compares passwords & return 400 if found incorrect
  // return 200 with token

  //   const user = {}
  //   user.token = generateToken(user.id)
  res.status(200).json({ message: 'Returned user token' })
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
}
