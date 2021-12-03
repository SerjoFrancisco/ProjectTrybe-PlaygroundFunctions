// Desafio 10
function techList(array, name) {
  array.sort();
  let resultado = [];
  if( array.length === 0){
    return 'Vazio!'
  }
  for (i = 0; i < array.length; i += 1){
    let object = {
      tech: array[i],
      name: name
    }
    resultado.push(object)
  }
  return resultado
}

// Desafio 11
function generatePhoneNumber(array) {
  let copia = array.slice();
  let sort = copia.sort();
  let numero = [];
  if (array.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < sort.length; i += 1){
    if (sort[i] === sort[i - 1] && sort[i] === sort[i - 2] || sort[i] > 9 ||sort[i] < 0){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  numero.push('(', array[0], array[1], ')', ' ', array[2], array[3], array[4], array[5], array[6], '-', array[7], array[8], array[9], array[10],);
  
  return numero.join('')
}
console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
   
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
