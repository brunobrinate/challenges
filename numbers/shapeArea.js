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
//1 1
//2 5 4
//3 13 8
//4 25 12
//5 41 16
//n  s  r
//vou enviar n (1,2,3,...)
//vou retornar a quantidade de quadrados que há no polígono(1,5,13,...)
//a logica é uma multiplicacao 
