exports.paginaInicial = (req, res)=>{
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="name">
            <button>Enviar formulario</button>
        </form>
    `)    
}

exports.formPost = (req, res)=>{
    res.send('Recebi o formulario')
}