// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let alpha = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z',
  ];

  function substitution(input, alphabet, encode = true) { 
    if(!alphabet){
      return false}
    let norepeat = new Set(alphabet.split(''))
    
    if( Array.from(norepeat).length < 26){
      return false;
    };
    if(!encode){
      alphabet= alphabet.split('')
      //create a reduce function where key from alpha has values from reverse alpha 
       let newalpha= alphabet.reduce((acc, element, index) => {
       acc[element] = alpha[index]; 
      
       return acc;
     }, {})
     let newmsg = input.toLowerCase();
     let result = "";
     for (let character of newmsg) {
     if(newalpha[character]){result += newalpha[character]
    }else{
      result += character
    }
     }

     return result;
    }
    alphabet= alphabet.split('')
    //create a reduce function where key from alpha has values from reverse alpha 
     let newalpha= alphabet.reduce((acc, element, index) => {
     acc[alpha[index]] = element; 
    
     return acc;
   }, {})
   let newmsg = input.toLowerCase();
   let result = "";
   for (let character of newmsg) {
   if(newalpha[character]){result += newalpha[character]
  }else{
    result += character
  }
   }

   return result;
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
