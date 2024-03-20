const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [    
    {nome: 'Joao'},
    {nome: 'Maria'},
    {nome: 'Davi'},
    {nome: 'Lucas'},
]

const json = JSON.stringify(pessoas, '', 2)

escreve(caminhoArquivo, json)

async function lerArquivo(caminho){
    const dados = await ler(caminho)
    
    mostrarDados(dados)
}

function mostrarDados(dados){
    dados = JSON.parse(dados)

    dados.forEach(element => {
        console.log(element)
    });
}

lerArquivo(caminhoArquivo)