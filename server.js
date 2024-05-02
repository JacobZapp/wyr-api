// importing express
const express = require('express')

// importing the routes in that folder, so we can use the data from there
const indexRouter= require('./routes/index')

// making new web app server
const app = express()

// everything will be sent to indexRouter to be taken care of or handled
app.use('/', indexRouter)

// This will be here to help us know that the server is running and on what port
const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server Running on port ', server.address().port)
})