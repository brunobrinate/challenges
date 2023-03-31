/**
 * @param {number} number 
 * @return {number} 
 */
const solution = (n) => {
    let area = 1;
    for(let i = 1; i <= n; i++){
        let x = (4 * i) -4;
        area += x;

    }
    return area;
}
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));


