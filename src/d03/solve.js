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
  let gamma = reports
    .reduce((pre, cur) => pre.map((e, i) => e + cur[i]))
    .map((e) => {
      return e.split('').reduce((pre, cur) => parseInt(pre) + parseInt(cur));
    })
    .map((e) => (e > reports.length / 2 ? 1 : 0));

  let epsilon = gamma.map((e) => (e === 0 ? 1 : 0));

  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
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

console.log(partOne(data));
console.log(partTwo(data));
