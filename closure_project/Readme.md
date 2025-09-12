
```markdown
# 🎨 Challenge: Color Voting App (Using Closures & DOM)

In this challenge, you will build a **Color Voting Application** where users can:  

1. **Choose a color** by clicking a button.  
2. **Vote** for the selected color.  
3. See **live vote counts** update on the page.  
4. **Reset votes** back to zero.  

The challenge is designed to help you understand:  
- How **closures** maintain state (votes for each color).  
- How to **manipulate the DOM** with JavaScript.  
- How to handle **events** with buttons.  

---

## 📝 Requirements
- There are 3 color buttons: Green, Blue, Pink.  
- When a user clicks a color button, the background changes to that color and that color becomes the **current selection**.  
- When the user clicks **Vote Here**, the vote for the selected color increases by 1.  
- The votes should be displayed dynamically:  
```

Current votes for <color name>: <vote count>

````
- If no color is selected and the user clicks **Vote Here**, show an **alert**: `"Please select a color first"`.  
- Add a **Reset button** that clears all votes and resets the display.

---

## 🖼️ HTML Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Closures Voting App</title>
<link rel="stylesheet" href="styles.css"/>
</head>
<body>
<div class="section-center">
  <h2>Choose a color to vote for below:</h2>
  <div class="color-container">
    <button id="lightgreen-btn" class="color-btn">Green</button>
    <button id="lightblue-btn" class="color-btn">Blue</button>
    <button id="lightpink-btn" class="color-btn">Pink</button>  
  </div>

  <div class="vote-container">
    <button id="vote-btn">Vote Here</button>
    <button id="reset-btn">Reset Votes</button>
  </div>

  <div class="votes">
    <p id="vote-display">Current votes for <span id="color-name">color name</span>: <span id="vote-count">0</span> </p>
  </div>
</div>

<script src="app.js"></script>
</body>
</html>
````

---

## 🖥️ JavaScript Starter Code

```js
// Step 1: Store colors and initialize vote counts
const colors = ['lightgreen', 'lightblue', 'lightpink'];
const votes = {
  lightgreen: 0,
  lightblue: 0,
  lightpink: 0
};

let currentColor = null;

// Step 2: Create a function to attach event listeners to color buttons
function createColorButton(color) {
  // TODO: Select the button by id
  // TODO: Add click event listener
  // - Change background to that color
  // - Update currentColor
  // - Call updateVoteDisplay()
}

// Attach color button listeners
colors.forEach(color => {
  createColorButton(color);
});

// Step 3: Function to update vote display
function updateVoteDisplay() {
  // TODO: update #color-name and #vote-count with current values
}

// Step 4: Create vote button functionality
function createVoteButton() {
  // TODO: on click, increase vote for currentColor
  // if no color selected -> alert user
}

// Step 5: Create reset functionality
function reset() {
  // TODO: Reset all votes to 0
  // TODO: Update vote display
}

// Add event listeners for vote and reset buttons
createVoteButton();
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', reset);
```

---

## 🎯 Learning Goals

By completing this project, you will:

* Practice **closures** to store and update vote counts.
* Learn **DOM manipulation** (`querySelector`, `textContent`, `style`).
* Gain hands-on experience with **event listeners**.

---

## 🚀 Extensions (for extra challenge)

* Add more colors dynamically to the array and DOM.
* Keep track of the **total votes** across all colors.
* Highlight the **leading color** with a special border.
* Save vote counts in **localStorage** so refreshing the page doesn’t reset them.

```

