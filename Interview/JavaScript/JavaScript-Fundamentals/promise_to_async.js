// pro1().then(
//     pro2().then(
//         pro3().then(
//             pro4().then(
//                 pro5().then()
//             )
//         )
//     )
// )

const pro1 = () => new Promise(resolve => {
    console.log("hello");
    resolve()
})

const pro2 = () => new Promise(resolve => {
    console.log("hello 22");
    resolve()
})

const pro3 = () => new Promise(resolve => {
    console.log("hello 33");
    resolve()
})
pro1().then(()=>console.log("nb"))
pro2().then(()=>console.log("done pro2"))

// pro1().then(
//     pro2().then(
//         pro3().then(() => {
//             console.log("done");
//         })
//     )
// )

// async function transformed(){
//     const p5 =  await pro5()

//     await pro1()
//     // xxx
// }