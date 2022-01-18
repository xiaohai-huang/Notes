"use strict";
const foo = function () {
  console.log(this);
  console.log(this.a);
};

var a = 2;
foo(); // error

var obj = {
  a: 5,
  foo,
};

obj.foo(); // 5
