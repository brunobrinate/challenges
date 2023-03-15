/**
 * @param {number} n
 * @return {number}
 */
const factorial = (n) => {
    let storer  = 1;

    for(let count = 2; count <= n; count++){
        storer *= count;
    }
    return storer;
  };
  
  console.log(factorial(1)); // 1
  console.log(factorial(2)); // 2
  console.log(factorial(3)); // 6
  console.log(factorial(4)); // 24
  console.log(factorial(5)); // 120
  console.log(factorial(6)); // 720
  console.log(factorial(7)); // 5040
  console.log(factorial(8)); // 40320