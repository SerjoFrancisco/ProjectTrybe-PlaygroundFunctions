// Desafio 1
function compareTrue(b1, b2) {
  if (b1 === true && b2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separado = string.split(' ');
  return separado;
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ', ' + arr[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 > distancia2){
    return 'cat2'
  } else if (distancia2 > distancia1){
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
      array.push("fizzBuzz");
    } else if (arr[i] % 3 === 0){
      array.push("fizz");
    } else if (arr[i] % 5 === 0){
      array.push("buzz");
    } else {
      array.push("bug!");
    }
  }
  return array
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
