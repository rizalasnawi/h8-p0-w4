function changeMe(arr) {
  // you can only write your code here!
  if(arr.length==0){
      console.log("");
  }

  for(var i=0;i<=arr.length-1;i++){
      console.log([i+1] +"."+ arr[i][0] + " "+ arr[i][1] + " :")
      var SuperHeroObject={}
      SuperHeroObject['firsName'] = arr[i][0]
      SuperHeroObject['lastName'] = arr[i][1]
      SuperHeroObject['gender']   = arr[i][2]
      if(arr[i][3] === undefined || arr[i][3] > 2018){
          SuperHeroObject['age'] = 'invalid'
      }else{
          SuperHeroObject['age'] = 2018 - arr[i][3]
      }
      console.log(SuperHeroObject);
    }

  }

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""