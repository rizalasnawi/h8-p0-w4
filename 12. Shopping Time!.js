function shoppingTime(memberId, money) {
  // you can only write your code here!
  var listBarang = []
  listBarang.push(['Sepatu brand Stacattu', 1500000]);
  listBarang.push(['Baju brand Zoro', 500000]);
  listBarang.push(['Baju brand H&N', 250000]);
  listBarang.push(['Sweater brand Uniklooh', 175000]);
  listBarang.push(['Casing Handphone', 50000]);

  var data={}

  if(memberId === '' || memberId === undefined){
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
  if(money < 50000 ){
      return "Mohon maaf, uang tidak cukup"
  }

  data['memberId'] = memberId;
  data['money'] = money;

  var Keranjang = [];
  for(i=0;i<=listBarang.length-1;i++){
      var change = money;
      if(money >= listBarang[i][1]){
          Keranjang.push(listBarang[i][0]);
          money = change - listBarang[i][1];
      }
      data['listPurchased']=Keranjang;
      data['changeMoney']=money;
  }

return data;

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja