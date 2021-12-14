//      1
//    2   3
//   4 5  6 7

// 10 - 1->3->6
// 7 -  1->2->4
let arr = [];

function Func(num, root) {
  arr.push(num);
  func(root.val - num, root.left);
  func(root.val - num, root.right);
}
