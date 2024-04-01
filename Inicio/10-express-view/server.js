const express = require('express')
const app = express()
const routes = require('./routes') 
const path = require('path')

const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


app.listen(PORT, ()=>{
    console.log(`Server executando na porta ${PORT}`)
    console.log(`Acessar http://localhost:${PORT}`)
})
