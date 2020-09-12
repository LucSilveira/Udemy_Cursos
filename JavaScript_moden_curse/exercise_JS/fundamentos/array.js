const valores = [0, 1, 2, 3, 4]
console.log(valores[0], valores[4])

valores[8] = 7
console.log(valores)

console.log(valores.length)

const valores1 = [{id: 3}, null, false, "test"]
console.log(valores1)

console.log(valores.pop()) //pegar ultimo valor do array e o retira do mesmo
delete valores[0] //removendo valores do array
console.log(valores)
