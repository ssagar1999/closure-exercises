

# ⏳ Challenge: before

## Problem Statement

Write a function `before` that:

* Takes **two parameters**:

  1. The number of times the callback can be called.
  2. The **callback function**.
* The returned function should:

  * Call the callback **only up to N times**.
  * After that, return the **last computed result** from the callback instead of calling it again.

---

## Example Usage

```js
const called = function(string) { 
  return 'hello ' + string; 
};

const beforeCalled = before(3, called);

console.log(beforeCalled('world')); // -> 'hello world'
console.log(beforeCalled('everyone')); // -> 'hello everyone'
console.log(beforeCalled('JS')); // -> 'hello JS'
console.log(beforeCalled('ignored')); // -> 'hello JS' (last result reused)
```

---

## Starter Code

```js
// ADD CODE HERE

const called = function(string) { 
  return 'hello ' + string; 
};

const beforeCalled = before(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
// console.log(beforeCalled('world'));     // -> 'hello world'
// console.log(beforeCalled('everyone'));  // -> 'hello everyone'
// console.log(beforeCalled('JS'));        // -> 'hello JS'
// console.log(beforeCalled('ignored'));   // -> 'hello JS'
```

---

## Instructions

1. Implement the function `before`.
2. Use a **counter** to track how many times the callback has been invoked.
3. Save the **last returned result** so that it can be reused once the limit is reached.

---

## 🔑 Concept Check

* How is `before` the opposite of `after`?
* Why does `before` need to store the **last result**?
* What happens if the limit is set to `1`?

---



Want me to also create a **combo challenge** markdown (`beforeAfter.md`) that compares `before` and `after` side by side with a mini table + example so students see the contrast clearly?
