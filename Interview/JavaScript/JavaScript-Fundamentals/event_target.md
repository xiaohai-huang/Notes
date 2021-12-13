## Event target & currentTarget

[codesandbox demo](https://codesandbox.io/s/e-target-e-currenttarget-zqhw4?file=/src/index.js)

`event.currentTarget` is the element that is attached the event listener

`event.target` refers to the element during bubbling or capturing phase of the event.

```js
// Make a list
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // e.currentTarget refers to the <ul> element
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
  console.log({ target: evt.target, currentTarget: evt.currentTarget });
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);
```
