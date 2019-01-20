function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var temp = ''
  var pengali = []
  for(var i = 1; i <= angka; i++){
     for(var j = 1; j <= angka; j++){
        if(i * j == angka){
           temp = i.toString() + j.toString()
           pengali.push(temp)
        }
     }
  }
  
  var digit = pengali[0].length
  for(var k = 0; k < pengali.length; k++){
     if(digit > pengali[k].length){
        digit = pengali[k].length
     }
  }
  return digit
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
