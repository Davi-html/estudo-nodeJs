const express = require('express')
const app = express()
const routes = require('./routes') 

const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(PORT, ()=>{
    console.log(`Server executando na porta ${PORT}`)
    console.log(`Acessar http://localhost:${PORT}`)
})
