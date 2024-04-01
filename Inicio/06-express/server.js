const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="name">
            <button>ENVIAR</button>
        </form>
    `
    )
})

app.post('/', (req, res)=>{
    res.send('Recebi o formulario')
})

app.listen(PORT, ()=>{
    console.log(`Server executando na porta ${PORT}`)
    console.log(`Acessar http://localhost:${PORT}`)
})
