import { inputs } from './day2-inputs.js';

const parseInput = input => input.split('\n').map(line => line.split(' ').map(Number));

const isValidSequence = (current, next) => Math.abs(current - next) <= 3;

const checkLinePattern = (line, comparator) => {
    return line.every((number, index) => {
        if (index === line.length - 1) return true;
        const nextNumber = line[index + 1];
        return comparator(number, nextNumber) && isValidSequence(number, nextNumber);
    });
};

const lineIsIncreasing = line => checkLinePattern(line, (a, b) => a < b);
const lineIsDecreasing = line => checkLinePattern(line, (a, b) => a > b);

const numbers = parseInput(inputs);
const safeLines = numbers.filter(line => lineIsIncreasing(line) || lineIsDecreasing(line));

console.log(safeLines.length);