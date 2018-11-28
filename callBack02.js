const notas = [7.7, 6.5, 5.0, 8.7, 9.0, 3.6]

// exemplo sem callback
let notasBaixas=[]
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQueSete = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQueSete)
console.log(notasBaixas4)