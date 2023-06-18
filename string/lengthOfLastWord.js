/**
 * @param {string} string
 * @return {number}
 */

const solution = s => {
    let store = 0;
    for(i = 0; i < s.length; i++){
      if(s[i] != " ") {
        if(s[i - 1] == " "){
          store = 1;
        }else{
          store += 1;
        }
      }
    }
    return store;
  }
  
  console.log(solution("Hello World"));
  console.log(solution("   fly me   to   the moon  "));
  console.log(solution("luffy is still joyboy"));
  
  