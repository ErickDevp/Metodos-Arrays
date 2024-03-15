// Reduce 

const numeros = [2, 43, 30, 54, 21, 9, 534, 5];

// SOMAR TODOS OS NUMEROS COM REDUCE
const numerosTotais = numeros.reduce((acumulador,valor, indice, array) => {
    acumulador += valor
    return acumulador
}, 0);
console.log(numerosTotais)

// PEGA APENAS OS NUMEROS PARES COM REDUCE - MT MAIS FACIL FAZER COM FILTER
const apenasPares = numeros.reduce((acumulador,valor) => {
    if(valor % 2 === 0) acumulador.push(valor);  
    return acumulador;
}, [])
console.log(apenasPares)

//RETORNA UM ARRAY COM O DOBRO DOS VALORES - MT MAIS FACIL COM MAP
const dobroValores = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador;
}, [])
console.log(dobroValores)

// Array de Objetos
const pessoas = [
    {nome:'Erick', idade: 43},
    {nome:'Rosana', idade: 83},
    {nome:'Felipe', idade: 54},
    {nome:'Maria', idade: 62},
    {nome:'João', idade: 92},
    {nome:'Mateus', idade: 43},
    {nome:'Adaujisa', idade: 63},
];

// RETORNA A PESSOA MAIS VELHA
const pessoaMaisVelha = pessoas.reduce((acumulador, valor ) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
