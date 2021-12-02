/*
Advent of Code Day 2
Link to question: https://adventofcode.com/2021/day/2
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt');
let data = input
  .toString()
  .split('\n')
  .map((str) => {
    str = str.split(' ');

    return {
      dir: str[0],
      mag: parseInt(str[1]),
    };
  });

const solveBoth = (commands) => {
  let aim = 0;
  let depth = 0;
  let hpos = 0;

  for (let cmd of commands) {
    switch (cmd.dir) {
      case 'down':
        aim += cmd.mag;
        break;
      case 'up':
        aim -= cmd.mag;
        break;
      case 'forward':
        hpos += cmd.mag;
        depth += cmd.mag * aim;
        break;
    }
  }

  console.log(`pt1: ${aim * hpos}`);
  console.log(`pt2: ${depth * hpos}`);
};

solveBoth(data);
