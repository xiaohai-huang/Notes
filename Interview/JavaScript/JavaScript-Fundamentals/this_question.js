"use strict";

function q1() {
    const object = {
        name: 'My Object',
        getNameFunc() {
            console.log(this);
            return () => {
                return this.name;
            }
        }
        ,
        testThis: () => {
            console.log(this);
        }
    }

    globalThis.name = 'The Window'
    object.testThis()
    console.log(object.getNameFunc()());
}
q1() // My Object
function TestArrowThis() {
    this.name = "6666"
    const object = {
        name: "hello",
        method1: function () {
            console.log(this.name);
        },
        method2: () => {
            console.log(this.name);
        }

    }

    object.method1()
    object.method2()

}
new TestArrowThis()


class Car {
    branch = "tx"
    constructor() {
        this.carName = "QQ"
    }
    method1() {
        console.log(this.carName);
    }
    method2 = () => {
        console.log(this.branch);
    }
    getObj() {
        console.log(this);
        const object = {
            objName: "hello",
            method1: function () {
                console.log(this.objName);
            },
            method2: () => {
                console.log(this.carName);
            }

        }

        object.method1()
        object.method2()
    }
}

const c = new Car()
c.method1()
c.method2()
c.getObj()


class Animal {
    name = "777"
    constructor(name) {
        this.name = name
        this.age = 7
    }
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}
const a = new Animal("6");
console.log(a.speak());
let s = a.speak
console.log(s.call({ gender: "male" }));

function testStrict() {
    return this
}
console.log(testStrict());


function Person() {
    this.name = "xh"
    const getName = () => {
        console.log(this);
        console.log(this.name);
    }
    this.getName = getName
}

const p = new Person()
p.getName()

class Test {
    name = "777"
    constructor() { }
    prop = () => this
}
const testObj = {
    t: "777asdasd",
    getThis: () => this
}
console.log(testObj.getThis());
const t = new Test();
console.log(t.prop());