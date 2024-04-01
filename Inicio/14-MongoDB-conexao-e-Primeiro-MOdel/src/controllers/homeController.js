const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descricao paer testes'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.paginaInicial = (req, res, )=>{
    res.render(`index`)    
   
}

exports.formPost = (req, res, )=>{
    res.send(`Recebi seu formolario. Seu nome é ${req.body.client}`)
}