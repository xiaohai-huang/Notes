function q1() {

    console.log((x => x)('hello'))
    console.log((x => { x })('hello'))
}
q1()