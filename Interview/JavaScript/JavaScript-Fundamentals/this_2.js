const foo = function () {
  console.log(this.a);
};
// var a = 2
let a = 2;
foo(); // undefined

var obj = {
  a: 5,
  foo,
};

obj.foo(); // 5
