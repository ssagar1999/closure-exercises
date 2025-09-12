

# 🔍 Challenge: Scoping

## Problem Statement

Examine the code for the `outer` function.
Notice that we are **returning a function**, and that function is **using variables outside of its scope**.

👉 Before running the code, **try to deduce the output**.

---

## Code Snippet

```js
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before you do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();
```

---

## Instructions

1. Read the code carefully.
2. Guess the output of each line **before uncommenting**.
3. Uncomment the function calls **one at a time**.
4. Verify your guesses against the actual logged output.

---

## 🔑 Concept Check

* Closures: Why does `incrementCounter` remember `counter`?
* Scope: Why does each call to `outer()` create a new `counter`?
* Why do `willCounter` and `jasCounter` not share the same counter?

---

