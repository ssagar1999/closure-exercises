

````markdown
# ⚡ Challenge: curry

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a **single argument**.  

👉 Your task: Implement a function `curry` which:  
- Accepts a function as its only argument.  
- Returns a new function that accepts **one argument at a time**.  
- Keeps returning functions until it has received the required number of arguments.  
- Once enough arguments are provided, the original function is executed with those arguments.  

---

## 📝 Examples

```js
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(3)(4)); // 7

// Can also partially apply
const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4)); // 7
````

```js
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);

console.log(curriedMultiplyThreeNumbers(4)(5)(6)); // 120

// Partial application step by step
const containsFour = curriedMultiplyThreeNumbers(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120
```

---

## 🚀 Starter Code

```js
// ADD CODE HERE
function curry(func) {
  // TODO: return a function that handles currying logic
}
```

---

## 🎯 Learning Goals

* Understand **currying** and **partial application**.
* Deepen understanding of **closures** and **function arity** (`func.length`).
* Practice breaking multi-argument functions into **single-argument chains**.

---

## 💡 Extension Ideas

* Support currying for functions with **any number of arguments**.
* Allow the returned curried function to accept **multiple arguments at once** (optional challenge).

```

---

```
