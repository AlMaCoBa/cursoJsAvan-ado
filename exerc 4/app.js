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




