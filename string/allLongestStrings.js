/**
 * @param {array} ARRAYS
 * @return {array}
 */

const solution = (array) => {
    let store = 0;
    let newArray = [];
    for(let i = 0; i <= array.length;i++){
        const actualString = array[i];
        if(actualString.length > store){
            store = actualString.length;
            newArray = [actualString];
        }else{(actualString.length === store)
            newArray.push(actualString);
        }
    }

    return newArray;

    
}




console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));

//primeiro for, se for igual a `,` 