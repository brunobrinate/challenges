/**
 * @param {array} arr
 * @return {array}
 */

const solution = (arr1, arr2) => {

    let frequency2 = {};
    for(let i = 0; i < arr2.length; i++){
      const currElem = arr2[i]
      if(!frequency2[currElem]) frequency2[currElem] = 0;
      frequency2[currElem]++
    }
  
    let result = [];
  
    for(let i = 0; i < arr1.length; i++){
      const currElem = arr1[i];
      if(frequency2[currElem] > 0){
        frequency2[currElem]--;
        result.push(currElem);
      }
    }
   return result;
  }
  
  console.log(solution([1,2,2,1],[1,2]));
  console.log(solution([4,9,5],[9,4,9,8,4]));
  
  //retorno um novo array com os valores que estao nos dois arrays de origem. Caso