// Desafio 1
function compareTrue(b1, b2) {
  return b1 && b2;
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
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let max = array.reduce(function (acc, current) {
    return Math.max(acc, current);
  });
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === max) {
      contador += 1;
    }
  }
  return contador;
}

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
  arr.forEach((element) => {
    let pusher = '';
    if (element % 3 === 0) pusher += 'fizz';
    if (element % 5 === 0) pusher += 'Buzz';
    if (pusher.length === 4) pusher = pusher.toLowerCase();
    array.push(pusher || 'bug!');
  });
  return array;
}

// Desafio 9
function encode(string) {
  let code = [1, 2, 3, 4, 5];
  const letters = ['a', 'e', 'i', 'o', 'u'];
  let result = [];
  string.split('').forEach((element) => {
    for (let i = 0; i < letters.length; i += 1) {
      if (element === letters[i]) element = code[i];
    }
    result.push(element);
  });
  return result.join('');
}
console.log(encode('aeiou'));
function decode(string) {
  let code = ['1', '2', '3', '4', '5'];
  const letters = ['a', 'e', 'i', 'o', 'u'];
  let result = [];
  string.split('').forEach((element) => {
    for (let i = 0; i < code.length; i += 1) {
      if (element === code[i]) element = letters[i];
    }
    result.push(element);
  });
  return result.join('');
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
