/*
Exercício 1.1
Faça um programa que exiba 3 números na tela.

Dica - exibindo (ou "imprimindo") números na tela:
*/

const nome = 'Luan';
const Profissao = 'Dev';
const idade = 32;

console.log("Nome:", nome);
console.log("Profissão:", Profissao);
console.log("Idade:", idade);


nome === "Luan" ? console.log('Seja bem vindo mestre', nome) : console.error('Vaza daqui véi podi!');

Profissao === "Dev" ? console.log("Está na trilha correta!") : console.log("Vai morre pobre, véi podi!");

idade >= 18 ? console.log("Maior de idade!") : console.log("Menor de idade.");


// comentar tudo ctrl + K + C
// if (nome == "Luan"){
//     console.log("Seja bem vindo mestre", nome);
// }
// else{
//     console.error("Vaza daqui véi podi")
// }
// if (Profissao == 'Dev front end'){
//     console.log("Aí sim muchacho, ta no caminho certo")
// }
// else{
//     console.error("Para de perder tempo e vai estudar pra ser DEV!");
// }
// if (idade < 30){
//     console.log("Se prepara que daqui pra frente é só pra baixo!");
// }
// else{
//     console.error("Daqui em diante é dor em tudo e refluxo! Compra dorflex e anti ácido!")
// }
// Descomentar tudo ctrl + K + U

// const anoAtual = 2025;
// const anoNascimentoIvan = 1994;
// console.log("Ano atual:", anoAtual);
// console.log("Ano de Nascimento do Ivan:", anoNascimentoIvan);

// if (anoAtual - anoNascimentoIvan >= 18){
//     console.log("Maior de idade!")
// }
// else{
//     console.log("De menor! fedendo a toddynho")
// }