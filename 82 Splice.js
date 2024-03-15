//indice          0       1       2         3
//invertido      -4      -3      -2        -1
const nomes = ['Erick', 'Luan', 'Joao', 'Eduardo'];
// nomes.splice(indice do elmt, qtd elmt delete, add elemento, add elemento);
const removidos = nomes.splice(2, 1, 'Gabi', 'Julia')
console.log(removidos)
console.log(nomes)