/**
 * Se um número for par me retorne "even"
 * Se um número for impar me retorne "odd"
 */

/**
 * @param {number} n
 * @return {string}
 */
const oddEven = (n) => {
    if(n % 2 == 0){
        return("even");
    }else{
        return('odd');
    }
  };
  
  console.log(oddEven(1)); // odd
  console.log(oddEven(2)); // even
  console.log(oddEven(3)); // odd
  console.log(oddEven(4)); // even
  console.log(oddEven(5)); // odd
  console.log(oddEven(12)); // even
  console.log(oddEven(13)); // odd
  console.log(oddEven(15)); // odd
  console.log(oddEven(18)); // even
  console.log(oddEven(21)); // odd