import { inputs } from './day1-inputs.js';

const parseInput = (input) => {
    return input.split('\n').map(line => {
        const [left, right] = line.split(/\s+/).map(Number);
        return { left, right };
    });
};

const sortNumbers = (numbers) => {
    const sortedLeft = [...numbers].sort((a, b) => a.left - b.left);
    const sortedRight = [...numbers].sort((a, b) => a.right - b.right);
    
    return sortedLeft.map((leftItem, index) => ({
        left: leftItem.left,
        right: sortedRight[index].right
    }));
};

const calculateDistance = (firstPoint, secondPoint) => {
    return Math.abs(secondPoint - firstPoint);
};

const calculateTotalDistance = (numbers) => {
    return numbers.reduce((total, number) => {
        return total + calculateDistance(number.left, number.right);
    }, 0);
};

const numbers = parseInput(inputs);
const joinedNumbers = sortNumbers(numbers);
const total = calculateTotalDistance(joinedNumbers);

console.log(total);
