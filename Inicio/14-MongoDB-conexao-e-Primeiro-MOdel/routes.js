const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

function meuMiddleware(req, res, next){
    req.session = {nome: 'luiz'}
    console.log()
    console.log('Passei no seu Middleware')
    console.log()
    next()
}

route.get('/', homeController.paginaInicial)

route.post('/', homeController.formPost)

route.get('/contact', contactController.contact)

module.exports = route