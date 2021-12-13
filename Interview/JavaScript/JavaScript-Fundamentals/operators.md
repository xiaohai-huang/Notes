## Nullish coalescing operator `??`
__Falsy values__: `false`, `0`, an empty string `""` and `null`/`undefined`.

__Not defined values__: `null`/`undefined`.

__Definition__: The result of `a ?? b` is:
- if a is __defined__ then a
- if a is __not defined__ then b


In other words, `??` returns the first argument if it not `null/undefined`. Otherwise, the second one.

```javascript
let height = null;
// Set height=100, if height is null or undefined
height = height ?? 100;
// same as
if (height === null || height === undefined) {
    height = 100;
} else {
    height = height;
}
```
Practical usages:
```js
let userName = null;

alert(userName ?? "Default Name") // Default Name


let userName = "Xiaohai Huang";
alert(userName ?? "Default Name") // Xiaohai Huang

let height = 0;
alert(height ?? 100) // 0   -    ?? considers defined value
alert(height || 100) // 100 - OR || considers falsly value
```
