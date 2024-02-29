// Car

class Car{
  constructor(name, color, speed){
    this.name = name;
    this.color = color;
    this.speed = speed;
  }
  drive(){
    console.log(`${this.name} ${this.color} is driving...`);
  }
  turn(){
    console.log(`${this.name} ${this.color} is turning...`);
  }
  reverse(){
    console.log(`${this.name} ${this.color} is reversing....`);
  }
}
const car = new Car('BMW', 'red', 200);
console.log(car);
