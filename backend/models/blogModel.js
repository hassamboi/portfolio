const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    author: {
      type: String,
      required: [true, 'Please add the author'],
    },
    categories: { type: [String], required: true, default: [] },
    description: {
      type: String,
      required: [true, 'Please add a decsription'],
    },
    content: { type: String, required: [true, 'Please add the content'] },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Blog', blogSchema)
