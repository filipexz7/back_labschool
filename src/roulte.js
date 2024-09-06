

const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoControler = require('/controllers/CursoController')

route.options("*", cors())



route.get('/curso', cursoController.findALLTurmas)
route.post('/curso', cursoController.saveCurso)
route.put('/curso/:id', cursoControler.updateCurso)
route.delete('/curso/:id', cursoControler.deleteCurso)

module.exports = route






    


