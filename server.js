const express = require('express')
const server = express()
const productsRoute = require('./api/products-route')


server.use(express.json())

server.use(productsRoute)



module.exports = server