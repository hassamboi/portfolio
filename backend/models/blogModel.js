const mongoose = require('mongoose')

const sectionSchema = mongoose.Schema({
  name: { type: String, required: [true, 'Please add section title'] },
  content: { type: String, required: [true, 'Please add section content'] },
})

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    sections: [sectionSchema],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Blog', blogSchema)
