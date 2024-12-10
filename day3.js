import { inputs } from "./day3-inputs.js";

// regex101
// const regex = new RegExp(/mul\([0-9]+,[0-9]+\)/gm);

const regex = /mul\((\d+),(\d+)\)/g;
let total = 0;

let match;
while ((match = regex.exec(inputs)) !== null) {
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]); 
    total += num1 * num2;
}

console.log("Total:", total);
