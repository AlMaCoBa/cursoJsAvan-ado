//strings
console.log('hello, world')

const email = 'xereca@deMel.com.br'

console.log(email)

//concatenação de strings
const firstName = 'Alberto'
const lastName = 'Du SoundCloud'
const fullName = firstName + ' ' + lastName

console.log(fullName)

//acessando caracteres
/* Para exibir a posição de cada string basta colocar o nome da variavel ou a string dentro do metodo do Log e inserir a posição desejada dentro do conchete
-o JS inicia a contagem a partir da posição 0 */
console.log(fullName[0])
console.log('abcd'[1])

//comprimento de uma string
/* A propriedade .length exibe o comprimento da string na variável*/
console.log(fullName.length)

//metodos de string
/* Há diferença entre funções e metodos, metodos sao aqueles comandos apos o '.' possuem um texto e parenteses '()', ja o comando só possui o '.' e o texto como comenado, ex: '.length' -> comando; '.toUpperCase()' -> metodo*/

console.log(fullName.toUpperCase())
//transforma todas as letras em maiusculas

console.log(fullName.toLowerCase())
//transforma todas as letras em minusculas

const result = fullName.toLowerCase()
//aqui não exibimos o fullName, apenas o armazenamos na constante 'result' aplicando o metodo de 'toLowerCase para deixar todas as letras minusculas
console.log(result) //agora exibimos o resultado da constante 'result' com a aplicação do comando

/* Osb: os metodos não alteram a constante original, apenas na hora da exibição, veja: */

console.log(result,'e', fullName)

const index = email.indexOf('@')
//este paramentro exibe a posição do string na constante, basta colocar o que deseja dentro como argumento dentro dos parenteses

console.log(index)