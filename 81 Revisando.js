const nomes = ['Erick', 'fernando', 'lucas', 'breno', 'cassio'];
const novo = [...nomes];
const novo2 = nomes.slice(1,5) // adiciona os elementos de outro Array

const removido = novo.pop(); // remove do final
const removido2 = novo.shift(); //remove do inicio
novo.push('Mateus') // adiciona algo ao final do Array
novo.unshift('mirela'); // adiciona algo ao inicio do Array

console.log(nomes)
console.log(novo)
console.log(novo2)

console.log(removido)
console.log(removido2)

const nome = 'Erick santana dos santos'
const arrayNome = nome.split(' '); // separa o nome por determinado caracter
console.log(arrayNome)
const nomeUnido = arrayNome.join(' '); // Uni o nome novamente 
console.log(nomeUnido)