/**
 * @param {array} ARRAYs
 * @return {array}
 */

const solution = (array) => {   
    let store = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].length > store) store = array[i].length;
    }
    let newArray = [];
    for(let j = 0; j < array.length; j++){
        if(array[j].length === store) newArray.push(array[j]);
    }
    return newArray;
  }
  
  
  
  
  console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
  console.log(solution(["aba", "aa", "ad", "vcd", "aba", "abcde", "bcda"]));
  