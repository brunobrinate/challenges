/**
 * @param {array} array
 * @return {boolean}
 */

const solution = (sequence) => {
    let invalidNumber = 0;

    for(let i = 1; i < sequence.length; i++){
        if(sequence[i] <= sequence[i - 1]){
        invalidNumber++;
        if(invalidNumber > 1) return false;
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
    }
  }
    return true;
}

console.log(solution([1,2,3,1]));
console.log(solution([1,3,2]));