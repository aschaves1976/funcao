function Pessoa(){
    this.idade = 0

    const self = this

    setInterval(
     function(){
         self.idade ++
         console.log(self.idade)
     }/*.bind(this) -- para que esta função execute corretamente, ou seja,
                    referenciando o elemento this da função Pessoa, ou utilizamos
                    ".bind(this)" ao final da função que esta sendo passada como paramêtro
                    para setInterval ou armazenando o this dentro de uma constante
     */
    ,1000)
}
new Pessoa