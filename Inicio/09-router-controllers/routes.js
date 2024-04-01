const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

route.get('/', homeController.paginaInicial)
route.post('/', homeController.formPost)

route.get('/contact', contactController.contact)

module.exports = route