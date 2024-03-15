// Filter -> sempre retornar um array, com a mesma quantidade de elementos ou menos;
const numeros = [1,2,654,3,16,23,5,23];

// FILTRA OS VALORES MAIOR QUE 10 DO ARRAY 'NUMEORS'
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

const pessoas = [
    {nome:'Erick', idade: 43},
    {nome:'Rosana', idade: 53},
    {nome:'Felipe', idade: 54},
    {nome:'Maria', idade: 62},
    {nome:'João', idade: 12},
    {nome:'Mateus', idade: 43},
    {nome:'Adaujisa', idade: 23},
];

// ARRAY DE OBJETOS 'PESSOAS'

// FILTRA OS NOMES COM 5 LETRAS OU MAIS
const nomesGrandesFiltrados = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(nomesGrandesFiltrados)

// FILTRA AS IDADES COM 50 ANOS OU MAIS
const idadeGrandesFiltradas = pessoas.filter((valor) => valor.idade >= 50)
console.log(idadeGrandesFiltradas)

// FILTRA OS NOMES COM O FINAL 'A'
const nomesComFinalAFiltrados = pessoas.filter((valor) => valor.nome.toLocaleLowerCase().endsWith('a'))
console.log(nomesComFinalAFiltrados)