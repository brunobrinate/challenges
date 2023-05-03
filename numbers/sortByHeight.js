/**
 * @param {array} array
 * @return {array}
 */

const solution = a => {
    const solution = a => {
        let people = a.filter(element => element != -1);
        let sortedPeople = people.sort((a,b) => a -b);
        let i = -1;
        return a.map(value =>{
          if(value === -1) return -1;
          i++;
          return a = sortedPeople[i];
        })
    }
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([-1, -1, -1, -1, -1]));
console.log(solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
console.log(solution([4, 2, 9, 11, 2, 16]));