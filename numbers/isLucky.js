/**
 * @param {number} number 
 * @return {boolean}
 */

const solution = n => {
    let toString = n.toString();
    let toArray = toString.split(``);
    let sum1 = 0;
    let sum2 = 0;
  
    for(let i = 0, j = toArray.length-1; i < j; i++, j--){
        sum1 += parseInt(toArray[i]);
        sum2 += parseInt(toArray[j]);
    }
     return sum1 === sum2;
  }
  
  console.log(solution(1230));
  console.log(solution(573290));
  console.log(solution(4509));