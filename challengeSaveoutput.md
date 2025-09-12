


# 🗂 Challenge: saveOutput

Create a function **`saveOutput`** that accepts:  

1. A function (that itself accepts one argument).  
2. A string (that will act as a **password**).  

`saveOutput` will return a new function that:  
- Behaves exactly like the passed-in function for normal inputs.  
- When the **password string** is passed in as an argument, it should return an **object** containing all previously passed-in arguments as keys, and their corresponding outputs as values.  

---

## 📚 Learning Goals

- Understand **closures** and how functions can “remember” state.  
- Practice storing results in an object for later access.  
- Learn how to implement **protected access** to hidden data.  

---

## 🧩 Your Challenge

```js
function saveOutput(func, password) {
  // ADD CODE HERE
}
````

---

## 📌 Example Usage

```js
const multiplyBy2 = function(num) { 
  return num * 2; 
};

const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

console.log(multBy2AndLog(2));    // should log: 4
console.log(multBy2AndLog(9));    // should log: 18
console.log(multBy2AndLog('boo'));// should log: { 2: 4, 9: 18 }
```

---

## 📝 Solution (click to reveal)

<details>
  <summary>✅ Show Solution</summary>

```js
function saveOutput(func, password) {
  const cache = {};
  
  return function(arg) {
    if (arg === password) {
      return cache;
    }
    const result = func(arg);
    cache[arg] = result;
    return result;
  };
}
```

</details>

---

🚀 **Extension Ideas:**

* Modify it so it supports **multiple passwords** with different levels of access.
* Extend the function to keep track of **how many times** each input was called.
* Build a **memoization utility** using the same pattern.


