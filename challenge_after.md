

# ⏳ Challenge: after

## Problem Statement

Write a function `after` that:

* Takes **two parameters**:

  1. The number of times the returned function needs to be called before executing.
  2. The **callback function** to execute once the condition is met.
* The returned function should:

  * Do nothing (return `undefined`) until it has been called the specified number of times.
  * Once the call count is reached, it should execute the callback.

---

## Example Usage

```js
const called = function(string) { 
  return 'hello ' + string; 
};

const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined
console.log(afterCalled('world')); // -> undefined
console.log(afterCalled('world')); // -> 'hello world'
```

---

## Starter Code

```js
// ADD CODE HERE

const called = function(string) { 
  return 'hello ' + string; 
};

const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
// console.log(afterCalled('world')); // -> undefined
// console.log(afterCalled('world')); // -> undefined
// console.log(afterCalled('world')); // -> 'hello world'
```

---

## Instructions

1. Implement the function `after`.
2. Use a **counter** to keep track of how many times the returned function has been invoked.
3. Call the callback once the counter reaches the specified number.

---

## 🔑 Concept Check

* How does `after` rely on **closures** to keep track of state?
* What happens if you call the function more than the specified number of times?
* Can you modify it to **always call the callback after the threshold is passed**, not just once?

---

