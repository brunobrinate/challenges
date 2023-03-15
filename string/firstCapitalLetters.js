/**
 * 
 * @param {string} string 
 * @returns {string}
 */
 
 
 
 const countLettersA = (string) => {
    
    let word = (string.split(' '));

    for(let counter = 0; counter < word.length; counter++){
        let storer = word[counter];

        let firstLetter = storer[0];
        storer = firstLetter.toUpperCase() + storer.slice(1);

        word[counter] = storer;
    }
    
    return word.join(' ');
 }

 console.log(countLettersA('davi'));
 console.log(countLettersA('julia'));
 console.log(countLettersA('paralelepipedo'));
 console.log(countLettersA('o rato roeu a roupa do rei de roma'));
 console.log(countLettersA('a manha esta nublada'));