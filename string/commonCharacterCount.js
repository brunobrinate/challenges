/**
 * @param {string} string
 * @return {number}
 */

const solution = (s1,s2) =>{
  let counter = 0;
  let arrayS1 = s1.split(``);
  let y = s2;
  while(arrayS1.length){
   const x = arrayS1.pop();
     if(y.includes(x)){
       counter++;
       y = y.replace(x,``);
     }
  }
  return counter;
}

console.log(solution(`aabcc`,`adcaa`));
console.log(solution(`abcab`,`ccbac`));
console.log(solution(`efghi`,`ihgfe`));