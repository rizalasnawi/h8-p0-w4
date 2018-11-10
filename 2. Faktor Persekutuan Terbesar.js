function fpb(angka1, angka2) {
  // you can only write your code here!
  var a= angka1;
  var b=angka2;
  var hasil=angka1%angka2

  while(hasil!=0){
      a=b
      b=hasil
      hasil=a%b
  }
  return b;
  
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1