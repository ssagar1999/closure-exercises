

# 📝 Problem: Censor Function

## Problem Statement

Create a function `censor` that accepts **no arguments**.

* `censor` should return another function.
* The returned function should:

  * Accept **two strings** → store them as a replacement pair (`from → to`).
  * Accept **one string** → return the string with all instances of the saved "from" strings replaced by their corresponding "to" strings.

---

## Example

```js
// Function Definition
// ADD CODE HERE

// Usage Example
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');

console.log(
  changeScene('The quick, brown fox jumps over the lazy dogs.')
); 
// Output: 'The slow, brown fox jumps over the lazy cats.'
```

---

## Constraints

* The function should handle **multiple replacement pairs**.
* Replacements should apply to **all occurrences** of the word.
* Assume only string inputs will be given.

---

## Hints 💡

1. You’ll need to store the string pairs somewhere inside `censor` (closure!).
2. When a single string is passed, loop over all stored pairs and apply `replaceAll`.

---

## Expected Output

```txt
The slow, brown fox jumps over the lazy cats.
```

---

