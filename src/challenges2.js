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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
