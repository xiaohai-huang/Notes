class Dog {
  name = "hello";
  method = () => {
    console.log(this);
  };
  method2() {
    (() => {
      console.log(this);
    })();
  }
}

const dog = new Dog();
dog.method();
dog.method2();
