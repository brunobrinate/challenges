/**
 * @param {number} x
 * @return {number}
 */

const mySqrt = x => {
    let left = 0;
    let right = x;
    while(left <= right){
      const middle = Math.floor((left + right) / 2);
      if(middle * middle <= x && (middle+1) * (middle+1) > x){
          return middle;
      }else if(middle * middle < x){
          left = middle + 1;
      }else{
          right = middle - 1
      }
    }
  };
  