const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')
const expressInt = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(expressInt())

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}`)
})

module.exports = server