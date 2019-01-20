function fpb(angka1, angka2) {
  // you can only write your code here!
  // var result = i
  // for(var i = 1; i <= angka1; i++){
  //    if(angka1 % i == 0 && angka2 % i == 0){
  //       result = i
  //    }
  // }
  // return result

  var a = angka1
  var b = angka2
  var hasil = a % b

  while (hasil != 0){
     var a = b
     var b = hasil
     var hasil = a % b
  }
  return b
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
