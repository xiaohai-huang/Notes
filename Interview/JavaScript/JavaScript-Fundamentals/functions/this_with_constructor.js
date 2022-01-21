window.name = "hello";

function Foo() {
  console.log(this);
  this.name = "bar";
  this.getName = function () {
    return this.name;
  };
}

const { log } = console;
let foo = new Foo();
let getName = foo.getName;

log(foo.getName());
log(getName());
log(Foo.bind(foo).getName);
