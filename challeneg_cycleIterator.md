
# 🔄 Challenge: cycleIterator

Create a function **`cycleIterator`** that accepts an **array**, and returns a new function.  

The returned function:  
- Accepts **zero arguments**.  
- On the **first call**, returns the **first element** of the array.  
- On the **second call**, returns the **second element**, and so forth.  
- After the **last element**, it cycles back to the **first element** again, and continues in order.  

---

## 📚 Learning Goals
- Practice **closures** to maintain internal state across calls.  
- Learn how to **cycle through arrays** without resetting manually.  
- Reinforce the concept of **persistent memory** inside returned functions.  

---

## 🧩 Your Challenge

```js
function cycleIterator(array) {
  // ADD CODE HERE
}
````

---

## 📌 Example Usage

```js
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);

console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
```

---

## 📝 Solution (click to reveal)

<details>
  <summary>✅ Show Solution</summary>

```js
function cycleIterator(array) {
  let index = 0;

  return function() {
    const value = array[index];
    index = (index + 1) % array.length; // cycle back to start
    return value;
  };
}
```

</details>

