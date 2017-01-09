const path = require('path')

var rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://demo:demo@ds159188.mlab.com:59188/todolist',
    port: 1337
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://demo:demo@ds159188.mlab.com:59188/todolist',
    port: process.env.port
  }
}
    