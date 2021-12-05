/*
Advent of Code Day 4
Link to question: https://adventofcode.com/2021/day/4
*/

const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
type tboard = (number | null)[][];

function partOne(input: string): number {
  const { boards, numbers } = parseInput(input);

  for (let num of numbers) {
    for (let board of boards) {
      markBoard(board, num);
      if (checkBoardForWin(board)) {
        return tallyBoard(board) * num;
      }
    }
  }
}

function partTwo(input: string): number {
  const { boards, numbers } = parseInput(input);

  for (let num of numbers) {
    for (let i = 0; i < boards.length; i++) {
      let board = boards[i];
      markBoard(board, num);
      if (checkBoardForWin(board)) {
        if (boards.length === 1) {
          return tallyBoard(board) * num;
        }
        boards.splice(i, 1);
      }
    }
  }
}

function markBoard(board: tboard, num: number) {
  board.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (tile === num) {
        board[i][j] = null;
      }
    });
  });
}

function parseInput(input: string): { boards: tboard[]; numbers: number[] } {
  let splitUp = input.split('\n\n');
  const numbers = splitUp[0].split(',').map((e) => parseInt(e));
  const boards = splitUp.slice(1).map((b) =>
    b
      .split('\n')
      .filter((l) => l.length > 0)
      .map((row) =>
        Array.from(row.matchAll(/\d+/g)).map((cell) => parseInt(cell))
      )
  );

  return { boards, numbers };
}

function checkBoardForWin(board: tboard): boolean {
  for (let row of board) {
    if (row.every((val) => val === null)) return true;
  }

  for (let i = 0; i < board[0].length; i++) {
    if (board.every((row) => row[i] === null)) return true;
  }
}

function tallyBoard(board: tboard): number {
  let sum = 0;
  board.forEach((row) => {
    row.forEach((tile) => {
      if (tile !== null) {
        sum += tile;
      }
    });
  });
  return sum;
}

function chunk(array: any[], size: number): any[] {
  let res = [];
  let copy = [...array];

  while (copy.length > 0) {
    res.push(copy.splice(0, size));
  }

  return res;
}

// console.log(partOne(inputFile)); // 38594
console.log(partTwo(inputFile)); // 21184
