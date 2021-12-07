/*
Advent of Code Day 5
Link to question: https://adventofcode.com/2021/day/5
*/

const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');

function partOne(input: string) {
  const parsedInput = input
    .split('\n')
    .map((row) => row.split(' -> ').map((el) => el.split(',').map(Number)));

  const filteredInput = parsedInput.filter(
    (coord) => coord[0][0] === coord[1][0] || coord[0][1] === coord[1][1]
  );

  const map = new Map();
  let count = 0;

  filteredInput.forEach(([start, end]) => {
    let x1 = start[0];
    let x2 = end[0];
    let y1 = start[1];
    let y2 = end[1];

    let xMove = Math.sign(x2 - x1);
    let yMove = Math.sign(y2 - y1);

    while (x1 !== x2 + xMove || y1 !== y2 + yMove) {
      const val = map.get(`${x1},${y1}`) || 0;
      if (val === 1) count++;
      map.set(`${x1},${y1}`, val + 1);
      x1 += xMove;
      y1 += yMove;
    }
  });

  console.log(count);
}

function partTwo(input: string) {
  const parsedInput = input
    .split('\n')
    .map((row) => row.split(' -> ').map((el) => el.split(',').map(Number)));

  const map = new Map();
  let count = 0;

  parsedInput.forEach(([start, end]) => {
    let x1 = start[0];
    let x2 = end[0];
    let y1 = start[1];
    let y2 = end[1];

    let xMove = Math.sign(x2 - x1);
    let yMove = Math.sign(y2 - y1);

    while (x1 !== x2 + xMove || y1 !== y2 + yMove) {
      const val = map.get(`${x1},${y1}`) || 0;
      if (val === 1) count++;
      map.set(`${x1},${y1}`, val + 1);
      x1 += xMove;
      y1 += yMove;
    }
  });

  console.log(count);
}

partOne(inputFile);
partTwo(inputFile);
