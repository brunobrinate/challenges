/**
 * @param {number} number
 * @return {number}
 */

const yearToCentury = (year) => {
    if(year == 0) return 0;

    let century = 1;
    for(let i = 101; i <= year;i += 100){
        century++;

        
}
return century;
}
 
console.log(yearToCentury(2023));
console.log(yearToCentury(1700));

/*
 toda vez que n aumentar uma centena, add 1 em century 
 */