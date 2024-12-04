const server = require('./config/server')
const database = require('./config/database')
require('./config/routes')(server)

