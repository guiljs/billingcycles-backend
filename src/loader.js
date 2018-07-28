const server = require('./config/server.js')
require('./config/database.js')
require('./config/router')(server)