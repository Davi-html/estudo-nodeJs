const path = require('path')
const ler = require('./modules/ler')
const escrever = require('./modules/escrever')

const caminhoArquivo = path.resolve(__dirname, 'pessoas.json')
const caminhoEscrever = path.resolve(__dirname, 'pessoas-copy.json')

async function  lerDados(caminho){
    const dados = await ler(caminho)
    mostrarDados(dados)
}

async function mostrarDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(element => console.log(element));
}

const pessoas = [
    {nome: 'Davi'},
    {nome: 'Maria'},
    {nome: 'Lucas'},
]

const json = JSON.stringify(pessoas, '', 2)

lerDados(caminhoArquivo)
escrever(caminhoEscrever, json)