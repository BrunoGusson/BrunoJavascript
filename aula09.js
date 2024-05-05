// const pessoa = {
//     nome: "Bruno",
//     idade: 17,                                 // Os objetos são compostos por chave e valor
//     profissao:"Desenvolvedor de Software",
//     email: "brunogusson@teste.com",
//     empregado: true
// }
// // pessoa.nome = "Lilo"
// // console.log(pessoa) // O "." é usado para acessar um dos itens dentro do objeto
// pessoa.falar = function(){
//     return `Meu nome é ${this.nome}, tenho ${this.idade} e atualmente atuo como ${this.profissao}`
// }
// console.log(pessoa.falar())


// const mesa = {
//     nome : "Mesa portátil ",
//     cadeiras: true ,
//     quantidadecadeira : 4 ,
//     formato : "retangular",
    
// }

// for (let chave in mesa){
//     console.log(chave + ":" + mesa[chave]) 
// }



// mesa.falar = function(){
//     return ` Nome da mesa é ${this.nome}
//  Possui cadeiras? ${this.cadeiras} 
//  E qual a quantidade de cadeiras? ${this.quantidadecadeira} 
//  O formato é redondo ou retangular? ${this.formato}`
// }
//  console.log(mesa.falar())





// let numeros = [10, 20, 30]

// for  (let numero of numeros){
//     console.log(numero)
// }

// let nomes = "Bruno Gusson"
// for(let nome in nomes){
//     console.log(nome)
// }


// let nomes = "Bruno Gusson"
// for(let nome in nomes){
//     console.log(nome+ ":" + nomes[nome])          // retorna primeiro a posião do valor
// }

 
// const veiculos = [
// {
//     tipo : "SUV",
//     marca : "Mercedes",
//     modelo : "Classes E",
// },
// {
//     tipo : "Sedan",
//     marca : "Renault",
//     modelo : "Logan",
// }
// ]
// for(const chave in veiculos){
//     console.log(veiculos[chave])
// }
// for(const veiculo of veiculos){
//     console.log(`O modeo é ${veiculo.modelo}`)
// }


// // for(const chave of veiculos){
// //     console.log(chave['modelo'])
// // }




// forEach
/*let times = ['Santos' , 'SãoPaulo' , 'Palmeiras']
 times.forEach(function(times, indice){
    console.log(indice+ ":" +times)
 })
*/

/*let numeros = [12, 32, 87]
let soma = 0;
numeros.forEach((value, index)=> {
    console.log(`Multiplicação por 2 :${value*2}`);
    soma += value;
});
console.log(`Soma:${soma}`);
*/
/*let nome = 'Bruno'
let idade =  17
let sexo = 'Masculino'
// forma mais atual 
let objeto = {
  nome,
  idade,
  sexo
}
console.log(objeto)*/


// Fabrica de objetos através de uma função
// FACTORY
// const prompt = require('prompt-sync')(); 
// let celular = function(marca, modelo, cor){
//     return {
//        marca,
//        modelo, 
//        cor
//     }
// }
// let cor = prompt("escreva a cor:")
// let celular1 = celular('motorola', 'motog4', cor)
// let celular2 = celular('samsung', 'a7', 'branco')
// console.log(celular1)
// console.log(celular2)