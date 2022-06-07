const nome = "Marcos Antonio";
const sobrenome = "Barros Lisboa";
const peso = 108;
const altura = 1.78;
const idade = 25;
const anoAtual = 2022;
let imc;
let anoDeNascimento;

imc = peso / altura ** 2

anoDeNascimento = anoAtual - idade


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`)
console.log(`${nome} nasceu no ano de ${anoDeNascimento}`)
