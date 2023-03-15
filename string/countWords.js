/**
 * @param {string} string
 * @return {number}
 */
 
 
 
 /*const countLettersA = (string) => {
    let counter  = 1;
    for(let i = 0; i < string.length; i++){
        if((string)[i] == ' ') counter++;
    }
    return counter;
 }*/

 //AGORA FAÇA SEM USAR O ESPAÇO COMO PARÂMETRO:
 //POSSO CONVENTER A STRING EM ARRAYS, E RETORNAR O NUMERO DE ARRAYS

 const countLettersA = (string) =>{
    let word = string.split();

    return word;
 }

 console.log(countLettersA('Davi'));
 console.log(countLettersA('Julia'));
 console.log(countLettersA('paralelepipedo'));
 console.log(countLettersA('o rato roeu a roupa do rei de roma'));
 console.log(countLettersA('a manha esta nublada'));