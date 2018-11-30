//IIFE - Immediately Invoked Function Expression
(
    function(){
        console.log('Será executado na hora!')
        console.log('Foge do escopo mais abrangente, do escopo global!')
        console.log('Tudo o que for criado aqui dentro será visto apenas aqui dentro!')

        function salarioLiquido(imposto = 0, moeda = 'R$'){
            return `${moeda} ${this.salario - (this.salario * imposto)}`
        }

        const emp1 ={
            nome: 'Rui',
            salario: 12500,
            imposto: 0.2,
            salarioLiquido
        }
        console.log(salarioLiquido.call(emp1, 0.275, '$'))
    }
)()