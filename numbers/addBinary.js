/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * */

const addBinary = (a,b) => {
    const decimalNumber = parseInt(a,2);
    const decimalNumber2 = parseInt(b,2);
    let sum = decimalNumber + decimalNumber2;
    const result = sum.toString(2);
    return result;
};

console.log(addBinary((11),(1)));
console.log(addBinary((1010),(1011)));