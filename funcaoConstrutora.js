function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

    // metodo privado
    let aumentaVelocidadeAtual = v => velocidadeAtual += 100

    this.getVelocidadeAumentada = v => aumentaVelocidadeAtual()
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

const city = new Carro(120, 10)
city.acelerar()
console.log(city.getVelocidadeAumentada())