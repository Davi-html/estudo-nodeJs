exports.paginaInicial = (req, res)=>{
    res.render(`index`)    
}

exports.formPost = (req, res)=>{
    res.send('Recebi o formulario')
}