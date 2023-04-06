/**
 * @param {array} matrix
 * @return {number}
 */

const solution = (matrix) =>{
    let counter = 0;
    for(let i = 0; i < matrix[0].length;i++){
        for(let j = 0; j < matrix.length; j++){
            if(matrix[j][i] === 0) break;

            counter += matrix[j][i];
        }
    }
    return(counter)
}

console.log(solution([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));
console.log(solution([[1,1,1,0],[0,5,0,1],[2,1,3,10]]));