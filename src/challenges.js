// Desafio 1
function compareTrue(b1, b2) {
  if (b1 === true && b2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ', ' + arr[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  array.sort();
  if (array[0] < 0) {
    array.reverse();
  }
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[array.length - 1]) {
      contador += 1;
    }
  }
  return contador;
}

// seu código aqui

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 > distancia2) {
    return 'cat2';
  }
  if (distancia2 > distancia1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      array.push('fizz');
    } else if (arr[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let codificada = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      codificada += '1';
    } else if (string[i] === 'e') {
      codificada += '2';
    } else if (string[i] === 'i') {
      codificada += '3';
    } else if (string[i] === 'o') {
      codificada += '4';
    } else if (string[i] === 'u') {
      codificada += '5';
    } else {
      codificada += string[i];
    }
  }
  return codificada;
}
function decode(string) {
  let decodificada = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      decodificada += 'a';
    } else if (string[i] === '2') {
      decodificada += 'e';
    } else if (string[i] === '3') {
      decodificada += 'i';
    } else if (string[i] === '4') {
      decodificada += 'o';
    } else if (string[i] === '5') {
      decodificada += 'u';
    } else {
      decodificada += string[i];
    }
  }
  return decodificada;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
