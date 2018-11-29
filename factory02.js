function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 30.0))
console.log(criarProduto('Ipad', 3210.0))

const produtos = [criarProduto('Notebook', 30.0),criarProduto('Ipad', 3210.0)]
//console.log(produtos)
for(let i=0; i<produtos.length; i++){
    console.log(produtos[i])
}