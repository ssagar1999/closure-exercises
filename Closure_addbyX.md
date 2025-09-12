
# ➕ Challenge: addByX

## Problem Statement

We are going to create a function `addByX` that **returns a new function**.
The returned function should take an input and **add it by `x`**.

---

## Example Usage

```js
const addByTwo = addByX(2);
addByTwo(1); // should return 3
addByTwo(2); // should return 4
addByTwo(3); // should return 5

const addByThree = addByX(3);
addByThree(1); // should return 4
addByThree(2); // should return 5

const addByFour = addByX(4);
addByFour(4);  // should return 8
addByFour(10); // should return 14
```

---

## Starter Code

```js
// ADD CODE HERE

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output

// Now call addByTwo with an input of 2 and log the output
```

---

## Instructions

1. Implement the function `addByX`.
2. It should **return another function** that adds the input by `x`.
3. Test your code using the examples above.

---

## 🔑 Concept Check

* Closures: Why does the returned function still remember the value of `x`?
* Higher-Order Functions: Why is `addByX` considered one?

---

