// Exercício 1 : Par ou Ímpar
// const prompt = require('prompt-sync')();

// Exercício 1: Par ou Ímpar

// let numero = parseInt(prompt("Insira um número:"));

// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar."); 
// }

// const prompt = require('prompt-sync')();
// let number = parseInt(prompt("Digite um número:"));

// const parImpar = number % 2 === 0 ? "O número é par" : "O número é impar";

// console.log(parImpar);52

//  Exercício 2 : Maior de dois números


// const prompt = require('prompt-sync')();
// let numero1 = parseInt(prompt("Digite um número:"));
// let numero2 = parseInt(prompt("Digite o segundo número:"));

// if(numero1 > numero2){
//    console.log("O primeiro número é maior.");
// } else if( numero2 > numero1){
//    console.log("O segundo número é maior.");
// } else{
//    console.log("Os números são iguais");
// }



// Exercício 3 : Triângulo

// const prompt = require('prompt-sync')();
 
// let lado1 = parseInt(prompt("Coloque o comprimento do primeiro lado:"));
// let lado2 = parseInt(prompt("Coloque o comprimento do segundo lado:"));
// let lado3 = parseInt(prompt("Coloque o comprimento do terceiro lado:"));

// if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//    console.log("É possível formar umm triângulo com as medidas");
// } else{
//    console.log("Não é viavel formar um triângulo");
// }




// Exercício 4: Calculadora Simples

//   const prompt = require('prompt-sync')();
//   let numero1 = parseInt(prompt("Coloque um número e veja algumas operações básicas:"));
//   let numero2 = parseInt(prompt("Coloque um segundo número:"));
//   console.log(numero1 + numero2);
//   console.log(numero1 - numero2);
//   console.log(numero1 * numero2);
//   console.log(numero1 / numero2);


//   
//   let numero1 = parseInt(prompt("Coloque um número e veja algumas operações básicas:"));
//   let numero2 = parseInt(prompt("Coloque um segundo número:"));
//   let operação = prompt("Coloque a operação desejada (+, -, /, *)");

//   let resultado;
//   if (operação === '+'){
//    resultado = numero1 + numero2;
//   }  else if (operação === '-'){
//    resultdo = numero1 - numero2;
//   }  else if (operação === '*'){
//    resultado = numero1 * numero2;
//   }  else if (operação === "/"){ 
//    resultado = numero1 / numero2
//     if(numero2 !==0){
//       resultado = numero1 / numero2;
//     }  else{
//       console.log("Erro: divisão por zero");
//       resultado = undefined;
//      }
//    } else {
//       console.log("Operação inválida");
//    }

//    if (resultado !== undefined) {
//       console.log("Resultado:", resultado)
//    }





// SWITCH CASE

// const prompt = require('prompt-sync')();

// let dia = parseInt(prompt("Insira um número do dia da semana:"));
// let nomeDia;

// switch(dia) {
//    case 1:
//       nomeDia = "Domingo";
//       break;
//    case 2:
//       nomeDia = "Segunda-feira";
//       break;
//    case 3:
//       nomeDia = "Terça-feira";
//       break;
//    case 4:
//       nomeDia = "Quarta-feira";
//       break;
//    case 5:
//       nomeDia = "Quinta-feira";
//       break;
//    case 6:
//       nomeDia = "Sexta-feira";
//       break;     
//    case 7:
//       nomeDia = "Sábado";   
//       break;
//    default:
//       console.log("Digite um número de 1 a 7");
//       break  
// }
// console.log("O dia é:", nomeDia;


// const prompt = require('prompt-sync')();
// let numero1 = parseInt(prompt("Coloque um número e veja algumas operações básicas:"));
// let numero2 = parseInt(prompt("Coloque um segundo número:"));
// let operação = prompt("Coloque a operação desejada (+, -, /, *)");
// let resultado;
//   switch(resultado) {
//    case '+':
//       (operação = '+')
//       resultado = numero1 + numero2
//       break;
//    case '-':
//       (operação = "-")
//       resultado = numero1 - numero2
//       break;
//    case '*':
//       (operação = "*")
//       resultado = numero1 * numero2
//       break;
//    case '/':
//       (operação = "/")
//       resultado = numero1 / numero2
//       break;
//    }
//    console.log("O resultado é:", resultado)




// console.log(5*0);
// console.log(5*1);
// console.log(5*2);
// console.log(5*3);
// console.log(5*4);
// console.log(5*5);
// console.log(5*6);
// console.log(5*7);
// console.log(5*8);
// console.log(5*9);
// console.log(5*10);

//  let contador = 0;
//  let multiplicando = 5;
 
//  // <variável>;       <condição>     <incremento>
//  for (contador = 0; contador <= 10;    contador++) {
//    console.log(`${multiplicando} * ${contador} =`, multiplicando * contador); 
//  }


// for (let i = 0; i <= 100; i+=2){
//    console.log(i)
// }

// for (let i = 10; i >= 0; i--){
//    console.log(i)
// }


// let i = 10;

// while( i >= 1){
//    console.log(i);
//    i--;
// }


const prompt = require('prompt-sync')()
let senha 

do {
    senha = prompt("Digite a senha:")
} while (senha !== "1234")

console.log("Senha incorreta!")
