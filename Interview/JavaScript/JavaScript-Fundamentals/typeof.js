console.log(typeof "a");
console.log(typeof true);
console.log(typeof null);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof (() => { }));
console.log(typeof ["a"]);
console.log(typeof Symbol("a"));
let a;
console.log(typeof a);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof Math.abs);
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const myCar = new Car("QQ", 66)

console.log(myCar);
console.log(typeof myCar);

class Dog{

}

console.log(typeof Dog);