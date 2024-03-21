/** @format */
// loop statement --break,continue
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      continue;
    }

    bag.push(dolls[i]);
    if (bag.length === 3) {
      break;
    }
  }
  return bag;
}
function grabDoll(dolls){
    var bag=[];
    //coding here
    
    for(let i  = 0; i < dolls.length; i++){
        if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll"){
            bag.push(dolls[i]);
        }else{
            continue
        }
        if(bag.length > 2){
            break
        }
    }
    return bag;
  }


  // describe("Tests", () => {
  //   it("test", () => {
  //     Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
  //     Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
  //     Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
  
  //   });
  // });
  
  function giveMeFive(obj){
    //coding here
    let fiveobj = []
    
  }