//IIFE - Immediately Invoked Function Expression
(
    function(){
        console.log('Será executado na hora!')
        console.log('Foge do escopo mais abrangente, do escopo global!')
        console.log('Tudo o que for criado aqui dentro será visto apenas aqui dentro!')
    }
)()