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

// handle errors after the api hit
app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on port ${port}`))
