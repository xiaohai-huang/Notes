// 计算机-知识遗忘 DNS, thread, garbage collection, deadlock,
// 广度-
// browser 重绘，重排
// webpack, tree shaking
async function f1() {
  console.log(1);
  await f2();
  console.log(3);
}

async function f2() {
  console.log("f2");
}

f1();
