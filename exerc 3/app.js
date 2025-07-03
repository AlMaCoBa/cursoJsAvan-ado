//inteiros e decimais
const radius = 10
const pi = 3.14
console.log(radius, pi)

//operadores aritimeticos
//o % "modulo" exibe o resto da operação
//5 dividido por 2 resulta em 2.5, mas este 0.5 é classificado como resto em JS
const reminder = 5 % 2 
console.log(reminder)

const area = pi * radius ** 2
//ordem de operação
//o JS segue a linha de raciocinio matematica, resolvendo em ordem matematica, primeiro o elevado "**" e depois a multiplicação "*"
//nesta ordem: 
//parênteses
//espoentes e raizes
//multiplicação e divisão
//soma e subitração
console.log(area)

const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)

//operadores de incremento e decremento
//não é possivel incrementar valor em uma 'const', para isso usamos o 'let' ou 'var'

//operadores addition, subtraction, multiplication e division assigment
let postLike = 10
//para incrementar usamos o '++'
postLike++
//para retirar usamos o '--'
postLike--
//outra forma de adicionar é:
postLike = postLike + 10
//ou
postLike += 10
//para retirar usamos:
postLike -= 5
//ou
postLike = postLike - 5
//para multiplicar:
postLike *= 3
//para dividir:
postLike /= 2

console.log(postLike)

//Nan - not a number
console.log(7 / 'oi')
//o terminal exibe esta mensagem "NaN" quando se tenta fazer uma operação que não resulta em um numero

//concatenção de string com numero
//em uma concatenação de uma string com numeros o JS junta o numero à string
// ex:

const likesMessage = 'O post tem ' + postLike + ' likes.'

console.log(likesMessage)