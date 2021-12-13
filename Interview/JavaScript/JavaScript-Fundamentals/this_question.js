function q1() {
    const object = {
        name: 'My Object',
        getNameFunc() {
            return () => {
                return this.name;
            }
        }
    }

    globalThis.name = 'The Window'

    console.log(object.getNameFunc()()); 
}
q1() // My Object