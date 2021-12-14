class Car {
    constructor() {
        this.name = "my_car"
    }
    forward() {
        console.log("go forward");
    }
    reverse = () => {
        console.log("go reverse");
        return () => this
    }
}
const c = new Car()
console.log(c.reverse()()); 