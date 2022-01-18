function q1() {
  setTimeout(() => {
    console.log(0);
    Promise.resolve().then(() => console.log(1));
  });
  setTimeout(() => console.log(2));
  Promise.resolve().then(() => {
    console.log(3);
    Promise.resolve().then(() => console.log(4));
  });
  Promise.resolve().then(() => console.log(5));
  console.log(6);
}

/*
macro
micro  

6
3
5
4
0
1
2

*/
// q1()

function q2() {
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end"); // p-end
  }

  async function async2() {
    //p1
    console.log("async2");
  }

  console.log("script start");

  setTimeout(function () {
    // m1
    console.log("setTimeout");
  }, 0);

  async1();

  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    // p2
    console.log("promise2");
  });

  console.log("script end");
}

function async2Promise() {
  return new Promise((resolve) => {
    console.log("async2");
    resolve();
  });
}

function async1Promise() {
  return new Promise(() => {
    console.log("async1 start");
    new Promise((resolve) => {
      console.log("async2");
      resolve();
    }).then(() => {
      console.log("async1 end");
    });
  });
}

/*
MACRO: m1
micro: p-end, p2

script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout



WRONG!!!: missing async1 end
script start
async1 start
async2
promise1
script end
async2
promise2
setTimeout


*/

// q2()

function q3() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000); //m1
  async function fn() {
    console.log(3);
    setTimeout(() => {
      console.log(4);
    }, 20); //m2
    return Promise.reject();
  }
  async function run() {
    console.log(5);
    await fn();
    console.log(6);
  }
  run();
  //for循环执行约150ms
  for (let i = 0; i < 90000000; i++) {}
  setTimeout(() => {
    //m3
    console.log(7);
    new Promise((resolve) => {
      console.log(8);
      resolve();
    }).then(() => {
      console.log(9);
    });
  }, 0);
  console.log(10);
}
/*
MACRO:  m2,m3, m1

1
5
3
10
4
7
8
9
2 -- forget m1
*/

q3();
