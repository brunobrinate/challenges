/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * */

const addBinary = (a,b) => {
    a = String(a);
    b = String(b);
 
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
 
    let result = '';
    let carry = 0;
 
    for(let i = maxLength-1; i >= 0; i--){
       const bitA = parseInt(a[i]);
       const bitB = parseInt(b[i]);
       
       const sum = bitA + bitB + carry;
 
       carry = Math.floor(sum / 2);
 
       result = (sum % 2) + result;
    }
 
    if(carry){
     result = 1 + result;
    }
   
    return result;
 };

console.log(addBinary((11),(1)));
console.log(addBinary((1010),(1011)));

/*
const addBinary = (a,b) => {
    const decimalNumber = parseInt(a,2);
    const decimalNumber2 = parseInt(b,2);
    let sum = decimalNumber + decimalNumber2;
    const result = sum.toString(2);
    return result;
};
 Este foi o meu primeiro resultado. Porém, os metodos usados, como o parteInt ou toString me limitam a uma quantidade de caracteres onde eu não consigo retornar strings muito extensas. Dessa forma, valores binários altos seriam impossíveis de serem tratados. 
*/