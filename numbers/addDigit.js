/**
 * @param {number} num
 * @return {number}
 */


const addDigits = num => {
  let sum = 0;
  let convert = String(num).split('');
  for(let i = 0; i < convert.length; i++){
  sum += parseInt(convert[i]);
  }

  while(sum > 9){
    let digits = String(sum).split('');
    sum = 0;
    for(let j = 0; j < digits.length; j++){
    sum += parseInt(digits[j]); 
    }
  }
  return sum;
}

console.log(addDigits(38));