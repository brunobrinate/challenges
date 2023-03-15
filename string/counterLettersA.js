 //@param = {string} string
 //@return = {number}
 //
 
 
 
 const countLettersA = (string) => {
    let storer = 0;
    for(let counter = 0; counter < string.length; counter++){
        let verification = (string)[counter];

        if(verification == 'a') storer++
    }
    return storer;
 }

 console.log(countLettersA('avi'));
 console.log(countLettersA('Julia'));
 console.log(countLettersA('paralelepipedo'));
 console.log(countLettersA('o rato roeu a roupa do rei de roma'));
 console.log(countLettersA('a manha esta nublada'));