import { inputs } from './day2-inputs.js';

const parseInput = (input) => {
    return input.split('\n')
        .map(line => line.split(' ')
        .map(Number));
};

const isValidDifference = (a, b) => Math.abs(a - b) <= 3;

const isValidPattern = (numbers, pattern) => {
    return numbers.every((num, i) => {
        if (i === numbers.length - 1) return true;
        const next = numbers[i + 1];
        return pattern(num, next) && isValidDifference(num, next);
    });
};

const isMonotonic = (numbers) => {
    return isValidPattern(numbers, (a, b) => a < b) || 
           isValidPattern(numbers, (a, b) => a > b);
};

const canMakeMonotonic = (numbers) => {
    return numbers.some((_, i) => {
        const withoutElement = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
        return isMonotonic(withoutElement);
    });
};

const sequences = parseInput(inputs);
const validSequences = sequences.filter(canMakeMonotonic);

console.log(validSequences.length);