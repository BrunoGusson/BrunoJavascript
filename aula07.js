// //Array ou Vetor

// let listaredessociais = Array()
// listaredessociais[0] = "Facebook"
// listaredessociais[1] = "Twittter"
// listaredessociais[2] = "Instagram"
// listaredessociais[3] = "Whatsapp"
// console.log(listaredessociais)

// let listacel = ['Motorola', 'Samsung']
// console.log(listacel)

// let listanote = Array("Dell", "Acer", "Positivo")
// console.log(listanote)




//Arrays multidimensionais ou Matriz

// let listacoisas = Array()

// listacoisas['Redes sociais'] = Array()
// listacoisas['Redes sociais'][0] = "Facebook"
// listacoisas['Redes sociais'][1] = "Instagram"
// listacoisas['Redes sociais'][2] = "Twitter"

// listacoisas['Celular'] = Array()
// listacoisas['Celular'][0] = "Motorola"
// listacoisas['Celular'][1] = "Samsung"
// listacoisas['Celular'][2] = "Apple"

// //Inserção de elementos no final do array
// listacoisas['Redes sociais'].push('Tik Tok')

// //Inserção de elementos no começo do array
// listacoisas['Redes sociais'].unshift('Snapchat')

// //Exclusão de elementos no final do array
// listacoisas['Redes sociais'].pop('Snapchat')

// //Exclusão de elementos no começo do array
// listacoisas['Redes sociais'].shift('Tik Tok')



// console.log(listacoisas)


//arrays multidimensionais: sintaxe de inserção e exclusão

// let lista_coisas = Array()

// lista_coisas['frutas'] = Array()
// lista_coisas['pessoas'] = []

// lista_coisas['frutas'].push('Maça')

// console.log(lista_coisas)

/*
    para pesquisas dentro de array é utilizado o método indexOf passando commo parâmetro o elemento alvo da pesquisa. Caso o retorno seja (-1) significa que o elemento não existe. Caso exista o método retorna o índice do elemento.
*/

// let lista_frutas = Array('Banana', 'Maça', 'Morango', 'Uva')

// let auxiliar = lista_frutas.indexOf('Morango')

// if (auxiliar === -1) {
//     console.log('Elemento não existe')
// } else {
//     console.log('Elemento existe e está na posição ' + auxiliar)
// }

/*
ordenação alfabética: usa-se o método sort, que faz a ordenação alfabética e rearanja os índices


let lista_frutas =  Array()

lista_frutas[0] = 'Maça'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

console.log(lista_frutas.sort())

*/

// let lista_frutas = Array()

// lista_frutas[0] = 12
// lista_frutas[1] = 40
// lista_frutas[2] = 3
// lista_frutas[3] = 7
// lista_frutas[4] = 19
// lista_frutas[5] = 1

function calcularAreaTerreno(largura, comprimento){
     
    let area = largura * comprimento // escopo de função!
    return area 
}
//area não é acessível aqui
let prompt = require('prompt-sync')()

let lg = prompt("Digite a largura do terreno em metros:")
let cp = prompt("Digite o comprimento do terreno em metros:")
// chamada da função e passagens de parâmetros
let resultado = calcularAreaTerreno(lg, cp)

console.log('O terreno possui ', resultado, 'metros quadrados')

//Global - permite que a variavel seja acessada em qualquer parte do código
let variavelGlobal;
let x = 5;
let y = 2;
//Função - apenas dentro da função
function variavelF  (var1, var2){
   let variavelFuncao = var1 + var2 //Função
   return variavelFuncao;
}
variave = variavelF(x,y); //Global
//Bloco - variaveis dentro de blocos com if, for, while...
if (variavelGlobal > 0){
    let maior = true //Bloco
    if(maior){
        console.log("OK")
    }
}