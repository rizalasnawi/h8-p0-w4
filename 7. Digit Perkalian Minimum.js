function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    //var str=String(angka);
    var temp=""
    var pengali=[]

    for(var i=1;i<=angka;i++){
        for(var j=1;j<=angka;j++){
            if(i*j === angka){
                temp=i.toString()+j.toString();
                pengali.push(temp);
                //console.log(temp)
            }
        }
    }
    
    var digit=pengali[0].length;
        //console.log(digit);
        for(var i=0; i<pengali.length;i++){
            if(digit > pengali[i].length){
                digit=pengali[i].length;
            }
        }
        return digit;
    }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2 