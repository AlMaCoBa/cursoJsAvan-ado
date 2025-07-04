const postTitle = 'É xereca ou xoxota'
const postAL = 'AL du SoundCloud'
const postComments = 15

// usando concatenação
const postMensage = 'O post "' + postTitle + '" do ' + postAL + ', tem ' + postComments + ' comentarios'
console.log(postMensage)

// para usar o mesmo tipo de aspas juntas, usamos barras invertidas "\", ex:
console.log('Você manja do filme \'Seu peidante em perigo e meu James em Ação\'?')

// usando template strings
//para não precisar fazer concatenação usamos cifrão e chave '${}' nas constantes e no lugar de aspas duplas "" ou simples '', usamos a crase ``
const postMensage2 = `O post "${postTitle}", do "${postAL}, tem ${postComments} comentarios`
console.log(postMensage2)  

// criando templates HTML 
/*em um cenario onde você recebe um conteudo dinamico de um banco de dados e 
queira criar um template HTML que contem os dados dinamicos e renderizar o 
HTML na pagina*/

const html = `
 <h2>${postTitle}</h2>
 <p>Autor: ${postAL}</p>
 <span>Este post tem ${postComments} comentarios</span>
`
console.log(html)

/*Templates String é usado quando quando não é necessario usar aspas ou inserir variaveis, 
ou simplesmente quebrar linhas como o template html, caso contrario não sera 
necessario usar o template stings */


