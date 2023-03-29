/**
 * 
 * @param {number} number 
 * @return {number}
 */

function solution(number) {
    let result = -1000000;
    for(let i = 0, j = 1; j <= number.length; i++, j++){
      let multiplication = (number)[i] * (number)[j];
      if(multiplication > result) result = multiplication;
    }
     return result
    
  }

console.log(solution([3, 6, -2, -5, 7, 3]));
