
# 📅 Challenge: dateStamp

Create a function **`dateStamp`** that accepts a **function** and returns a new function.  

- The returned function should:  
  1. Accept whatever arguments the passed-in function accepts.  
  2. Return an **object** with two keys:  
     - `date`: today's date (not including the time) as a **human-readable string**.  
     - `output`: the result from invoking the original passed-in function.  

---

## 📚 Learning Goals
- Practice **higher-order functions**.  
- Learn how to wrap a function with **additional behavior**.  
- Use the **`Date` object** in JavaScript for formatting.  

---

## 📝 Starter Code

```js
// ADD CODE HERE

// Uncomment these to test your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); 
// should log: { date: (today's date), output: 8 }

console.log(stampedMultBy2(6)); 
// should log: { date: (today's date), output: 12 }
````

---

## ✅ Solution (click to reveal)

<details>
  <summary>Show Solution</summary>

```js
function dateStamp(func) {
  return function(...args) {
    const today = new Date().toDateString(); // human-readable date only
    return {
      date: today,
      output: func(...args)
    };
  };
}
```

</details>

