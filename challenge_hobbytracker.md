
# 🕒 Challenge: hobbyTracker

Create a function **`hobbyTracker`** that takes an **array of hobbies** as a parameter and creates a **cache object** with each hobby as a key.  

- `hobbyTracker` should return a **function**.  
- The returned function accepts:  
  - A **string** representing the hobby.  
  - An **integer** representing how many hours practiced.  

---

## 📚 Learning Goals
- Practice **closures** to persist state between function calls.  
- Learn how to dynamically create and update objects.  
- Handle both **updating state** and **resetting state** with one function.  

---

## 🧩 Behavior Requirements

1. When invoked with `(hobby, hours)` → it should update the cache, adding the `hours` to the correct hobby.  
2. When invoked with **no arguments** → it should reset all values in the cache to **0** and return the string:  
```

'tracker has been reset!'

````

---

## 📝 Starter Code

```js
function hobbyTracker(hobbies) {
// ADD CODE HERE
}

// Uncomment the code below to test:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

updateHobbies('yoga', 2);
// { yoga: 2, baking: 0, piano: 0 }

updateHobbies('baking', 4);
// { yoga: 2, baking: 4, piano: 0 }

updateHobbies('yoga', 1);
// { yoga: 3, baking: 4, piano: 0 }

console.log(updateHobbies('piano', 2)); 
// { yoga: 3, baking: 4, piano: 2 }

console.log(updateHobbies()); 
// 'tracker has been reset!'

console.log(updateHobbies('baking', 1)); 
// { yoga: 0, baking: 1, piano: 0 }
````

---

## ✅ Solution (click to reveal)

<details>
  <summary>Show Solution</summary>

```js
function hobbyTracker(hobbies) {
  const cache = {};
  hobbies.forEach(hobby => cache[hobby] = 0);

  return function(hobby, hours) {
    if (hobby === undefined && hours === undefined) {
      for (let key in cache) {
        cache[key] = 0;
      }
      return 'tracker has been reset!';
    }
    cache[hobby] += hours;
    return cache;
  };
}
```

</details>

