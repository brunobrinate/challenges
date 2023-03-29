/**
 * 
 * @param {string} inputString 
 * @returns {boolean}
 */



function solution(inputString) {
    let arr = inputString.split(``).reverse().join(``);
    return inputString === arr;
    
 }
 
 console.log(solution(`socorram me subi no onibus em marrocos`));
 console.log(solution(`reviver`));
 console.log(solution(`palindromo`));