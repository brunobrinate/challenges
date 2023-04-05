/**
 * @param {Array} number
 * @return {Array}
 */

  const solution = (statues) =>{
    let store = statues.sort((a,b) => a - b);
    console.log(store);
    
    let shouldHave =store[store.length-1] - store[0] + 1;
    let weHave = store.length;
    let result = shouldHave - weHave;

    console.log(result);
  
}     

console.log(solution([6,2,8,3]));