/**
 * @param {string} string
 * @return {string}
 */

const stringInReverse = (string) => {
    let storer = '';
    for(let count = string.length - 1; count >= 0; count--){
        storer += (string)[count];

    }
    return storer;
}



console.log(stringInReverse('davi'));
 console.log(stringInReverse('julia'));
 console.log(stringInReverse('paralelepipedo'));
 console.log(stringInReverse('o rato roeu a roupa do rei de roma'));
 console.log(stringInReverse('a manha esta nublada'));