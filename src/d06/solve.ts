const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8').split(',').map(Number);
const exampleData = [3, 4, 3, 1, 2];

function solve(input: number[], days: number): number {
  const cal = new Array(9).fill(0);
  input.forEach((i) => cal[i]++);

  for (let i = 0; i < days; i++) {
    const today = i % cal.length;
    const breeding = cal[today];

    cal[(today + 9) % cal.length] += breeding;
    cal[(today + 7) % cal.length] += breeding;
    cal[today] -= breeding;
  }

  return cal.reduce((a, b) => a + b, 0);
}

console.log('Part1: ', solve(inputFile, 80)); // 345793
console.log('Part2: ', solve(inputFile, 256)); // 1572643095893
