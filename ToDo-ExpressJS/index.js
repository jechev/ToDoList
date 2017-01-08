const express = require('express')
const bodyParser = require('body-parser')
var app = express()

var env = process.env.NODE_ENV || 'development'
var config = require('./config/config')[env]

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./config/database')(config)
require('./config/router')(app)



app.listen(config.port)
console.log('Express listen on port ' + config.port)