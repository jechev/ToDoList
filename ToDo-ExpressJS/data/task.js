const mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
})

var Task = module.exports = mongoose.model('Task',taskSchema)