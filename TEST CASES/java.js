function towerOfHanoi(n, fromRod, toRod, auxRod, result) {
    if (n === 1) {
        result.push(`1:${fromRod}->${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod, result);
    result.push(`${n}:${fromRod}->${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod, result);
}

function solveHanoi(n) {
    const result = [];
    towerOfHanoi(n, 'A', 'C', 'B', result);
    return result;
}

// Read input (assuming input is provided as a single integer)
const N = parseInt(prompt("Enter the number of disks:").trim(), 10);
const moves = solveHanoi(N);
moves.forEach(move => console.log(move));
