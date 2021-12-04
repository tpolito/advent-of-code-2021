/*
Advent of Code Day 3
Link to question: https://adventofcode.com/2021/day/3
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt');
let data = input
  .toString()
  .split('\n')
  .map((x) => x.split(''));
let exampleData = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
].map((x) => x.split(''));

const partOne = (reports) => {
  let z = 0;
  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < reports[0].length; i++) {
    z = 0;
    for (let j = 0; j < reports.length; j++) {
      if (reports[j][i] == '0') {
        z += 1;
      }
    }

    if (z > reports.length * 0.5) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

const partTwo = (reports) => {
  let options = reports;
  let pointer = 0;

  // O2
  while (options.length > 1) {
    let col = options.map((el) => el[pointer]);
    let sum = col
      .reduce((a, b) => a + b)
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b));
    let res = sum >= col.length * 0.5 ? 1 : 0;
    options = options.filter((e) => e[pointer] == res);
    pointer += 1;
  }

  let o2 = parseInt(options[0].join(''), 2);
  options = reports;
  pointer = 0;
  // C02
  while (options.length > 1) {
    let col = options.map((el) => el[pointer]);
    let sum = col
      .reduce((a, b) => a + b)
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b));
    let res = sum < col.length * 0.5 ? 1 : 0;
    options = options.filter((e) => e[pointer] == res);
    pointer += 1;
  }
  let co2 = parseInt(options[0].join(''), 2);

  return o2 * co2;
};

console.log(partOne(data) === 841526); //841526
console.log(partTwo(data) === 4790390); //4790390
