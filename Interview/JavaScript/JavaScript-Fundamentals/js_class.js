"use strict";
class Car {
  constructor() {
    this.name = "my_car";
  }
  methodThis() {
    const obj = {
      objName: "obj in method",
      objArrow: () => {
        console.log(this);
      },
      objNormal() {
        console.log(this);
      },
      objFunc: function () {
        console.log(this);
      },
    };
    obj.objArrow();
    obj.objNormal();
    obj.objFunc();

    return this;
  }
  propertyThis = () => {
    return this;
  };
}

const car = new Car();

console.log(car.methodThis());
console.log(car.propertyThis());
