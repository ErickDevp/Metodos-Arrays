// map
// dobra os números
const numeros = [5, 32, 53, 21, 3, 43];
const numerosEmDobro = numeros.map((valor) => valor-1);
// console.log(numerosEmDobro)


// Array de Objetos
const pessoas = [
    {nome:'Erick', idade: 43},
    {nome:'Rosana', idade: 53},
    {nome:'Felipe', idade: 54},
    {nome:'Maria', idade: 62},
    {nome:'João', idade: 12},
    {nome:'Mateus', idade: 43},
    {nome:'Adaujisa', idade: 23},
];

// apenas retornando  um Array com os nomes que estão no Obejto
const retorneValorNome = pessoas.map((valor) => valor.nome) 
console.log(retorneValorNome)

// removendo a chave nome do objeto dentro do Array
const removeChaveNome = pessoas.map((valor) => ({idade: valor.idade}))
console.log(removeChaveNome)

// Adicionando a chave ID no objeto dentro do Array
const addChaveId = pessoas.map((valor,indice) => {
    const newObj = { ...valor}
    newObj.id = indice
    return newObj
})
console.log(addChaveId)