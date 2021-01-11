require('dotenv').config()
const express = require('express')
const expressValidator = require('express-validator')
const app = express()

// importing routes
const indexRoute = require('./routes/index')

// middlewares
app.use(express.json())
app.use(expressValidator())

// routes
app.use('/api', indexRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server started on port ${port}`)
    require('./config/dbConnection')
    console.log("Test API by link -> http://localhost:3000/api/test using postman")
})