var taskController = require('../controllers/task-controller')

module.exports = (app) => {
    app.post('/task/',taskController.post)
    app.get('/task/all',taskController.all)
    app.get('/task/activities',taskController.activies)
    app.get ('/task/completed', taskController.completed)
    app.put('/task/update/:id', taskController.update)
    app.delete('/task/delete/:id', taskController.delete)
    app.all('*', (req, res) => {
    res.status(404)
    res.send('Not Found')
    res.end()
    })
}