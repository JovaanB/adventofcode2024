import { inputs } from './day4-inputs.js';

const grid = inputs.trim().split('\n').map(line => line.split(''));
let count1 = 0;
let count2 = 0;

const searchWord = 'XMAS';

const directions = [
    { x: 0, y: 1 },   // horizontal
    { x: 1, y: 0 },   // vertical
    { x: 1, y: 1 },   // diagonal down-right
    { x: 1, y: -1 },  // diagonal down-left
    { x: 0, y: -1 },  // horizontal backwards
    { x: -1, y: 0 },  // vertical backwards
    { x: -1, y: -1 }, // diagonal up-left
    { x: -1, y: 1 }   // diagonal up-right
];

function findWordInGrid(word) {
    const foundPositions = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            for (const { x, y } of directions) {
                if (searchFromPosition(row, col, x, y, word)) {
                    foundPositions.push({ row, col, direction: { x, y } });
                }
            }
        }
    }

    return foundPositions;
}

function searchFromPosition(startRow, startCol, deltaX, deltaY, word) {
    let row = startRow;
    let col = startCol;

    for (let i = 0; i < word.length; i++) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] !== word[i]) {
            return false;
        }
        row += deltaX;
        col += deltaY;
    }

    count1++;
    return true;
}

const results = findWordInGrid(searchWord);
console.log({ results, count1 });

const searchXMAS = 'MAS';

function findXMASInGrid() {
    const foundXMASPositions = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (searchForXMAS(row, col)) {
                foundXMASPositions.push({ row, col });
            }
        }
    }

    return foundXMASPositions;
}

function searchForXMAS(startRow, startCol) {
    const positions = [
        { row: startRow - 1, col: startCol - 1 }, // M
        { row: startRow, col: startCol },         // A
        { row: startRow + 1, col: startCol + 1 }, // S
        { row: startRow - 1, col: startCol + 1 }, // M
        { row: startRow, col: startCol },         // A
        { row: startRow + 1, col: startCol - 1 }  // S
    ];

    if (positions.every(pos => isValidPosition(pos.row, pos.col) && grid[pos.row][pos.col] === searchXMAS)) {
        count2++;
        return true;
    }
    return false;
}

function isValidPosition(row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
}

const xmasResults = findXMASInGrid();
console.log({ xmasResults, count2 });
