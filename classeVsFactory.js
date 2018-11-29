// Classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Factory - Melhor forma de trabalhar
const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Olá, meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Maria')
p2.falar()