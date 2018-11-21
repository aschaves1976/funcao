let dobro = function(a){
    return 2 * a
}
console.log(dobro(3))

dobro = (a) =>{
    return 2 * a
}
console.log(dobro(3))

dobro = a => 2 * a // return implícito

console.log(dobro(3))

let ola = function () {
    return 'OLA'
}
console.log(ola())

ola = () => 'OLA'
console.log(ola())

ola = _ => 'OLA' // aqui possui param
console.log(ola())
