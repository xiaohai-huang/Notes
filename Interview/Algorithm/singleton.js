class Obj {
  static #instance;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Obj("Dog", 5);
    }
    return this.#instance;
  }
  run() {
    console.log(`${this.name} is running...`);
  }
}

const a = Obj.getInstance();
const b = Obj.getInstance();

a.name = "cat";
b.run();
console.log({ a, b });
