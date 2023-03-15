 //@param = {string} string
 //@return = {number}
 //
 
 
 
 const countLettersA = (string) => {
    let storer = 0;
    for(let counter = 0; counter < string.length; counter++){
        let verif= (string)[counter];

        if( verif == 'a' || verif == 'e' || verif == 'i' || verif == 'o' || verif == 'u') storer++
    }
    return storer;
 }

 console.log(countLettersA('Davi'));
 console.log(countLettersA('Julia'));
 console.log(countLettersA('paralelepipedo'));
 console.log(countLettersA('o rato roeu a roupa do rei de roma'));
 console.log(countLettersA('a manha esta nublada'));