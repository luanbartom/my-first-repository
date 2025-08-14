/*
Exercício 1.3
Faça um programa que leia 3 números, some-os e exiba 
a média entre eles.
*/

/*
prompt retorna valores do tipo string. Você precisa 
converter esses valores para números antes de realizar 
operações matemáticas.
*/
// const num1 = parseFloat(prompt("Digite o primeiro número: "));
//const num2 = parseFloat(prompt("Digite mais um número: "));
//const num3 = parseFloat(prompt("Digite o último número: "));

//let media = (num1 + num2 + num3) /3;

//alert(`A média é: ${media}`);

//console.log("Numeros digitados: ", num1, num2, num3);
//console.log("Média: ",media);

/*Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. 
A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.*/

/*const tempc = parseFloat(prompt("Digite a temperatura em Celsius: "));

let tempf  = (tempc * 9/5) + 32;
alert(`A temperatura em Farenheit é: ${tempf}`);
console.log("Temperatura em Farenheit:", tempf);
console.log("Temperatura em Celsius", tempc);*/

/*const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));

let soma = num1 + num2;

soma >= 100 ? alert("Número maior que 100!") : console.log("Número menor que 100.");

console.log("Número 1:", num1);
console.log("Número 2:", num2);
console.log("Soma dos números:", soma);*/

/*
let saude = 10;
let dano = parseInt(prompt("Informe o dano recebido:"));

dano >= saude ? alert("Morreu!") : alert("Vivão!");

console.log("Saude", saude);
console.log("Dano recebido", dano);
*/
const posicao = parseInt(prompt("Digite a posição do inimigo: "));

function limitaPosicao (posicao){
    if (posicao < 0 || posicao > 100 ) {
        {console.log("Posição inválida!");
            let valorCorrigido = posicao % 100;
            valorCorrigido = valorCorrigido < 0 ? valorCorrigido + 100 : valorCorrigido;
            console.log("Sua posição corrigida é: ");
            return valorCorrigido;
        }
    }console.log("posição válida: ", posicao);
}
