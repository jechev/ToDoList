const Task = require('../data/task')

module.exports = {
    post: (req, res) => {
        var bodyData = req.body
        var text
        if(bodyData.text){
            text= bodyData.text
        }else {
            for(var name in bodyData){
            text = name
            }
        }
        
		console.log(text)

        var task = new Task({
            text: text,
            isCompleted: false
        })
        task.save(function(err) {
            if(err){
                res.send(err)
            }
            res.json({message: 'Task created!'})
        })
    },
    all: (req, res) => {
        Task.find()
        .then(tasks => {
            res.json(tasks)
        })
    },
    activies: (req,res) => {
        Task.find(
            {
                isCompleted:false
            }
        )
        .then(tasks => {
            res.json(tasks)
        })
    },
    completed: (req,res) => {
        Task.find(
            {
                isCompleted:true
            }
        )
        .then(tasks => {
            res.json(tasks)
        })
    },
    update: (req,res) => {
        var id = req.params.id
        var bodyData = req.body
		var isCompleted
        if(bodyData.isCompleted){
            isCompleted= bodyData.isCompleted
        }else {
            for(var name in bodyData){
            isCompleted = name
            }
        }
        Task.findByIdAndUpdate(id,
        {$set: {isCompleted:isCompleted}},
        { safe: true, upsert: true, new: true })
        .then(task => {
            res.json('Task ' + task._id + ' is updated')
        })
        
    },
    delete: (req,res) => {
        var id = req.params.id
        Task.findByIdAndRemove(id)
        .then( task => {
            res.json('Task ' + task._id+ ' is deleted')
        })
    }
}