
const express = require('express')
// idk what this one does but she did it so
const router = express.Router()

// importing randomWYQuestion from the model folder and qyr_questions.js file
const randomWYRQuestion = require('../model/wyr_questions.js')


router.get('/', function (req, res, next) {
    res.send('Placeholder for the homepage')
})

// always req res next
router.get('/wyr', function(req, res, next) {
    // const wyr is a json object


    // calling question function to make the whole thing work
    const wyr = randomWYRQuestion()

    // in feedback form it was render, instead of json, but json is a function that can take json objects and package them to be sent to other parts of the application
    res.json(wyr)

})

// This is exporting to everything, needed and needs to be last line of code in index.js
module.exports = router