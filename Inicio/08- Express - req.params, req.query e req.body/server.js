const express = require('express')
const app = express()
const PORT = 3000

// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="name">
            <button>Enviar formulario</button>
        </form>
    `
    )
})

app.get('/testes/:id?/:nome?', (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.id)
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send('Recebi o formulario')
})

app.listen(PORT, ()=>{
    console.log(`Server executando na porta ${PORT}`)
    console.log(`Acessar http://localhost:${PORT}`)
})
