const mongoose = require('mongoose')
const blogModel = require('./blogModel')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    readBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: blogModel }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
