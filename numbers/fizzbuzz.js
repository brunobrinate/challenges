/**
 * @param {number} n
 * @return {number}
 */
const fizzbuzz = (n) => {
    if(n % 5 == 0 && n % 3 == 0){
        return('FizzBuzz');
    }else if(n % 5 == 0){
        return('Fizz');
    }else if(n % 3 == 0){
        return('Buzz');
    }else{
        return(":(")
    }
    } 
  
  console.log(fizzbuzz(1)); // :(
  console.log(fizzbuzz(2)); // :(
  console.log(fizzbuzz(3)); // Buzz
  console.log(fizzbuzz(4)); // :(
  console.log(fizzbuzz(5)); // Fizz
  console.log(fizzbuzz(12)); // Buzz
  console.log(fizzbuzz(13)); // :(
  console.log(fizzbuzz(15)); // FizzBuzz
  console.log(fizzbuzz(18)); // Buzz
  console.log(fizzbuzz(21)); // Buzz