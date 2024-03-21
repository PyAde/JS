let number = [1,5,3,10,3,2,1]

for(let i = 0; i < number.length ; i++){
    for(let j = 0; j <number.length - 1 - i; j++){
        if(number[j] < number[j + 1]){
            let temp = number[j];
            number[j] = number[j + 1];
            number[j+1] = temp;
        }
    }
}

console.log(number)