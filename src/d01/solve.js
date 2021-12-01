const fs = require('fs');
const read = fs.readFileSync('input.txt');
let data = read.toString().split('\n').map(Number);

const partOne = data.filter((el, i, arr) => el < arr[i + 1]).length;
const partTwo = (depths) => {
  let sum = 0;
  let prev = depths.slice(0, 3);

  for (let i = 1; i < depths.length - 2; i++) {
    let windowSum = depths.slice(i, i + 3).reduce((a, b) => a + b);

    if (windowSum > prev) {
      sum += 1;
    }

    prev = windowSum;
  }

  return sum;
};

console.log(`Part 1 answer is ${partOne}`);
console.log(`Part 1 answer is ${partTwo(data)}`);
