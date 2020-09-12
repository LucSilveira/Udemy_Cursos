const nome = "test"

const template = `
    Olá
    ${nome}
`

console.log(template)


const upper = texto => texto.toUpperCase()
// criadno uma simples função

console.log(`Ei... ${upper('lucas silveira')}!`)
// passando o valor para a funcao