/**
 * @param {array} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums,target) => {
    let index = 0;
    for(let i = 0; i < nums.length; i++){
      if(target <= nums[i]) return index;
      index++; 
    }
    return index;
  }
  
  console.log(searchInsert([1,3,5,6],(5)));
  console.log(searchInsert([1,3,5,6],(2)));
  console.log(searchInsert([1,3,5,6],(7)));
  