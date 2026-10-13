function sumOfMatrixElements(matrix) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const element = matrix[row][col];
            sum += element;
        }
    }
    return sum;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(sumOfMatrixElements(matrix));
