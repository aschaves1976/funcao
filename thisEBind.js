const pessoa = {
    saudacao: `Bom dia!
    Se retirar o this a função não vai funcionar e teremos um erro.`,
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e oo. O this não funciona neste contexto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()