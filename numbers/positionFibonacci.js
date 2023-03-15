/**
 * @param {number} n
 * @return {number}
 */
const nthFibonacciNumber = (n) => {
    if(n == 0) return 0;
    if(n == 1) return 1;
    
    let prev = 1; curr = 2;
    let tmp = 0;    
        for(let i = 3;i < n; i++){
            tmp = curr;
            curr = prev + curr;
            prev = tmp;
            
        } 
        return (curr);
    }
        
    //preciso obter o indice de actualN
    //variaveis ; prevprev0, prev1, curr1, tmp
    //[0,1,1,2,3]
    //     2 3 4
    
  
  
  console.log(nthFibonacciNumber(1)); // 1
  console.log(nthFibonacciNumber(3)); // 2
  console.log(nthFibonacciNumber(4)); // 3
  console.log(nthFibonacciNumber(5)); // 5
  console.log(nthFibonacciNumber(7)); // 13
  console.log(nthFibonacciNumber(10)); // 55
  console.log(nthFibonacciNumber(12)); // 144