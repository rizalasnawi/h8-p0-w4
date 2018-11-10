function angkaPrima(angka) {
  // you can only write your code here!

  for(var i=2; i<=angka; i++){
      var isCheck=true;
      for(var j=2; j<i; j++){
          if(i%j==0){
              isCheck = false;
              break;
          }
      }
      
    }
    if(isCheck){
        return true;
    }else{
        return false;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false