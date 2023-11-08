/**
 * @return {function} 
 */

const createHelloWorld = () => {
    function helloWorld(){
      return "Hello World";
    }
    return helloWorld;
}

console.log(createHelloWorld());
console.log(createHelloWorld([{},null,42]));