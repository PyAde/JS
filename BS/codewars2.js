/** @format */

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

function trueOrFalse(val) {
  if (
    val === true ||
    val === 123 ||
    val === "123" ||
    (Array.isArray(val) && val.length > 0) ||
    val === "false"
  ) {
    return "true";
  } else if (
    val === false ||
    val === 0 ||
    val === "" ||
    val === null ||
    val === undefined
  ) {
    return "false";
  } else {
    return "true";
  }
}


function arrayDiff(a, b) {
    let result = []

    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            result.push(a[i]);
        }
    }
    return result
}