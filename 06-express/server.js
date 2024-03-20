const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/contato', (req, res)=>{
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(PORT, ()=>{
    console.log(`Server executando na porta ${PORT}`)
    console.log(`Acessar http://localhost:${PORT}`)
})
