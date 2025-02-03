var readline = require("readline").createInterface(process.stdin, process.stdout);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line.trim());
    lineNumber++;

    if (lineNumber === 1) {
        logic();
        readline.close();
    }
}

function logic() {
    const N = parseInt(inputArr[0]);
    const Arr = inputArr[1].split(" ").map(Number);
    
    // Frequency Map
    let freqMap = new Map();
    for (let num of Arr) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }

    // Convert map values to array and sort in descending order
    let frequencies = Array.from(freqMap.values()).sort((a, b) => b - a);
    
    let removedCount = 0;
    let totalRemoved = 0;
    let halfSize = Math.floor(N / 2);
    
    for (let freq of frequencies) {
        totalRemoved += freq;
        removedCount++;
        if (totalRemoved >= halfSize) break;
    }

    console.log(removedCount);
}
