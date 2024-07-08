/** @format */

function testit(n) {
  if(n === 0 || n === 1){
    return n
  }else if(n % 2 === 0){
    return testit(n - 1)
  }else if( n % 3 === 0){
    return testit(n - 1)
  }
}
