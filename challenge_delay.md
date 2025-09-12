

````markdown
# ⏱ Challenge: delay

Write a function **`delay`** that accepts two arguments:  

1. A **callback function**  
2. A **wait time** in milliseconds  

`delay` should return a function that, when invoked, waits for the specified amount of time before executing the callback.  

💡 **Hint:** Research how `setTimeout()` works in JavaScript.

---

## 📚 Learning Goals

- Understand **asynchronous behavior** in JavaScript.  
- Use **`setTimeout`** to schedule delayed execution.  
- See how closures preserve the callback and wait time.  

---

## 🧩 Your Challenge

```js
function delay(callback, wait) {
  // ADD CODE HERE
}
````

---

## 📌 Example Usage

```js
let count = 0;
const delayedFunc = delay(() => count++, 1000);

delayedFunc();
console.log(count);                         // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
```

---

## 📝 Solution (click to reveal)

<details>
  <summary>✅ Show Solution</summary>

```js
function delay(callback, wait) {
  return function(...args) {
    setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
```

</details>

---

🚀 **Extension Activity:**

* Modify `delay` so that it accepts multiple calls and schedules multiple executions.
* Create a `delayedLogger` function that logs a message after a delay (e.g., `delayedLogger("Hello!", 2000)`).

```

