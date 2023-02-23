const express = require('express')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorHandler')
const morgan = require('morgan')
const connectDB = require('./config/db')

// connect to mongo database
connectDB()

const port = process.env.PORT || 5000
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/projects', require('./routes/projectRoutes'))
app.use('/api/blogs', require('./routes/blogRoutes'))

// handle errors after the api hit
app.use(errorHandler)

// Add a catch-all route handler for 404 errors
// app.use('*', (req, res) => {
//   res.status(404).json({ message: 'Route not found' })
// })

app.listen(port, () => console.log(`Server listening on port ${port}`))
