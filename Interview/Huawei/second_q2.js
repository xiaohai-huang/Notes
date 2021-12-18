// angular 12
// csrf, 安全， 深度-> 性能
function formatNumber(num, delimiter = ",", numPerGroup = 3) {
  // e.g. [12300, 50]
  let [normalPart, decimalPart = ""] = num.toString().split(".");
  // e.g. 00321
  const numStr = [...normalPart].reverse().join("");
  if (decimalPart.length > 0) decimalPart = "." + decimalPart;

  const numGroups = Math.ceil(numStr.length / numPerGroup);
  // e.g. [123, 00]
  const numsArray = [];
  for (let i = 0; i < numGroups; i++) {
    // divide number into parts
    const nums = [
      ...numStr.slice(i * numPerGroup, i * numPerGroup + numPerGroup),
    ]
      .reverse()
      .join("");
    numsArray.push(nums);
  }

  return numsArray.reverse().join(delimiter) + decimalPart;
}

console.log(formatNumber(89127389712323.77, ",", 3));
console.log(formatNumber(234125, ",", 3));
console.log(formatNumber(1, ",", 3));
console.log(formatNumber(12, ",", 3));
console.log(formatNumber(100, ",", 3));
console.log(formatNumber(1000000, ",", 4));
console.log(formatNumber(100000.19, ",", 4));
console.log(formatNumber(10.19, ",", 4));
