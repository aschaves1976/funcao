//Função construtora
function Pessoa(nome){
    this.nome = nome    
    this.falar = function (){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Lucas')
p1.falar()