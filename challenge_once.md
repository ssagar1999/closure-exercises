

# 🔁 Challenge: once

## Problem Statement

Write a function `once` that accepts a **callback** as input and returns a new function.

* When the returned function is called the **first time**, it should:

  * Call the callback
  * Return the callback’s output
* If it is called **any additional times**, instead of calling the callback again, it should simply return the **same output value from the first call**.

---

## Example Usage

```js
const addByTwoOnce = once(function(num) {
  return num + 2;
});

// First call executes the callback
console.log(addByTwoOnce(5));     // should log 7

// Subsequent calls return the same result (7), not re-run the callback
console.log(addByTwoOnce(10));    // should log 7
console.log(addByTwoOnce(9001));  // should log 7
```

---

## Starter Code

```js
// ADD CODE HERE

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(addByTwoOnce(5));     // should log 7
// console.log(addByTwoOnce(10));    // should log 7
// console.log(addByTwoOnce(9001));  // should log 7
```

---

## Instructions

1. Implement the function `once`.
2. Use closures to **remember the first result**.
3. Ensure that all subsequent calls return that stored result instead of recalculating.

---

## 🔑 Concept Check

* Why is this an example of **closures** in action?
* Where is the result being stored so it persists across calls?
* Can you think of real-world scenarios where running a function only once is useful? (e.g., payment processing, API initialization, expensive DB queries).

---

