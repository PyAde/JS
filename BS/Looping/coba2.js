// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
// console.log("keys of ob:")
// showObjectKeys(ob);
// console.log("values of ob:")
// showObjectValues(ob);

function giveMeFive(obj){
  let fiveObj = [];
  for(let key in obj){
    if(key.length === 5){
      fiveObj.push(key);
    }
    if(typeof obj[key] === 'string' && obj[key].length === 5){
      fiveObj.push(obj[key]);
    }
  }
  if(typeof obj === 'string' && obj.length === 5){
    fiveObj.push(obj);
  }
  return fiveObj;
}
console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"})); // Output: ["earth", "world"]
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})); // Output: ["Ihave", "money", "model"]
console.log(giveMeFive({Pears:"than", apple:"sweet"})); // Output: ["Pears", "apple", "sweet"]
console.log(giveMeFive("hello")); // Output: ["hello"]


// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
//     Test.assertSimilar(whatNumberIsIt(100),"Input number is 100");
//     Test.assertSimilar(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
//     Test.assertSimilar(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
//     Test.assertSimilar(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
//     Test.assertSimilar(whatNumberIsIt(NaN),"Input number is Number.NaN");
//     Test.assertSimilar(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");

//   });
// });


function whatNumberIsIt(n){
  if(Number.isNaN(n)){
    return "Input number is Number.NaN";
  }
  if(!Number.isFinite(n)){
    if(n === Number.POSITIVE_INFINITY){
      return "Input number is Number.POSITIVE_INFINITY";
    } else {
      return "Input number is Number.NEGATIVE_INFINITY";
    }
  }
  if(n === Number.MAX_VALUE){
    return "Input number is Number.MAX_VALUE";
  }
  if(n === Number.MIN_VALUE){
    return "Input number is Number.MIN_VALUE";
  }
  return `Input number is ${n}`;
}



// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(colorOf(255,0,0), "#ff0000");
//     showColor("#ff0000")
//     Test.assertSimilar(colorOf(0,111,0), "#006f00");
//     showColor("#006f00")
//     Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
//     showColor("#010203")
//   });
// });


function colorOf(r,g,b){
  let rgb = "#";
  rgb += r.toString(16).padStart(2, '0');
  rgb += g.toString(16).padStart(2, '0');
  rgb += b.toString(16).padStart(2, '0');
  return rgb;
}
