const path = require('path')
const axios = require('axios')
const {Pessoa, nome, sobrenome} = require('./mode1')

const p1 = new Pessoa('Davi')

console.log(p1)
console.log(nome, sobrenome)