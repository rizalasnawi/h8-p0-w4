function cariModus(arr) {
  // you can only write your code here!
  var temp = {};
  var modus = -1;
  for (i = 0; i <= arr.length - 1; i++) {
    if (temp[arr[i]] == undefined) {
      temp[arr[i]] = 1;
    } else {
      temp[arr[i]] += 1;
    }
  }
  for (i = 0; i <= arr.length - 1; i++) {
    if (temp[arr[i]] > 1 && temp[arr[i]] !== arr.length) {
      modus = arr[i];
    } else if (temp[arr[i]] === arr.length) {
      modus = -1;
    }
  }

  return modus;
}

  /* 
  counter =0;
  var mod =0;
  for(var i=0; i<arr.length;i++){
      for(var j=0;j<arr.length;j++){
          if(arr[i] == arr[j] && i!=j){
            counter++;
             if(counter > 0){          
                 mod =i;
             }
          }
      }
      
  }
  var total = 0;
  total+=arr[i];
  if(total / arr.length == arr ){
      
  }
    if(mod == 0){
       return -1;
    }else{
      return mod;
    }
  
} */

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1