function urutkanAbjad(str) {
  // you can only write your code here!
  var alphabet="abcdefghijklmnopqrstuvwxyz"
  var string=""
  for(var i=0;i<=alphabet.length-1;i++){
      for(var j=0;j<=str.length-1;j++){
          if(alphabet[i] === str[j]){
             string+=str[j];
            }
        }
    }
        return string;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'