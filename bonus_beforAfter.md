

# 🔄 Challenge: before vs after

Closures can control **when** and **how often** a callback runs.
Two useful higher-order functions for this are **`before`** and **`after`**.

---

## 📌 `after`

* Executes the callback **only after it has been called N times**.
* Before that, it returns `undefined`.

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

## 📌 `before`

* Executes the callback **up to N times**.
* After that, it **reuses the last computed result** instead of calling the callback again.

```js
const called = function(string) { 
  return 'hello ' + string; 
};

const beforeCalled = before(3, called);

console.log(beforeCalled('world'));    // -> 'hello world'
console.log(beforeCalled('everyone')); // -> 'hello everyone'
console.log(beforeCalled('JS'));       // -> 'hello JS'
console.log(beforeCalled('ignored'));  // -> 'hello JS' (last result reused)
```

---

## 🔍 Side-by-Side Comparison

| Function   | Runs callback when?            | After limit?                           |
| ---------- | ------------------------------ | -------------------------------------- |
| **after**  | Only **after N calls**         | Callback starts running from N-th call |
| **before** | Only **for the first N calls** | Returns the **last result** forever    |

---

## 🧠 Concept Check

1. How does **`after`** delay execution until a threshold is reached?
2. Why does **`before`** need to remember the last result?
3. Can you think of **real-world use cases** for each?

---

## 💡 Hint for Students

* Both `before` and `after` rely on **closures** to track state (like counters and results).
* If you’re stuck, ask in **CSX Slack** (`#csx-challenge-help`). Mentors won’t hand over solutions, but they’ll help you debug your logic.

---

👉 This way, learners see them as a **pair of opposites**:

* `after` → **"wait until later"**
* `before` → **"stop after a limit"**

