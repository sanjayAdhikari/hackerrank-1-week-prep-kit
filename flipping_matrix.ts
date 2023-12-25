
/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */


function reverseRow(matrix: number[][], row: number): number[][]{
    if(row > matrix.length) return matrix;
     matrix[row] = matrix[row].reverse();
     return matrix;
}

// only at square matrix
function reverseColumn(matrix: number[][], column: number): number[][] {
    const n = matrix[0].length;
    const reversedMatrix: number[][] = [...matrix];
    if(column > n) return matrix;
    for(let row = 0; row < n; row++) {
        reversedMatrix[row][column] = matrix[n - row - 1][column]
    }
    return reversedMatrix;
}

function getFirstQuadrantMatrixSum(matrix: number[][]): number {
    const totalRow = matrix.length;
    // const totalColumn = matrix[0].length;
    let sum = 0;
    for(let i = 0; i < totalRow/2; i++) {
        for(let j = 0; j < totalRow/2; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    console.log('matrix', matrix);
    const n2 = matrix.length - 1;
    if(n2 === 0) return 0;
    const n = (matrix.length/2 - 1); // max loop iteration
    let sum = 0;
    for(let x = 0; x <= n; x++) {
        // each row
        for(let y = 0; y <= n; y++) {
        //    each column
            // finding max possible item for this index, only 4 best possible
            /*
            ie. x,y
            x, n - y,
            n-x, y
            n,n
            where n = length of square matrix -> for 4X4 its 3
             */
            console.log('matrxi for', x, y, matrix[x][y],
                matrix[n2 - x][y],
                matrix[x][n2 - y],
                matrix[n - x][n2 - y]);

            const maxNumber = Math.max(
                matrix[x][y],
                matrix[n2 - x][y],
                matrix[x][n2 - y],
                matrix[n2 - x][n2 - y],
            );
            sum += maxNumber;
            console.log('maxNumber', maxNumber)
        }
    }
    return sum;
}

export default flippingMatrix;