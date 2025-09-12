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
