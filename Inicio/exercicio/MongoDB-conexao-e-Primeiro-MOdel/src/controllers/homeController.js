const HomeModel = require('../models/HomeModels')

HomeModel.create({
    titulo: 'teste'
})

exports.paginaInicial = (req, res, )=>{
    res.render(`index`)    
   
}

exports.formPost = (req, res, )=>{
    res.send(`Recebi seu formolario. Seu nome é ${req.body.client}`)
}