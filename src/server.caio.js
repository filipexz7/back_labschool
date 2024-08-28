require('dotenv').config({path : 'variaveis.env'})

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parse')
const routes = require('./routes.js')

const server = express()

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(cors())
server.use("/api", routes)

server.listen(process.env.portserver, () =>{
    console.log(`server listening on http://localhost.${process.env.portserver}`)
})
