let Person = function () {
  this.name = "unknown";
  this.address = {
    province: "yunnan",
  };
};

let p1 = new Person();
let p2 = new Person();
p1.name = "hello";
p1.address.province = "gd";

console.log(p1.name, p1.address.province); // hello  yunnan
console.log(p2.name, p2.address.province); // unknown yunnan
