/** @format */

// function arrayDiff(a, b) {
//     let result = []

//     for(let i = 0; i < a.length; i++){
//         if(!b.includes(a[i])){
//             result.push(a[i]);
//         }
//     }
//     return result
// }

// console.log(arrayDiff[1,2], [1])

function saleHotdogs(n) {
  const pricePerHotdog = 100;

  if (n < 5) {
    return n * pricePerHotdog;
  } else if (n >= 5 && n < 10) {
    return n * (pricePerHotdog - 5);
  } else {
    return n * (pricePerHotdog - 10);
  }
}

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(howManydays(1),31);
//     Test.assertSimilar(howManydays(2),28);
//     Test.assertSimilar(howManydays(3),31);
//     Test.assertSimilar(howManydays(4),30);
//     Test.assertSimilar(howManydays(12),31);
//   });
// });

function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
    default:
  }
  return days;
}

console.log(howManydays(1));

function padIt(str,n){
  //coding here
  let result = str;
  let i = 0;
  while(i < n){
    i++
    if(n % 2 === 0){
      result = "*" + result;
    }else{
      result = result + "*";
    }
  }
}

function padIt(str, n) {
  let result = str;
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) { // Check if the current iteration is even
      result = "*" + result;
    } else {
      result = result + "*";
    }
    i++;
  }
  return result;
}
