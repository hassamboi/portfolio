const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    technologies: [String],
    area: [String],
    repoURL: {
      type: String,
      required: [true, 'Please add a url'],
    },
    imageURL: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Project', projectSchema)
