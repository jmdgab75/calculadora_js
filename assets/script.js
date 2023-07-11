function soma(a, b) {
  return a + b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function subtracao(a, b) {
  return a - b;
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

alert("Soma: " + soma(numero1, numero2));
alert("Multiplicação: " + multiplicacao(numero1, numero2));
alert("Divisão: " + divisao(numero1, numero2));
alert("Subtração: " + subtracao(numero1, numero2));
