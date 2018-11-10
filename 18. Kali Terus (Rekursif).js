function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka=String(angka)
    var hasil = 1
    if(strAngka.length==1){
        return Number(strAngka)
    }else{
        
        for(var i=0;i<strAngka.length;i++){
            hasil = hasil * Number (strAngka[i])
            }
        }
    return kaliTerusRekursif(hasil);
}

  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6