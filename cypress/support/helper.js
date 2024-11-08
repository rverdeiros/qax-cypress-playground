const pdf = require('pdf-parse') //pacote instalado à parte.
const path = require('path')
const fs = require('fs')

const readPdf = (pathToPdf) => { //função para receber o caminho relativo do arquivo pdf
    return new Promise((resolve) => { //devolve uma promessa
        const pdfPath = path.resolve(pathToPdf) //pega o caminho absoluto do arquivo
        const pdfData = fs.readFileSync(pdfPath) //lê o conteúdo do arquivo e guarda dentro de pdfData
        pdf(pdfData) //módulo que transforma o conteúdo do PDF em texto
            .then(({ text }) => {
                resolve(text)   //resolve que devolve o texto do PDF
            })
    })
}

module.exports = { readPdf }