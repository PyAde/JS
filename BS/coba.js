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

function padIt(str, n) {
  //coding here
  let result = str;
  let i = 0;
  while (i < n) {
    i++;
    if (n % 2 === 0) {
      result = "*" + result;
    } else {
      result = result + "*";
    }
  }
}

function padIt(str, n) {
  let result = str;
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      // Check if the current iteration is even
      result = "*" + result;
    } else {
      result = result + "*";
    }
    i++;
  }
  return result;
}

function pickIt(arr) {
  var odd = [];
  var even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
//     Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
//     Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
//     Test.assertSimilar(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);

//   });
// });

function grabDoll(dolls) {
  var bag = [];
  var helloKittyCount = 0; // Variabel untuk menghitung berapa kali "Hello Kitty" sudah ditambahkan
  var barbieCount = 0; // Variabel untuk menghitung berapa kali "Barbie doll" sudah ditambahkan

  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty") {
      if (helloKittyCount < 2) {
        bag.push(dolls[i]);
        helloKittyCount++;
      } else {
        continue; // Lewati iterasi jika dua "Hello Kitty" sudah ditambahkan
      }
    } else if (dolls[i] === "Barbie doll") {
      if (barbieCount < 1) {
        bag.push(dolls[i]);
        barbieCount++;
      } else {
        break; // Keluar dari loop jika satu "Barbie doll" sudah ditambahkan
      }
    }
  }

  return bag;
}


function moveZeros(arr) {
  let nonZeroElements = arr.filter(element => element !== 0);
  let zeroCount = arr.length - nonZeroElements.length;
  return nonZeroElements.concat(Array(zeroCount).fill(0));
}

function giveMeFive(obj) {
  let result = [];
  for (let key in obj) {
      if (obj[key].length === 5) {
          result.push(key);
      }
  }
  return result;
}

function grabDoll(dolls){
  var bag=[];
  //coding here
  for(let i = 0; i < dolls.length; i++){
    if(dolls.filter[i] == "Hello Kity" || dolls.filter[i] == "Barbie doll"){
      
    }
  }
  return bag;
}