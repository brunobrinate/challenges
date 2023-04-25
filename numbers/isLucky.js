/**
 * @param {number} number 
 * @return {boolean}
 */

const solution = n => {
    let toString = n.toString();
    let toArray = toString.split(``);
    let store1 = 0;
    let store2 = 0;
 
    for(let i = 0, j = toArray.length-1; i < j; i++, j--){
        store1 += parseInt(toArray[i]);
        store2 += parseInt(toArray[j]);
    }
     if(store1 === store2){
     return true;
    }else{
     return false;
     }
 }

console.log(solution(1230));
console.log(solution(573290));
console.log(solution(4509));