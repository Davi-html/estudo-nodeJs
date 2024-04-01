const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res, )=>{
    res.render(`index`, {
        titulo: 'Este é o titulo',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })    
}

exports.formPost = (req, res, )=>{
    res.send(`Recebi seu formolario. Seu nome é ${req.body.client}`)
}