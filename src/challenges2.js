// Desafio 10
function techList(array, name) {
  array.sort();
  let resultado = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    let object = {
      tech: array[i],
      name,
    };
    resultado.push(object);
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(array) {
  let copia = array.slice();
  let sort = copia.sort();
  let numero = [];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (array.some((element) => element < 0 || element > 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < sort.length; i += 1) {
    if (sort[i] === sort[i - 1] && sort[i] === sort[i - 2]) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  numero.push(
    '(',
    array[0],
    array[1],
    ')',
    ' ',
    array[2],
    array[3],
    array[4],
    array[5],
    array[6],
    '-',
    array[7],
    array[8],
    array[9],
    array[10],
  );

  return numero.join('');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC))
    || (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
    || (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA));
}

// Desafio 13
function hydrate(string) {
  let contador = 0;
  let dividido = string.match(/\d/g);
  let numbers = dividido.join('');
  for (let i = 0; i < numbers.length; i += 1) {
    let int = parseInt(numbers[i], 10);
    contador += int;
  }
  if (contador === 1) {
    return `${contador} copo de água`;
  }
  return `${contador} copos de água`;
}
console.log(hydrate('4 caipirinhas e 2 cervejas'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
