

````markdown
# 🔄 Mini Project: before vs after  

Closures are powerful tools to control **when** and **how often** a function runs.  
In this challenge, you’ll implement two higher-order functions:  

- **`before`** → runs the callback up to **N times**, then reuses the last result.  
- **`after`** → runs the callback **only after N calls** have happened.  

---

## 📚 Learning Goals  

- Understand closures and counters in JavaScript.  
- Differentiate between **delaying execution (`after`)** and **limiting execution (`before`)**.  
- Apply both in a **real-world use case** (API request limiting).  

---

## 📌 Example  

### `after`  
```js
const called = function(string) { 
  return 'hello ' + string; 
};

const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined
console.log(afterCalled('world')); // -> undefined
console.log(afterCalled('world')); // -> 'hello world'
````

### `before`

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

## 🧩 Your Challenge

### 1️⃣ Implement `after`

```js
function after(count, callback) {
  // ADD CODE HERE
}
```

### 2️⃣ Implement `before`

```js
function before(count, callback) {
  // ADD CODE HERE
}
```

---

## 🎯 Mini Project: API Request Limiter

We’ll simulate **API rate limiting** using both `before` and `after`.

### Requirements:

1. Write a function `makeRequest` that logs `"Request sent!"`.
2. Use `before(3, makeRequest)` → should only allow **3 successful requests**.

   * After that, it reuses the last result.
3. Use `after(2, makeRequest)` → should only start executing **after 2 calls**.

### Example Output:

```js
const limitedBefore = before(3, makeRequest);
const limitedAfter = after(2, makeRequest);

console.log(limitedBefore()); // "Request sent!"
console.log(limitedBefore()); // "Request sent!"
console.log(limitedBefore()); // "Request sent!"
console.log(limitedBefore()); // "Request sent!" (reused result)

console.log(limitedAfter()); // undefined
console.log(limitedAfter()); // undefined
console.log(limitedAfter()); // "Request sent!"
```

---

## ✅ Submission

* Implement both `before` and `after` in a `beforeAfter.js` file.


---

## 💡 Reminder

If you get stuck:

* Revisit how closures capture variables.
* Think about **counters**.
* Ask yourself:

  * "When should I start executing?" → `after`
  * "When should I stop executing?" → `before`

---

\
